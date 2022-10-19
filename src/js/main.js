

$(document).ready(function () {
    $('.hamb__inner').click(function (event) {
        $('.header__nav').toggle();
        
    });
    $('.navigation__link').click(function (event){
        $('.header__nav').hide();
    });

});




