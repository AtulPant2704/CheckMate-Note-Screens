const loginForm = document.querySelector(".login-form");
const signupForm = document.querySelector(".signup-form");
const loginBtn = document.querySelector(".login-btn");
const signupBtn = document.querySelector(".signup-btn");
const backdrop = document.querySelector(".backdrop");
const signupAccount = document.querySelector(".signup-account");
const loginAccount = document.querySelector(".login-account");

loginBtn.addEventListener("click", function () {
  loginForm.classList.add("login-form-active");
  backdrop.classList.add("backdrop-active");
});

signupBtn.addEventListener("click", function () {
  signupForm.classList.add("signup-form-active");
  backdrop.classList.add("backdrop-active");
});

backdrop.addEventListener("click", function () {
  backdrop.classList.remove("backdrop-active");
  loginForm.classList.remove("login-form-active");
  signupForm.classList.remove("signup-form-active");
});

signupAccount.addEventListener("click", function () {
  loginForm.classList.remove("login-form-active");
  signupForm.classList.add("signup-form-active");
});

loginAccount.addEventListener("click", function () {
  signupForm.classList.remove("signup-form-active");
  loginForm.classList.add("login-form-active");
});
