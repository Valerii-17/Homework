// const form = document.querySelector("form");
// // const input = document.querySelector("#test-text");
//
// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//
//   const formData = new FormData(event.target);
//   const formObj = {};
//
//   formData.forEach((value, key) => (formObj[key] = value));
//   console.log(formObj);
// });



const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const formObj = {};
    formData.forEach((value, key) => {
        formObj[key] = value;
    });

    const nameError = document.querySelector(".name-error");
    const messageError = document.querySelector(".message-error");
    const phoneError = document.querySelector(".phone-error");
    const emailError = document.querySelector(".email-error");

    nameError.textContent = "";
    messageError.textContent = "";
    phoneError.textContent = "";
    emailError.textContent = "";

    let isValid = true;

    const nameRegExp = /^[a-zA-Zа-яА-Я\s]+$/;
    const phoneRegExp = /^\+380\d{9}$/;
    const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (formObj.name === "") {
        nameError.textContent = "Name is required";
        isValid = false;
    } else if (!nameRegExp.test(formObj.name)) {
        nameError.textContent = "Name should contain only letters";
        isValid = false;
    }

    if (formObj.message.length < 5) {
        messageError.textContent = "Message must be at least 5 characters";
        isValid = false;
    }

    if (formObj.phone === "") {
        phoneError.textContent = "Phone number is required";
        isValid = false;
    } else if (!phoneRegExp.test(formObj.phone)) {
        phoneError.textContent = "Phone must start only with +380 and contain 9 digits after it";
        isValid = false;
    }

    if (formObj.email === "") {
        emailError.textContent = "Email is required";
        isValid = false;
    } else if (!emailRegExp.test(formObj.email)) {
        emailError.textContent = "Email must contain @ and dot";
        isValid = false;
    }

    if (isValid) {
        console.log(formObj);
        form.reset();
    }
});