    // Оголошуємо об'єкт formData з порожніми рядками
    let formData = { email: "", message: "" };

    const form = document.getElementById("feedback-form");

    // Відновлюємо дані з локального сховища
    const savedData = localStorage.getItem("feedback-form-state");
    if (savedData) {
      formData = JSON.parse(savedData);
      form.email.value = formData.email || "";
      form.message.value = formData.message || "";
    }

    // Відстежуємо події input і оновлюємо локальне сховище
    form.addEventListener("input", (event) => {
      formData[event.target.name] = event.target.value.trim();
      localStorage.setItem("feedback-form-state", JSON.stringify(formData));
    });

    // Відстежуємо сабміт форми
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const { email, message } = formData;
      if (!email || !message) {
        alert("Fill please all fields");
      } else {
        console.log(formData);
        formData = { email: "", message: "" };
        localStorage.removeItem("feedback-form-state");
        form.email.value = "";
        form.message.value = "";
      }
    });