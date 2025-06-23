document.addEventListener("DOMContentLoaded", () => {
  /* INPUT TEL MASK */

  [].forEach.call(document.querySelectorAll(".tel"), function (input) {
    var keyCode;
    function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      var pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      var matrix = "+7 (___)-___-__-__",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, ""),
        new_value = matrix.replace(/[_\d]/g, function (a) {
          return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
        });
      i = new_value.indexOf("_");
      if (i != -1) {
        i < 5 && (i = 3);
        new_value = new_value.slice(0, i);
      }
      var reg = matrix
        .substr(0, this.value.length)
        .replace(/_+/g, function (a) {
          return "\\d{1," + a.length + "}";
        })
        .replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (
        !reg.test(this.value) ||
        this.value.length < 5 ||
        (keyCode > 47 && keyCode < 58)
      )
        this.value = new_value;
      if (event.type == "blur" && this.value.length < 5) this.value = "";
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false);
  });

  /* Success modal */
  function ShowModalSuccess() {
    let overlayWrapper = document.querySelector(".overlay");
    let successModal = document.getElementById("modal-success");
    overlayWrapper.classList.add("overlay-modal-active");
    successModal.classList.add("modal-active");
  }

  /* Message */

  const orderBtn = document.getElementById("order-btn");
  let formName = document.getElementById("name");
  let formPhone = document.getElementById("tel");
  let formProject = document.getElementById("textarea");
  let checkPrivacy = document.getElementById("privacy-checkbox");

  let invalidMessageName = document.querySelector(".invalid-message-name");
  let invalidMessageTel = document.querySelector(".invalid-message-tel");
  let invalidMessageProject = document.querySelector(
    ".invalid-message-project"
  );
  let invalidMessageСheckbox = document.querySelector(
    ".invalid-message-checkbox"
  );

  /* Listening Form */

  formName.addEventListener("input", () => {
    formName.classList.remove("input-invalide");
    invalidMessageName.classList.remove("invalid-message-active");
  });

  formPhone.addEventListener("input", () => {
    formPhone.classList.remove("input-invalide");
    invalidMessageTel.classList.remove("invalid-message-active");
  });

  formProject.addEventListener("input", () => {
    formProject.classList.remove("input-invalide");
    invalidMessageProject.classList.remove("invalid-message-active");
  });

  checkPrivacy.addEventListener("change", () => {
    if (!checkPrivacy.checked) {
      document
        .querySelector(".checkbox-box")
        .classList.add("checkbox-invalide");
      invalidMessageСheckbox.classList.add("invalid-message-active");
    } else if (checkPrivacy.checked) {
      document
        .querySelector(".checkbox-box")
        .classList.remove("checkbox-invalide");
      invalidMessageСheckbox.classList.remove("invalid-message-active");
    }
  });

  /* Site - TG */
  const TOKEN = process.env.TOKEN;
  const CHAT_ID = process.env.CHAT_ID;
  const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

  orderBtn.addEventListener("click", function (e) {
    e.preventDefault();

    let message = `<b>Заявка с сайта: </b> kovalev-site.ru\n`;
    message += `(из блока оформления заказа)\n`;
    message += `\n`;
    message += `<b>Имя: </b> ${formName.value}\n`;
    message += `<b>Номер телефона: </b> ${formPhone.value}\n`;
    message += `<b>Работа: </b> ${formProject.value}`;

    if (formName.value == "") {
      formName.classList.add("input-invalide");
      invalidMessageName.classList.add("invalid-message-active");
    }
    if (formPhone.value == "") {
      formPhone.classList.add("input-invalide");
      invalidMessageTel.classList.add("invalid-message-active");
    }
    if (formPhone.value !== "" && formPhone.value.length < 18) {
      formPhone.classList.add("input-invalide");
      invalidMessageTel.textContent = "Введите полный номер телефона";
      invalidMessageTel.classList.add("invalid-message-active");
    }
    if (formProject.value == "") {
      formProject.classList.add("input-invalide");
      invalidMessageProject.classList.add("invalid-message-active");
    }
    if (!checkPrivacy.checked) {
      document
        .querySelector(".checkbox-box")
        .classList.add("checkbox-invalide");
      invalidMessageСheckbox.classList.add("invalid-message-active");
    } else if (
      formName.value !== "" &&
      formPhone.value !== "" &&
      formProject.value !== "" &&
      formPhone.value.length === 18 &&
      checkPrivacy.checked
    ) {
      axios
        .post(URI_API, {
          chat_id: CHAT_ID,
          parse_mode: "html",
          text: message,
        })
        .then((res) => {
          formName.value = "";
          formName.classList.remove("input-invalide");
          formPhone.value = "";
          formPhone.classList.remove("input-invalide");
          formProject.value = "";
          formProject.classList.remove("input-invalide");

          ShowModalSuccess();
        })
        .catch((err) => {
          console.warn(err);
        })
        .finally(() => {
          console.log("Message sent");
        });
    }
  });

  /* Message modal */

  const modalOrder = document.getElementById("modal");
  const orderBtnModal = document.getElementById("modal-order-btn");
  let formNameModal = document.getElementById("modal-name");
  let formPhoneModal = document.getElementById("modal-tel");
  let formProjectModal = document.getElementById("modal-textarea");
  let checkPrivacyModal = document.getElementById("modal-privacy-checkbox");

  let invalidMessageNameModal = document.querySelector(
    ".modal-invalid-message-name"
  );
  let invalidMessageTelModal = document.querySelector(
    ".modal-invalid-message-tel"
  );
  let invalidMessageProjectModal = document.querySelector(
    ".modal-invalid-message-project"
  );
  let invalidMessageСheckboxModal = document.querySelector(
    ".modal-invalid-message-checkbox"
  );

  /* Listening Form modal */

  formNameModal.addEventListener("input", () => {
    formNameModal.classList.remove("input-invalide");
    invalidMessageNameModal.classList.remove("invalid-message-active");
  });

  formPhoneModal.addEventListener("input", () => {
    formPhoneModal.classList.remove("input-invalide");
    invalidMessageTelModal.classList.remove("invalid-message-active");
  });

  formProjectModal.addEventListener("input", () => {
    formProjectModal.classList.remove("input-invalide");
    invalidMessageProjectModal.classList.remove("invalid-message-active");
  });

  checkPrivacyModal.addEventListener("change", () => {
    if (!checkPrivacyModal.checked) {
      document
        .querySelector(".checkbox-box")
        .classList.add("checkbox-invalide");
      invalidMessageСheckboxModal.classList.add("invalid-message-active");
    } else if (checkPrivacyModal.checked) {
      document
        .querySelector(".checkbox-box")
        .classList.remove("checkbox-invalide");
      invalidMessageСheckboxModal.classList.remove("invalid-message-active");
    }
  });

  /* Site - TG modal */

  orderBtnModal.addEventListener("click", function (e) {
    e.preventDefault();

    let message = `<b>Заявка с сайта: </b> kovalev-site.ru\n`;
    message += `(из модальной формы)\n`;
    message += `\n`;
    message += `<b>Имя: </b> ${formNameModal.value}\n`;
    message += `<b>Номер телефона: </b> ${formPhoneModal.value}\n`;
    message += `<b>Работа: </b> ${formProjectModal.value}`;

    if (formNameModal.value == "") {
      formNameModal.classList.add("input-invalide");
      invalidMessageNameModal.classList.add("invalid-message-active");
    }
    if (formPhoneModal.value == "") {
      formPhoneModal.classList.add("input-invalide");
      invalidMessageTelModal.classList.add("invalid-message-active");
    }
    if (formPhoneModal.value !== "" && formPhoneModal.value.length < 18) {
      formPhoneModal.classList.add("input-invalide");
      invalidMessageTelModal.textContent = "Введите полный номер телефона";
      invalidMessageTelModal.classList.add("invalid-message-active");
    }
    if (formProjectModal.value == "") {
      formProjectModal.classList.add("input-invalide");
      invalidMessageProjectModal.classList.add("invalid-message-active");
    }
    if (!checkPrivacyModal.checked) {
      document
        .querySelector(".checkbox-box")
        .classList.add("checkbox-invalide");
      invalidMessageСheckboxModal.classList.add("invalid-message-active");
    } else if (
      formNameModal.value !== "" &&
      formPhoneModal.value !== "" &&
      formProjectModal.value !== "" &&
      formPhoneModal.value.length === 18 &&
      checkPrivacyModal.checked
    ) {
      axios
        .post(URI_API, {
          chat_id: CHAT_ID,
          parse_mode: "html",
          text: message,
        })
        .then((res) => {
          formNameModal.value = "";
          formNameModal.classList.remove("input-invalide");
          formPhoneModal.value = "";
          formPhoneModal.classList.remove("input-invalide");
          formProjectModal.value = "";
          formProjectModal.classList.remove("input-invalide");

          modalOrder.classList.remove("modal-active");
          ShowModalSuccess();
        })
        .catch((err) => {
          console.warn(err);
        })
        .finally(() => {
          console.log("Message sent");
        });
    }
  });
});
