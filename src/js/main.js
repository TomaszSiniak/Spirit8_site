$(document).ready(function() {


    //show / hide menu
    $('.burger').click(function() {
        $('.navi').slideDown();
    });

    $('.close').click(function() {
        $('.navi').slideUp();
    });

    // banner-button scrolls to another sections

    $('.banner__btn').click(function() {
        $('body').animate({
            scrollTop: $('.about').offset().top
        }, 1000)
    });




})