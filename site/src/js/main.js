import "slick-carousel/slick/slick";
import $ from "jquery";
import "jquery-validation";
import "@fancyapps/ui";
import Inputmask from "inputmask";
import ApiServices from "./services/ApiServices";
const onClickImageYouTub = document.querySelector(".about-salon__yuotub");
const contactForm = document.querySelector("#record-form");
const link = Array.from(document.querySelectorAll(".price-header__link"));
const content = Array.from(document.querySelectorAll(".price-table"));

function slickSlider() {
  $(".portfolio-inner").slick({
    arrows: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: ".slider-prev",
    nextArrow: ".slider-next",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },

      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
}
slickSlider();

// По клику на элемент открывается youtub

onClickImageYouTub.addEventListener("click", onRedirectYouTub);
function onRedirectYouTub() {
  window.location.href = "https://www.youtube.com/";
}

// Сбор данных в консоль

//отправка данных без перезагрузки
function handlerFormSubmit(event) {
  event.preventDefault();
  getDataForm(contactForm);
}
// данные с формы
function getDataForm(formNode) {
  let elements = formNode;
  let data = Array.from(elements)
    .filter((item) => !!item.name)
    .map((element) => {
      const { name, value } = element;
      return { name, value };
    });
  console.log(data);
}
contactForm.addEventListener("submit", handlerFormSubmit);

//оживление табов

link[0].classList.add("active-link");
content[0].classList.add("active");

let activeLink = link[0];
let currentContent = content[0];

link.forEach((el) => {
  el.addEventListener("click", onTabBtnClick);
});

function onTabBtnClick(event) {
  event.preventDefault();
  const curentLink = event.target;
  changeLink(curentLink);
}

function changeLink(curentLink) {
  if (curentLink.classList.contains("active-link")) {
    return;
  }
  activeLink.classList.remove("active-link");
  curentLink.classList.add("active-link");
  activeLink = curentLink;
  const indexLink = link.indexOf(curentLink);
  chengeContent(indexLink);
}

function chengeContent(index) {
  currentContent.style.display = "none";
  currentContent = content[index];
  currentContent.style.display = "flex";
}

//Меню бургер
$(document).ready(function () {
  $(".hamb__inner").click(function (event) {
    $(".header__nav").toggle();
  });
  $(".navigation__link").click(function (event) {
    $(".header__nav").hide();
  });
  //валидация полей формы
  $("#extended-form").validate({
    rules: {
      username: "required",
      phone: "required",
    },
    messages: {
      username: "Поле 'Имя' обязательно к заполнению",
      phone: "Поле 'Телефон' обязательно к заполнению",
    },
  });
  $(".error").addClass("error");
});

function closeExtendForm() {
  setTimeout(function () {
    jQuery(".fancybox__slide").hide();
  }, 3500);
}

// inputmaska
let inputPnone = document.getElementById("phone");
let maskPnone = new Inputmask("+7 (999) 999-99-99");
maskPnone.mask(inputPnone);

const API_PATH = "https://beauty-saloon-server.herokuapp.com/api";

const btnCreateOrder = document.getElementById("create-order");
const extendForm = document.getElementById("extended-form");

async function getOrder() {
  const { access_token } = await ApiServices.login({
    userName: "admin",
    password: "admin",
  });

  const orders = await ApiServices.getOrders(access_token);
}

function toggleLoader() {
  const loader = document.getElementById("loader");
  loader.classList.toggle("hidden");
}
function onSuccess(formNode) {
  alert("Ваша заявка отправлена!");
  formNode.classList.toggle("hidden");
}
function onError() {
  alert("Ошибка");
}
async function createOrder(event) {
  event.preventDefault();

  const myFormData = new FormData(event.target);
  const orders = {};
  myFormData.forEach((value, key) => (orders[key] = value));

  toggleLoader();
  const createOrders = await ApiServices.postOrders(orders);
  toggleLoader();

  // if (createOrders === 201) {
    
  //   console.log(1)
  //   onSuccess(event.target);

  // } else {
  //   console.log(2)
  //   onError();
  // }

  // console.log(orders);
}
extendForm.addEventListener("submit", createOrder);
