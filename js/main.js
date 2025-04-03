/* MODALS */
const overlay = document.querySelector(".overlay");
const modal = document.getElementById("modal");
const modalOpenButtons = document.querySelectorAll(".open-modal");
const modalCloseButton = document.querySelector(".modal-close-btn");

let NameModal = document.getElementById("modal-name");
let PhoneModal = document.getElementById("modal-tel");
let ProjectModal = document.getElementById("modal-textarea");

let invalidNameModal = document.querySelector(".modal-invalid-message-name");
let invalidTelModal = document.querySelector(".modal-invalid-message-tel");
let invalidProjectModal = document.querySelector(
  ".modal-invalid-message-project"
);

const modalSuccess = document.getElementById("modal-success");
let modalSuccessCloseButtons = document.querySelectorAll(
  ".modal-success-close"
);

modalSuccessCloseButtons.forEach((modalSuccessCloseButton) => {
  modalSuccessCloseButton.addEventListener("click", () => {
    overlay.classList.remove("overlay-modal-active");
    modalSuccess.classList.remove("modal-active");
  });
});

modalOpenButtons.forEach((modalOpenButton) => {
  modalOpenButton.addEventListener("click", () => {
    overlay.classList.add("overlay-modal-active");
    modal.classList.add("modal-active");
  });
});

modalCloseButton.addEventListener("click", () => {
  overlay.classList.remove("overlay-modal-active");
  modal.classList.remove("modal-active");

  NameModal.value = "";
  NameModal.classList.remove("input-invalide");
  PhoneModal.value = "";
  PhoneModal.classList.remove("input-invalide");
  ProjectModal.value = "";
  ProjectModal.classList.remove("input-invalide");

  invalidNameModal.classList.remove("invalid-message-active");
  invalidTelModal.classList.remove("invalid-message-active");
  invalidProjectModal.classList.remove("invalid-message-active");
});

overlay.addEventListener("click", () => {
  overlay.classList.remove("overlay-modal-active");
  modal.classList.remove("modal-active");
  modalSuccess.classList.remove("modal-active");

  NameModal.value = "";
  NameModal.classList.remove("input-invalide");
  PhoneModal.value = "";
  PhoneModal.classList.remove("input-invalide");
  ProjectModal.value = "";
  ProjectModal.classList.remove("input-invalide");

  invalidNameModal.classList.remove("invalid-message-active");
  invalidTelModal.classList.remove("invalid-message-active");
  invalidProjectModal.classList.remove("invalid-message-active");
});

/* HEADER BURGER */
const header = document.querySelector(".header");

const burger = document.getElementById("burger");
const ham = document.querySelector(".ham");
const burgerMenu = document.getElementById("burger-menu");
const burgerProjects = document.getElementById("burger-projects");
const burgerServices = document.getElementById("burger-services");
const burgerStages = document.getElementById("burger-stages");
const burgerContacts = document.getElementById("burger-contacts");
const burgerOrderBtn = document.querySelector(".burger__nav-item-btn");

const burgerBtns = [
  burgerProjects,
  burgerServices,
  burgerStages,
  burgerContacts,
  burgerOrderBtn,
];

burger.addEventListener("click", () => {
  burgerMenu.classList.toggle("burger-menu-active");
  overlay.classList.toggle("overlay-none");
});

const burgerMenuSelection = () => {
  burgerMenu.classList.remove("burger-menu-active");
  overlay.classList.add("overlay-none");
  ham.classList.remove("active");
};

burgerBtns.forEach((btn) => {
  btn.addEventListener("click", () => burgerMenuSelection());
});

overlay.addEventListener("click", () => burgerMenuSelection());

/* HEADER NAV OBSERVER */

let line = document.getElementById("line");
let avtiveLine = document.querySelector(".active-line");
let widhtTrack = list.offsetWidth;
let procent = widhtTrack / 100;

function AnimationHandler() {
  avtiveLine.classList.remove("active-line-active");
}

