const subsEl = document.querySelector(".subs-btn");
const formEl = document.querySelector(".container--1");
const messageEl = document.querySelector(".container--2");
const emailEl = document.querySelector(".email");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const disEl = document.querySelector(".message-btn");
subsEl.addEventListener("click", function (e) {
  e.preventDefault();
  const emailValue = emailEl.value;
  if (!emailValue) {
    alert("Email address is required");

    return;
  } else if (!emailRegex.test(emailValue)) {
    alert("Valid email required");
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
