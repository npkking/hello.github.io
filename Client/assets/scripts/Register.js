function validatePassword() {
  const email = document.querySelector(".Email").value;
  const userName = document.querySelector(".user").value;
  const password = document.querySelector(".password").value;
  const confirmPassword = document.querySelector(".ConfirmPW").value;

  // Check to see if the user has filled in all the information
  if (
    email === "" ||
    userName === "" ||
    password === "" ||
    confirmPassword === ""
  ) {
    alert("Please fill in all information");
  }
  return false;

  // Check if password and confirm password match
  if (password !== confirmPassword) {
    alert("Password and confirm password do not match");
    return false;
  }

  // Check if password length is between 8 and 15 characters
  if (password.length <= 8 || password.length >= 15) {
    alert("Password must be between 8 and 15 characters");
    return false;
  }
}

const forms = document.querySelector(".forms");
const pwShowHide = document.querySelectorAll(".eye-icon");
const links = document.querySelectorAll(".link");

pwShowHide.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    let pwFields =
      eyeIcon.parentElement.parentElement.querySelectorAll(".password");
    let pwFields1 =
      eyeIcon.parentElement.parentElement.querySelectorAll(".ConfirmPW");

    pwFields.forEach((password) => {
      if (password.type === "password") {
        password.type = "text";
        eyeIcon.classList.replace("bx-hide", "bx-show");
        return;
      }
      password.type = "password";
      eyeIcon.classList.replace("bx-show", "bx-hide");
    });

    pwFields1.forEach((password) => {
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

document.addEventListener("DOMContentLoaded", function () {
  const signupLink = document.querySelector(".register-link");
  signupLink.addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "Login1.html";
  });
});