function checkScrollItems() {
  document.querySelectorAll(".section-target").forEach((section) => {
    let sectionHeight = section.getBoundingClientRect().top - 200;
    if (sectionHeight < 0 && section.scrollHeight + sectionHeight >= 100) {
      document.querySelectorAll(".nav-item-link").forEach((link) => {
        let id = link.getAttribute("href").replace("#", "");
        if (id) {
          if (id === section.getAttribute("id")) {
            link.classList.add("nav-link-active");

            switch (id) {
              case "section-projects":
                let move1 = procent - 28;
                if (line.style.left !== "-23.2px") {
                  avtiveLine.classList.add("active-line-active");
                }
                line.style.left = move1 + "px";
                break;
              case "section-services":
                let move2 = procent * 19;
                if (line.style.left !== "91.2px") {
                  avtiveLine.classList.add("active-line-active");
                }
                line.style.left = move2 + "px";
                break;
              case "section-stages":
                let move3 = procent * 46.5;
                if (line.style.left !== "223.2px") {
                  avtiveLine.classList.add("active-line-active");
                }
                line.style.left = move3 + "px";
                break;
              case "section-contacts":
                let move4 = procent * 76.3;
                if (line.style.left !== "366.24px") {
                  avtiveLine.classList.add("active-line-active");
                }
                line.style.left = move4 + "px";
                break;
            }
          } else {
            link.classList.remove("nav-link-active");
          }
        }
      });
    }
  });
}

function checkScrollStages() {
  document.querySelectorAll(".section-stages__stage").forEach((section) => {
    let sectionHeight = section.getBoundingClientRect().top - 550;
    if (sectionHeight < 0 && section.scrollHeight + sectionHeight >= 50) {
      document.querySelectorAll(".section-stages__dot").forEach((dot) => {
        let id = dot.getAttribute("data-target");
        if (id) {
          if (id === section.getAttribute("id")) {
            document.querySelector(`.${id}`).classList.add("dot-active");
            document
              .querySelector(`[data-heading="${id}"]`)
              .classList.add("heading-active");
              document
              .querySelector(`[data-num="${id}"]`)
              .classList.add("heading-active");
          } else {
            return;
          }
        }
      });
    }
  });
}

window.addEventListener("scroll", function () {
  checkScrollItems();
  checkScrollStages();
  avtiveLine.addEventListener("animationend", AnimationHandler, false);
});

// TYPING

const typing1 = document.getElementById("typing-1");
const typing2 = document.getElementById("typing-2");
const typing3 = document.getElementById("typing-3");
const typing4 = document.getElementById("typing-4");

function AnimationTypyngHandler(typing, anothertyping) {
  typing.classList.remove("typing-active");
  typing.classList.add("typing-text-del");

  anothertyping.classList.remove("typing-text-del");
  anothertyping.classList.add("typing-active");
}

typing1.addEventListener(
  "animationend",
  () => {
    AnimationTypyngHandler(typing1, typing2);
  },
  false
);
typing2.addEventListener(
  "animationend",
  () => {
    AnimationTypyngHandler(typing2, typing3);
  },
  false
);
typing3.addEventListener(
  "animationend",
  () => {
    AnimationTypyngHandler(typing3, typing4);
  },
  false
);
typing4.addEventListener(
  "animationend",
  () => {
    AnimationTypyngHandler(typing4, typing1);
  },
  false
);

/* NUMBERS */

(function () {
  let counter = document.querySelectorAll(".counter");
  let limit = 0; // Переменная, чтобы останавливать функцию, когда всё запустится.
  window.addEventListener("scroll", function () {
    if (limit == counter.length) {
      return;
    }

    for (let i = 0; i < counter.length; i++) {
      let pos = counter[i].getBoundingClientRect().top; //Позиция блока, считая сверху окна
      let win = window.innerHeight - 150; // На 40 пикселей меньше, чем высота окна
      if (pos < win && counter[i].dataset.stop === "0") {
        counter[i].dataset.stop = 1; // Останавливаем перезапуск счета в этом блоке
        let x = 0;
        limit++; // Счетчик будет запущен, увеличиваем переменную на 1
        let int = setInterval(function () {
          // Раз в 60 миллисекунд будет прибавляться 50-я часть нужного числа
          x = x + Math.ceil(counter[i].dataset.to / 50);
          counter[i].innerText = x;
          if (x > counter[i].dataset.to) {
            //Как только досчитали - стираем интервал.
            counter[i].innerText = counter[i].dataset.to;
            clearInterval(int);
          }
        }, 40);
      }
    }
  });
})();

