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


    // ------------ FORM VALIDATION ----------------


    const name = document.querySelector('#name');
    const email = document.querySelector('#email');
    const mssg = document.querySelector('#message');
    const btn = document.querySelector('.contact__btn');

    function nameValidation() {
        const nameInput = name.value;
        const nameComment = document.querySelector('.name-comment');
        const nameRegExp = /^[a-zA-Z]{3,10}$/;

        if (nameRegExp.test(nameInput)) {
            name.classList.remove('incorrect-validation');
            name.classList.add('correct-validation');
            nameComment.innerHTML = 'Correct name';
            nameComment.style.color = 'green';
        } else {
            name.classList.remove('correct-validation');
            name.classList.add('incorrect-validation');
            nameComment.innerHTML = 'Name should contain at least 3 characters';
            nameComment.style.color = 'red';
        }

    }

    function emailValidation() {
        const emailInput = email.value;
        const emailComment = document.querySelector('.email-comment');
        const emailRegExp = /^[0-9a-zA-Z_.-]+@[0-9a-zA-Z_.-]+\.[a-zA-Z]{2,3}$/;

        if (emailRegExp.test(emailInput)) {
            email.classList.remove('incorrect-validation');
            email.classList.add('correct-validation');
            emailComment.innerHTML = 'Correct email';
            emailComment.style.color = 'green';
        } else {
            email.classList.remove('correct-validation');
            email.classList.add('Incorrect-validation');
            emailComment.innerHTML = 'Incorrect email!';
            emailComment.style.color = 'red';
        }

    }

    function mssgValidation() {

        const mssgInput = mssg.value;
        const mssgComment = document.querySelector('.message-comment');

        if (mssgInput !== '') {
            mssg.classList.remove('incorrect-validation');
            mssg.classList.add('correct-validation');
            mssgComment.innerHTML = 'correct validation';
            mssgComment.style.color = 'green';
        } else {
            mssg.classList.remove('correct-validation');
            mssg.classList.add('incorrect-validation');
            mssgComment.innerHTML = 'Write your message!';
            mssgComment.style.color = 'red';
        }
    }


    name.addEventListener('blur', nameValidation);
    email.addEventListener('blur', emailValidation);
    mssg.addEventListener('blur', mssgValidation);

    btn.addEventListener('click', function() {
        nameValidation();
        emailValidation();
        mssgValidation();
    })





})