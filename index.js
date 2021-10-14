"use strict";

const firstName = document.getElementById("1stname");
const lastname = document.getElementById("last-name");
const password = document.getElementById("password");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const address = document.getElementById("address");
const nation = document.getElementById("nation");
const gender = document.getElementById("gender");
const language = document.getElementById("language");
const birthDate = document.getElementById("birth-date");
const twitter = document.getElementById("twitter");
const linkedin = document.getElementById("linkedin");
const facebook = document.getElementById("facebook");
const google = document.getElementById("google");
const slogan = document.getElementById("slogan");
const cards = document.getElementById("cards");
const photo = document.getElementById("photo");

function fillForm(data) {
  console.log(data);
  photo.src = data.photo;
  firstName.value = data.first_name;
  lastname.value = data.last_name;
  email.value = data.email;
  phone.value = data.phone;
  address.value = data.address;
  nation.value = data.address_line_2;
  gender.value = data.gender;
  language.value = data.language;
  birthDate.value = data.birthday;
  slogan.value = data.slogan;
  twitter.value = data.social.twitter;
  facebook.value = data.social.facebook;
  linkedin.value = data.social.linkedin;
  google.value = data.social.instagram;

  data.payment_methods.forEach((method) => {
    const container = document.createElement("div");
    container.classList.add("col-md-5");
    container.classList.add("d-grid");
    container.classList.add("card");
    const payMethod = document.createElement("div");
    payMethod.classList.add(`d-inline-flex`);
    payMethod.classList.add(`justify-content-between`);
    payMethod.classList.add(`align-items-center`);
    payMethod.classList.add(`ms-1`);
    const image = document.createElement("img");
    image.classList.add("col");
    image.style.width = "5%";
    image.src =
      method.type === "visa"
        ? "https://pngimg.com/uploads/visa/visa_PNG25.png"
        : "https://pngimg.com/uploads/mastercard/mastercard_PNG7.png";
    const cardNumber = document.createElement("p");
    cardNumber.classList.add("col");
    cardNumber.classList.add("text-end");
    cardNumber.innerText = method.card;
    payMethod.appendChild(image);
    payMethod.appendChild(cardNumber);
    container.appendChild(payMethod);
    cards.appendChild(container);
  });
}

fetch("https://pominchuk.com/mbahrov/user-profile/data.php").then(
  (responce) => {
    responce.json().then((data) => fillForm(data.user));
  }
);