/* PROJECTS */

const majesticBtn = document.getElementById("majesticBtn");
const majesticContent = document.getElementById("majestic-car-content");

const tennisBtn = document.getElementById("tennisBtn");
const tennisContent = document.getElementById("tennis-open-club-content");

const shopozzBtn = document.getElementById("shopozzBtn");
const shopozzContent = document.getElementById("shopozz-content");

const masterTaoBtn = document.getElementById("masterTaoBtn");
const masterTaoContent = document.getElementById("master-tao-content");

const mavrsBtn = document.getElementById("mavrsBtn");
const mavrsContent = document.getElementById("mavrs-content");

const apartDeliveryBtn = document.getElementById("apartDeliveryBtn");
const apartDeliveryContent = document.getElementById("apart-delivery-content");

const projectsBtns = [
  majesticBtn,
  tennisBtn,
  shopozzBtn,
  masterTaoBtn,
  mavrsBtn,
  apartDeliveryBtn,
];

const projectsContents = [
  majesticContent,
  tennisContent,
  shopozzContent,
  masterTaoContent,
  mavrsContent,
  apartDeliveryContent,
];

const projectsMap = {
  majesticBtn: majesticContent,
  tennisBtn: tennisContent,
  shopozzBtn: shopozzContent,
  masterTaoBtn: masterTaoContent,
  mavrsBtn: mavrsContent,
  apartDeliveryBtn: apartDeliveryContent,
};

function setProject(button) {
  button.classList.add("projects__nav-item-active");
  projectsMap[button.id].classList.add("projects__content-active");

  let indexBtn = projectsBtns.indexOf(button);
  let newProjectsBtns = [...projectsBtns];
  newProjectsBtns.splice(indexBtn, 1);

  newProjectsBtns.forEach((btn) => {
    btn.classList.remove("projects__nav-item-active");
  });

  let indexContent = projectsContents.indexOf(projectsMap[button.id]);
  let newProjectsContents = [...projectsContents];
  newProjectsContents.splice(indexContent, 1);

  newProjectsContents.forEach((project) => {
    project.classList.remove("projects__content-active");
  });
}

projectsBtns.forEach((btn) => {
  btn.addEventListener("click", () => setProject(btn));
});

/* SERVICES NAV */

let servicesList = document.querySelector(".section-services__nav-list");
let servicesDev = document.getElementById("services-dev");
let servicesDevList = document.getElementById("services-dev-list");
let servicesDevApp = document.getElementById("services-dev-app");
let servicesDevAppList = document.getElementById("services-dev-app-list");
let servicesLayout = document.getElementById("services-layout");
let servicesLayoutList = document.getElementById("services-layout-list");
let servicesLine = document.getElementById("servicesLine");
let servicesWidhtTrack = servicesList.offsetWidth;
let servicesProcent = servicesWidhtTrack / 100;

servicesDev.addEventListener("click", () => {
  let move = servicesProcent * 7.5;
  servicesLine.style.left = move + "px";
  servicesDev.classList.add("section-services__nav-item-active");
  servicesDevApp.classList.remove("section-services__nav-item-active");
  servicesLayout.classList.remove("section-services__nav-item-active");

  servicesDevList.classList.remove("section-services__list-none");
  servicesDevAppList.classList.add("section-services__list-none");
  servicesLayoutList.classList.add("section-services__list-none");
});

servicesDevApp.addEventListener("click", () => {
  let move = servicesProcent * 45;
  servicesLine.style.left = move + "px";
  servicesDev.classList.remove("section-services__nav-item-active");
  servicesDevApp.classList.add("section-services__nav-item-active");
  servicesLayout.classList.remove("section-services__nav-item-active");

  servicesDevList.classList.add("section-services__list-none");
  servicesDevAppList.classList.remove("section-services__list-none");
  servicesLayoutList.classList.add("section-services__list-none");
});

