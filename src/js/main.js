import "slick-carousel/slick/slick";
import $ from "jquery";
import "@fancyapps/ui";

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
const onClickImageYouTub = document.querySelector(".about-salon__yuotub");

onClickImageYouTub.addEventListener("click", onRedirectYouTub);

function onRedirectYouTub() {
  window.location.href = "https://www.youtube.com/";
}

// Сбор данных в консоль
let contactForm = document.querySelector("#record-form");

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
const link = Array.from(document.querySelectorAll(".price-header__link"));
const content = Array.from(document.querySelectorAll(".price-table"));

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
});
