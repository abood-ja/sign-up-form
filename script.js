const subsEl = document.querySelector(".subs-btn");
const formEl = document.querySelector(".container--1");
const messageEl = document.querySelector(".container--2");
const emailEl = document.querySelector(".email");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const disEl = document.querySelector(".message-btn");
const errorEl = document.querySelector(".error");
subsEl.addEventListener("click", function (e) {
  e.preventDefault();
  const emailValue = emailEl.value;
  if (!emailValue) {
    errorEl.innerHTML = "Valid email required";
    emailEl.classList.add("error-state");
    return;
  } else if (!emailRegex.test(emailValue)) {
    errorEl.innerHTML = "Valid email required";
    emailEl.classList.add("error-state");

    return;
  } else {
    formEl.classList.add("hidden");
    messageEl.classList.remove("hidden");
  }
});
disEl.addEventListener("click", function () {
  emailEl.value = "";
  messageEl.classList.add("hidden");
  formEl.classList.remove("hidden");
});
emailEl.addEventListener("input", function () {
  emailEl.classList.remove("error-state");
  errorEl.innerHTML = "";
});