servicesLayout.addEventListener("click", () => {
  let move = servicesProcent * 80.5;
  servicesLine.style.left = move + "px";
  servicesDev.classList.remove("section-services__nav-item-active");
  servicesDevApp.classList.remove("section-services__nav-item-active");
  servicesLayout.classList.add("section-services__nav-item-active");

  servicesDevList.classList.add("section-services__list-none");
  servicesDevAppList.classList.add("section-services__list-none");
  servicesLayoutList.classList.remove("section-services__list-none");
});

/* STAGES */

const mediaQuery = window.matchMedia("(max-width: 525px)");
const stageDescription1 = document.querySelector(".stage-description-1");
const stageDescription2 = document.querySelector(".stage-description-2");
const stageDescription3 = document.querySelector(".stage-description-3");
const stageDescription4 = document.querySelector(".stage-description-4");
const stageDescription5 = document.querySelector(".stage-description-5");

if (mediaQuery.matches) {
  stageDescription1.textContent =
    "Получим детальное описание проекта, определим цели и основные требования.";
  stageDescription2.textContent =
    "Выявим главные блоки сайта и их взаимосвязь.";
  stageDescription3.textContent =
    "Определим визуальную концепцию, цветовую палитру, типографику и стиль.";
  stageDescription4.textContent =
    "Напишем код для создания адаптивного и функционального интерфейса и оптимизируем его.";
  stageDescription5.textContent =
    "Проведем всестороннее тестирование функционала и запустим проект";
} else {
  stageDescription1.textContent =
    "Получим детальное описание проекта, определим цели и основные требования. На основе этой информации составим техническое задание, которое будет служить основой для всех последующих этапов разработки.";
  stageDescription2.textContent =
    "Определим главные блоки сайта и их взаимосвязь. Это поможет лучше понять, как будет работать конечный продукт, а также внести необходимые коррективы на ранней стадии разработки.";
  stageDescription3.textContent =
    "Определим визуальную концепцию, цветовую палитру, типографику и стиль. Визуализируем основные блоки, обеспечивая соответствие вашим требованиям.";
  stageDescription4.textContent =
    "Напишем код для создания адаптивного и функционального интерфейса. Оптимизируем его для различных устройств и браузеров. Настроим все необходимые плагины и интеграции для корректной работы всех функций сайта.";
  stageDescription5.textContent =
    "Проведем всестороннее тестирование функционала, чтобы выявить и исправить все возможные недочеты. После успешного тестирования запустим проект.";
}

window.addEventListener("resize", (e) => {
  if (mediaQuery.matches) {
    stageDescription1.textContent =
      "Получим детальное описание проекта, определим цели и основные требования.";
    stageDescription2.textContent =
      "Выявим главные блоки сайта и их взаимосвязь.";
    stageDescription3.textContent =
      "Определим визуальную концепцию, цветовую палитру, типографику и стиль.";
    stageDescription4.textContent =
      "Напишем код для создания адаптивного и функционального интерфейса и оптимизируем его.";
    stageDescription5.textContent =
      "Проведем всестороннее тестирование функционала и запустим проект";
  } else {
    stageDescription1.textContent =
      "Получим детальное описание проекта, определим цели и основные требования. На основе этой информации составим техническое задание, которое будет служить основой для всех последующих этапов разработки.";
    stageDescription2.textContent =
      "Определим главные блоки сайта и их взаимосвязь. Это поможет лучше понять, как будет работать конечный продукт, а также внести необходимые коррективы на ранней стадии разработки.";
    stageDescription3.textContent =
      "Определим визуальную концепцию, цветовую палитру, типографику и стиль. Визуализируем основные блоки, обеспечивая соответствие вашим требованиям.";
    stageDescription4.textContent =
      "Напишем код для создания адаптивного и функционального интерфейса. Оптимизируем его для различных устройств и браузеров. Настроим все необходимые плагины и интеграции для корректной работы всех функций сайта.";
    stageDescription5.textContent =
      "Проведем всестороннее тестирование функционала, чтобы выявить и исправить все возможные недочеты. После успешного тестирования запустим проект.";
  }
});
