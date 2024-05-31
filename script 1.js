function changeHeaderColor() {
    var header = document.querySelector('.header'); // Corrected spelling of document
    header.addEventListener('mouseover', function(){
        header.style.backgroundColor = 'rgba(0 ,0 ,0 , 0.8)';
    });
    header.addEventListener('mouseout', function(){
        header.style.backgroundColor = 'rgba(0 ,0 ,0 , 0.5)';
    });
}

function toggleBodyTextVisibility() {
    var bodyText = document.querySelector('.body-text');
    var exploreButton = document.querySelector('.body-text button');
    exploreButton.addEventListener('click', function() {
        bodyText.classList.toggle('hidden');
    });
}
document.addEventListener('DOMContentLoaded', function() {
    var bodyText = document.querySelector('.body-text');
    bodyText.classList.add('hidden');
});

function scrollToSection2() {
    var exploreButton = document.querySelector('.body-text button');
    var section2 = document.getElementById('section2');
    exploreButton.addEventListener('click', function() {
        section2.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    });
}
function displayRegistrationAlert() {
    var registerButton = document.querySelector('.sign-up button');
    registerButton.addEventListener('click', function() {
        alert('You clicked the REGISTER button!');
    });
}

function changeFooterColorOnScroll() {
    var footer = document.querySelector('footer');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 600) {
            footer.style.color = 'red';
        } else {
            footer.style.color = 'black';
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    changeHeaderColor();
    toggleBodyTextVisibility();
    scrollToSection2();
    displayRegistrationAlert();
    changeFooterColorOnScroll();
});