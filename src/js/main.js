let contactForm = document.querySelector('#record-form');

//отправка данных без перезагрузки
function handlerFormSubmit(event){
        event.preventDefault();
        getDataForm(contactForm)
  
}
// данные с формы
function getDataForm(formNode){
    let elements = formNode;
    let data = Array.from(elements).filter((item) => !!item.name).map((element) => {
        const {name, value} = element
        return {name, value}
    })
    console.log(data)
}
contactForm.addEventListener('submit', handlerFormSubmit)


$(document).ready(function () {
    $('.hamb__inner').click(function (event) {
        $('.header__nav').toggle();
        
    });
    $('.navigation__link').click(function (event){
        $('.header__nav').hide();
    });

});




