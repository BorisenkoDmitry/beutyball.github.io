document.addEventListener("DOMContentLoaded", function () {
    let height = document.querySelector(".catalog-list-item").offsetHeight*2 + 12;
    console.log(height);
    document.querySelector(".catalog-right-scrollbar").style.height = `${height}px`;
    let headerGsap = gsap.timeline();
    headerGsap.to(".banner", {
        delay: 0.4,
        transition: 0.1,
        'opacity': 1,
    })
    gsap.to(".header", {
        delay: 0.1,
        transition: 0.1,
        'opacity': 1,
        'transform': 'translateY(0)'
    })
    headerGsap.to(".banner .container", {
        delay: 0.3,
        transition: 0.1,
        'opacity': 1,
        'transform': 'translateY(0)'
    })

    let mobileMenuTimeline = gsap.timeline();
    console.log(mobileMenuTimeline)
    mobileMenuTimeline.to('.header-top-list', {
        opacity: 1,
        display: 'flex'
    })
    mobileMenuTimeline.to('.header-bottom', {
        opacity: 1,
        display: 'flex'
    })
    mobileMenuTimeline.pause();
    let flag = 0;
    document.querySelector(".burger").addEventListener('click', function () {
        let line = this.querySelectorAll(".line");
        line.forEach(item => {
            item.classList.toggle("active");
            item.classList.toggle("hover");
        })
        if (flag === 0) {
            mobileMenuTimeline.play();
            flag = 1;
        } else {
            flag = 0;
            mobileMenuTimeline.reverse();
        }
    });


    const swiper = new Swiper('.swiper-container', {
        slidesPerView: 2,
        speed: 400,
        spaceBetween: 40,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
          },
        navigation: {
            nextEl: '.catalog-section .catalog-next',
            prevEl: '.catalog-section .catalog-prev',
            disabledClass: 'ourWork-disabled'
        },
        lazy: {
            loadPrevNext: true,
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
      
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
  
        }
        });
        const swiper2 = new Swiper('.ourWork-slider', {
            slidesPerView: 1,
            speed: 400,
            spaceBetween: 40,
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
   
              },
            navigation: {
                nextEl: '.ourWork-section .catalog-next',
                prevEl: '.ourWork-section .catalog-prev',
                disabledClass: 'ourWork-disabled'
            },
            lazy: {
                loadPrevNext: true,
            },
        
            });

            new SimpleBar(document.querySelector(".catalog-right-scrollbar"), {
                autoHide: false,
                scrollbarMaxSize: 60
            });
            if (window.matchMedia("(max-width: 768px)").matches) {
                let categoryTimeline = gsap.timeline();
            categoryTimeline.to(".catalog-form", {
                display: "block",
                transition: 0.1,
            });
            categoryTimeline.to(".catalog-form", {
                delay: -0.5,
                height: "auto",
            })
            categoryTimeline.pause();
            let flag2 = false;
            document.querySelector(".catalog-left").addEventListener("click", function() {
                this.classList.toggle("catalog-active-form");
                if (!flag2) {
                    categoryTimeline.play();
                    flag2 = true;
                } else {
                    categoryTimeline.reverse();
                    flag2 = false;
                }
            })
            }
            
});
