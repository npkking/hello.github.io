document.addEventListener("DOMContentLoaded", function () {
  const signupLink = document.querySelector(".signup-link");
  const forms = document.querySelector(".forms");

  signupLink.addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "ForgetPW.html";
  });
});

const forms = document.querySelector(".forms");
const pwShowHide = document.querySelectorAll(".eye-icon");
const links = document.querySelectorAll(".link");

pwShowHide.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    let pwFields =
      eyeIcon.parentElement.parentElement.querySelectorAll(".password");

    pwFields.forEach((password) => {
      if (password.type === "password") {
        password.type = "text";
        eyeIcon.classList.replace("bx-hide", "bx-show");
        return;
      }
      password.type = "password";
      eyeIcon.classList.replace("bx-show", "bx-hide");
    });
  });
});
