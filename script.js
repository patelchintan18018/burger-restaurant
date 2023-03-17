const typed = new Typed('.header-text',{
    strings : ['Le Catering'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true,
    showCursor:false
});



ScrollReveal({
    // reset:true,
    distance:'100px',
    duration:1500,
    delay:100,
});

ScrollReveal().reveal('.about-heading',{origin:'right'});
ScrollReveal().reveal('.about-img',{origin:'left'});
ScrollReveal().reveal('.tradition',{origin:'left'});


ScrollReveal().reveal('.menu-heading',{origin:'left'});
ScrollReveal().reveal('.menu-item-heading',{origin:'right'});
// ScrollReveal().reveal('.menu-img',{origin:'right'});


ScrollReveal().reveal('.contact-heading',{origin:'left'});

