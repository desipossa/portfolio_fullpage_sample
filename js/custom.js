IndexMove();
MainFullpage();
menuBtnAction();
profileSlide();

function MainFullpage() {
    let tt = false;
    const nav = document.querySelectorAll('.gnb li');
    const portFolio = new fullpage('.content', {
        anchors: ['intro', 'pt01', 'pt02', 'pt03', 'profile'],
        onLeave: function (origin, destination, direction) {
            let idx = destination.index;
            nav.forEach(it => it.classList.remove('on'))
            nav[idx].classList.add('on');
        }
    });
}

function IndexMove() {
    const tl = gsap.timeline({ repeat: 0, repeatDelay: 2 });

    tl
        .from('.intro h2 span:nth-child(4)', {
            x: -400,
            opacity: 0,
            duration: 0.4,
        })
        .from('.intro h2 span:nth-child(1)', {
            rotateX: 720,
            y: -100,
            delay: 1,
            opacity: 0,
            duration: 1,
            ease: 'bounce'
        })
        .from('.intro h2 span:nth-child(2)', {
            y: 100,
            delay: 1,
            opacity: 0,
            duration: 0.5,
            ease: 'bounce'
        })
        .from('.intro h2 span:nth-child(3)', {
            y: -100,
            delay: 1,
            opacity: 0,
            duration: 0.5,
            ease: 'bounce'
        })
        .from('.intro h2 span:nth-child(5)', {
            y: 100,
            delay: 1,
            opacity: 0,
            duration: 0.5,
            ease: 'bounce'
        })
        .from('.intro h2 span:nth-child(6)', {
            y: -100,
            delay: 1,
            opacity: 0,
            duration: 0.5,
            ease: 'bounce'
        })
        .to('.intro h2 span:nth-child(4)', {
            width: 300,
            duration: 1,
            delay: 1,
        })
        .from('.intro p', {
            opacity: 0
        })
        .from('.intro .dog', {
            scale: 0,
            opacity: 0,
            ease: 'bounce'
        })
        .from('.intro .bar span', {
            opacity: 0,
        })
        .from('.intro .bar', {
            width: 0,
            duration: 2
        })
}


function menuBtnAction() {
    const btn = document.querySelector('.menu .btn');
    const cover = document.querySelector('.cover');
    const lnk = document.querySelectorAll('.lnb a');

    function coverAnimation() {
        cover.classList.toggle('on');
        btn.parentElement.classList.toggle('on');
    }

    function linkMove() {
        cover.classList.remove('on');
        btn.parentElement.classList.remove('on');
    }

    btn.addEventListener('click', coverAnimation);

    lnk.forEach(el => {
        el.addEventListener('click', linkMove)
    });

    cover.addEventListener('wheel', function (e) {
        e.stopPropagation();
    })

}

function profileSlide() {
    const slide = new Swiper('.profileSlide', {
        effect: "cube",
        loop: true,
        grabCursor: true,
        cubeEffect: {
            shadow: true,
            slideShadows: false,
            shadowOffset: 80,
            shadowScale: 0.7,
        },
    })
}





