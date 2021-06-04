document.addEventListener("DOMContentLoaded", function () {
    let basketanim = gsap.timeline();
    let priceBasket = 0;
    basketanim.to(".basket-popup", {
        display: "flex"
    })
    basketanim.to(".basket-popup", {
        opacity: 1
    })
    basketanim.pause();

    document.querySelector(".basket-close").addEventListener("click", function() {
        basketanim.reverse();
    })
    document.querySelector(".header-basket").addEventListener("click", function() {
        priceBasket = 0;
        basketanim.play();
        document.querySelectorAll(".basket-list-item").forEach(item => {
            
            let price = item.querySelector(".basket-list-item__price-num").textContent;
            priceBasket += parseInt(price);
            
        })
        document.querySelector(".sum-price").textContent = priceBasket;

    })
    ymaps.ready(init);
    function init() {
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [55.76, 37.64],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 12
        });
        var myPlacemark = new ymaps.Placemark([55.76, 37.64], {}, {
            iconLayout: 'default#image',
            iconImageHref: '/images/markMap.svg',
            iconImageSize: [40, 62],
            iconImageOffset: [-3, -42]
        });
       
        // Размещение геообъекта на карте.
        myMap.geoObjects.add(myPlacemark);
    }

    let height = document.querySelector(".catalog-list-item").offsetHeight * 2 + 12;
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




    new SimpleBar(document.querySelector(".catalog-right-scrollbar"), {
        autoHide: false,
        scrollbarMaxSize: 60
    });

    new SimpleBar(document.querySelector(".basket-content"), {
        autoHide: false
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
        document.querySelector(".catalog-left").addEventListener("click", function () {
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
    animateSectionWork();
    
    document.querySelector(".ourwork-show").addEventListener("click", function () {
        document.querySelectorAll(".ourwork-hidden").forEach(item => {
            item.classList.remove("ourwork-hidden");
        })
        this.remove();
    });


});


function animateSectionWork() {
    let timelineOpacity = 0;
    let id;
    let popup = document.querySelector(".ourWork-popup");
    let content = document.querySelector(".ourWork-popup__content");
    document.querySelectorAll(".ourWork-list-item").forEach(item => {
        item.addEventListener("click", function () {

            popup.classList.remove("popup-hidden");
            id = setInterval(function () {
                timelineOpacity += 0.03;
                popup.style.opacity = timelineOpacity;
                content.style.transform = `scale(${timelineOpacity})`;
                if (timelineOpacity >= 1) {
                    clearInterval(id);
                    timelineOpacity = 1;
                    popup.style.opacity = 1;
                    content.style.transform = `scale(1)`;
                }
            }, 1);

            let srcImg = item.querySelector("img").getAttribute("src");
            popup.querySelector(".ourWork-popup-container").querySelector("img").setAttribute("src", srcImg);
        })
    })
    document.querySelector(".ourWork-popup-close").addEventListener("click", function () {
        id = setInterval(function () {
            timelineOpacity -= 0.1;
            popup.style.opacity = timelineOpacity;
            content.style.transform = `scale(${timelineOpacity})`;
            if (timelineOpacity <= 0) {
                clearInterval(id);
                timelineOpacity = 0;
                popup.style.opacity = 0;
                content.style.transform = `scale(0)`;
            }
        }, 15);
        setTimeout(function () {
            popup.classList.add("popup-hidden");
        }, 300);
    })

}