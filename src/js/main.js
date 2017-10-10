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

    let teamIndex = 0;
    let clientIndex = 0;
    let testiIndex = 0;

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

        teamIndex++;
        if (teamIndex > slide.length) {
            teamIndex = 1;
        }
        //     //show slides
        slide[teamIndex - 1].style.display = 'flex';
        dots[teamIndex - 1].className += ' dots__item--active';
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

        clientIndex++;
        if (clientIndex > slide.length) {
            clientIndex = 1;
        }

        slide[clientIndex - 1].style.display = "flex";
        dots[clientIndex - 1].className += ' dots__item--active';
        setTimeout(clientSlider, 4000);
    }


    function testiSlider() {

        const slide = document.querySelectorAll('.testimonials__box');
        const dots = document.querySelectorAll('.testimonials .dots__item');


        for (let i = 0; i < slide.length; i++) {
            slide[i].style.display = 'none';
        }
        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(' dots__item--active', '');
        }


        testiIndex++;
        if (testiIndex > slide.length) {
            testiIndex = 1;
        }

        slide[testiIndex - 1].style.display = 'block';
        dots[testiIndex - 1].className += ' dots__item--active';
        setTimeout(testiSlider, 5000);

    }

})