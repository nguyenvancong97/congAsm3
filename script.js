"use strict";
const info1 = document.getElementById("info1");
const form = document.getElementById("form");
const email = document.getElementById("email");
const buttonSubmit = document.getElementById("submit");

buttonSubmit.addEventListener("click", function (e) {
  e.preventDefault();
  const text = email.value;
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (text.match(mailformat)) {
    console.log("email");
    info1.style.display = "block";
    form.style.display = "none";
  } else {
    alert("Email không hợp lệ!!!");
  }
  return true;
});

const mouseOverEl = document.getElementsByClassName("mouseover");
const btnViewless = document.querySelector(".btnviewless");
const expEl = document.querySelector(".exp");
const eduEl = document.querySelector(".edu");
const workEl = document.querySelector(".work");
const hobbyEl = document.querySelector(".hobby");
const languageEl = document.querySelector(".language");
const skillEl = document.querySelector("skill");

for (let i = 0; i < mouseOverEl.length; i++) {
  const btnViewmore = mouseOverEl[i].children;
  const btnParentEl = mouseOverEl[i];

  mouseOverEl[i].addEventListener("mouseover", function () {
    console.log(mouseOverEl[i]);
    btnViewmore[1].classList.remove("hidden");
  });
  //  đầu ra//
  mouseOverEl[i].addEventListener("mouseout", function () {
    console.log(mouseOverEl[i]);
    btnViewmore[1].classList.add("hidden");
  });

  btnViewmore[1].addEventListener("click", function () {
    const cardContent =
      btnParentEl.parentElement.parentElement.nextElementSibling;
    if (
      btnViewmore[1].textContent == `▲ VIEW LESS` &&
      !btnViewmore[1].classList.contains("hidden")
    ) {
      cardContent.classList.add("hidden");
      btnViewmore[1].textContent = `▼ VIEW MORE`;
    } else {
      cardContent.classList.remove("hidden");
      btnViewmore[1].textContent = `▲ VIEW LESS`;
    }
  });
}
