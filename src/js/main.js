$(document).ready(function() {


    //show / hide menu
    $('.burger').click(function() {
        $('.navi').slideDown();
    });

    $('.close').click(function() {
        $('.navi').slideUp();
    });

    // banner-button scrolls to another sections

    // $('.banner__btn').on('click', function() {
    //     $('main').animate({
    //         scrollTop: $('.about').offset().top
    //     }, 1000)

    // });


    // team slider

    let slideIndex = 0;
    startSlide();



    function startSlide() {

        const slide = document.querySelectorAll('.team-box');
        const dots = document.querySelectorAll('.dots__item');

        //     //hide slides
        for (let i = 0; i < slide.length; i++) {
            slide[i].style.display = 'none';
        }

        // remove active claas from dots
        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(' active', '');
        }


        slideIndex++;
        if (slideIndex > slide.length) {
            slideIndex = 1;
        }

        //     //show slides
        slide[slideIndex - 1].style.display = 'flex';
        dots[slideIndex - 1].className += ' active';
        setTimeout(startSlide, 8000);
    }


})