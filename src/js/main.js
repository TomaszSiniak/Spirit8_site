document.addEventListener("DOMContentLoaded", function() {
    'use strict'
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
    let index = 0;
    teamSlider();
    clientSlider();
    testiSlider();


    function teamSlider() {

        const slide = document.querySelectorAll('.team-box');
        const dots = document.querySelectorAll('.team .dots__item');

        //     //hide slides
        for (let i = 0; i < slide.length; i++) {
            slide[i].style.display = 'none';
        }

        // remove active claas from dots
        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(' dots__item--active', '');
        }

        slideIndex++;
        if (slideIndex > slide.length) {
            slideIndex = 1;
        }
        //     //show slides
        slide[slideIndex - 1].style.display = 'flex';
        dots[slideIndex - 1].className += ' dots__item--active';
        setTimeout(teamSlider, 8000);
    }



    function clientSlider() {
        const slide = document.querySelectorAll('.clients-container');
        const dots = document.querySelectorAll('.clients .dots__item');

        for (let i = 0; i < slide.length; i++) {
            slide[i].style.display = "none";
        }
        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(' dots__item--active', '');
        }

        index++;
        if (index > slide.length) {
            index = 1;
        }

        slide[index - 1].style.display = "flex";
        dots[index - 1].className += ' dots__item--active';
        setTimeout(clientSlider, 4000);
    }


    function testiSlider() {

        const slide = document.querySelectorAll('.testimonials__box');
        const dots = document.querySelectorAll('.testimonials .dots__item');

        for (let i = 0; i < slide.length; i++) {
            slide[i].style.display = 'none';
        }

        for (let i = 0; dots.length; i++) {
            dots[i].className = dots[i].className.replace(' dots__item--active', '');
        }

        slideIndex++;
        if (index > slide.length) {
            index = 1;
        }

        // slide[slideIndex - 1].style.display = 'block';
        // dots[slideIndex - 1].className += 'dots__item--active';
        // setTimetout(testiSlider, 5000);

    }




})