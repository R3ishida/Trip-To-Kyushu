const day1_space = $('.space').offset().top;
// $(window).on('load',function(){
//     $('.day1-space').css({
//         'position': 'relative',
//     })
// });
$(window).scroll(function() {
    let scroll = $(this).scrollTop();    
    
    if( scroll >= day1_space) {
        $('.space').css({
            'position': 'fixed',
            'top': '0',
            'left': '0'
        })
    } else {
        $('.space').css({
            'position': 'relative',
        })
    }
})

width = window.innerWidth
height = window.innerHeight

locations = [
    "fukuoka",
    "kitakyushu",
    "beppu",
]

contents = [
    "day",
    "date",
    "location-mark",
    "location",
    "caption",
]

captions = [
    ["first", "second"],
    ["first"],
    ["first", "second", "third"]
]

$(window).on('load', function(){
    gsap.from('.left-title .title1', {
        x: -width,
        duration: 0.8,
    })
    
    gsap.from('.left-title .title2', {
        x: -width,
        duration: 0.6,
        delay: 0.2
    })

    gsap.from('.airplane', {
        x: width,
        duration: 2,
        delay: 1.5,
    })

    gsap.from('.right-title .title3', {
        x: width,
        duration: 2,
        delay: 1.5,
    })

    gsap.from('.right-title .title4', {
        x: width,
        duration: 1,
        delay: 3,
    })
});


gsap.to('.kyushu_map', {
    opacity: 1,
    duration: 2,
    scrollTrigger: {
        trigger: '.space',
        start: 'top top', 
    },
})


for (let i = 0; i < locations.length; i++) {
    for (let j = 0; j < contents.length; j++) {
        if (j == 0) {
            console.log("unko")
            gsap.to(`.space .${locations[i]} .${contents[j]}`, {
                x: -width*0.95,
                duration: 1,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: `.trigger .${locations[i]} .${contents[j]}`,
                    start: 'top top',
                },
            });
        } else {
            console.log("unko")
            gsap.to(`.space .${locations[i]} .${contents[j]}`, {
                opacity: 1,
                scrollTrigger: {
                    trigger: `.trigger .${locations[i]} .${contents[j]}`,
                    start: 'top top', 
                },
            })
        }
    }
    for (let k = 0; k < captions[i].length; k++) {
        if (k == 0) {
            console.log(captions[i][k])
            gsap.to(`.space .${locations[i]} .caption .${captions[i][k]}`, {
                opacity: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: `.trigger .${locations[i]} .${captions[i][k]}`,
                    start: 'top top',
                },
            });
        } else {
            gsap.to(`.space .${locations[i]} .caption .${captions[i][k]}`, {
                x: -width,
                // ease: "power4.out",
                scrollTrigger: {
                    trigger: `.trigger .${locations[i]} .${captions[i][k]}`,
                    start: 'top top',
                    scrub: true,
                    end: 'bottom top'
                },
            });
            gsap.to(`.space .${locations[i]} .caption .${captions[i][k-1]}`, {
                x: -width,
                // ease: "power4.out",
                scrollTrigger: {
                    trigger: `.trigger .${locations[i]} .${captions[i][k]}`,
                    start: 'top top',
                    scrub: true,
                    end: 'bottom top'
                },
            });
        }
        
    }
    gsap.to(`.space .${locations[i]}`, {
        y: -height,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: `.trigger .${locations[i+1]}`,
            start: 'top top', 
        },
    })
}


// gsap.to('.space .fukuoka .day', {
//     x: -width*0.95,
//     duration: 1,
//     ease: "power4.out",
//     scrollTrigger: {
//         trigger: '.trigger',
//         start: 'top top',
//         end: "+=200",
//         markers: true
//     },
// });

// gsap.to('.fukuoka .date', {
//     opacity: 1,
//     duration: 1,
//     scrollTrigger: {
//         trigger: '.trigger .fukuoka .date',
//         start: 'top top',
//     },
// })

// gsap.to('.fukuoka .location-mark', {
//     opacity: 1,
//     duration: 1,
//     scrollTrigger: {
//         trigger: '.trigger .fukuoka .location-mark',
//         start: 'top top', 
//     },
// })

// gsap.to('.fukuoka .location', {
//     opacity: 1,
//     duration: 1,
//     scrollTrigger: {
//         trigger: '.trigger .fukuoka .location',
//         start: 'top top', 
//     },
// })

// gsap.to('.fukuoka .caption', {
//     opacity: 1,
//     duration: 1,
//     scrollTrigger: {
//         trigger: '.trigger .fukuoka .caption',
//         start: 'top top', 
//     },
// })


// $(window).on('scroll load', function(){
//     let scrollTop = $(".day1-space").scrollTop();
//     let winH = $(window).height();
//     let section_bar_pos = $('.section_bar').offset().top;
//    // 公式
//     let section_bar_now = (1 - (section_bar_pos - scrollTop) / winH) * 2 * 100;
  
//     $('.section_bar').css('width', section_bar_now + '%');
//  });
 

