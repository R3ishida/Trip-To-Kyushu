const day1_space = $('.day1-space').offset().top;
// $(window).on('load',function(){
//     $('.day1-space').css({
//         'position': 'relative',
//     })
// });
$(window).scroll(function() {
    let scroll = $(this).scrollTop();    
    
    if( scroll >= day1_space) {
        $('.day1-space').css({
            'position': 'fixed',
            'top': '0',
            'left': '0'
        })
    } else {
        $('.day1-space').css({
            'position': 'relative',
        })
    }
})

width = window.innerWidth


gsap.to('.day1-contents .day', {
    x: -width*0.95,
    duration: 1,
    ease: "power4.out",
    scrollTrigger: {
        trigger: '.day1-contents .day',
        start: 'top top', 
    },
});

gsap.to('.day1-contents .date', {
    opacity: 1,
    duration: 1,
    delay: 0.3,
    scrollTrigger: {
        trigger: '.day1-contents .day',
        start: 'top top', 
    },
})

gsap.to('.day1-contents .location-mark', {
    opacity: 1,
    duration: 1,
    delay: 0.6,
    scrollTrigger: {
        trigger: '.day1-contents .day',
        start: 'top top', 
    },
})

gsap.to('.day1-contents .location', {
    opacity: 1,
    duration: 1,
    delay: 0.9,
    scrollTrigger: {
        trigger: '.day1-contents .day',
        start: 'top top', 
    },
})

gsap.to('.day1-contents .caption', {
    opacity: 1,
    duration: 1,
    delay: 1.2,
    scrollTrigger: {
        trigger: '.day1-contents .day',
        start: 'top top', 
    },
})

gsap.to('.day1-contents .caption .first', {
    opacity: 1,
    duration: 1,
    delay: 1.5,
    scrollTrigger: {
        trigger: '.day1-contents .day',
        start: 'top top', 
    },
})

// $(window).on('scroll load', function(){
//     let scrollTop = $(".day1-space").scrollTop();
//     let winH = $(window).height();
//     let section_bar_pos = $('.section_bar').offset().top;
//    // 公式
//     let section_bar_now = (1 - (section_bar_pos - scrollTop) / winH) * 2 * 100;
  
//     $('.section_bar').css('width', section_bar_now + '%');
//  });
 

