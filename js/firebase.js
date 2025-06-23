// Конфиг вашего проекта Firebase
  const firebaseConfig = {
    apiKey: "AIzaSyD...",
    projectId: "site-tg-message-config",
    // Остальные параметры из консоли Firebase
  };

  // Инициализация
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

  // Получаем конфиг из Firestore
  const loadConfig = async () => {
    try {
      const doc = await db.collection("tg-config").doc("data").get();
      if (doc.exists) {
        const { TOKEN, CHAT_ID } = doc.data();
        console.log("Конфиг загружен");
        
        // Используйте переменные в вашем коде
        window.TELEGRAM_CONFIG = { TOKEN, CHAT_ID };
      }
    } catch (error) {
      console.error("Ошибка загрузки конфига:", error);
    }
  };

  loadConfig();