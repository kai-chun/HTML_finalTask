function showBtnCondition() {
    if ($(this).scrollTop() > 600) {
        $('.top').fadeIn();
    } else {
        $('.top').fadeOut();
    }
}
$(window).scroll(showBtnCondition);

$(document).ready(function(){
    // dropdown ul
    $('.dropClick').click(function(e){
        e.preventDefault();
        $(this).toggleClass("active");
        $(this).siblings().slideToggle();
        $(this).parent().siblings().find('.dropClick').removeClass("active");
        $(this).parent().siblings().find('.dropdown').slideUp();
    });

    // swiper
    const swiper = new Swiper(".swiper", {
        // Optional parameters
        direction: "horizontal",
        loop: true,
        speed: 2000,
        autoplay: {
            delay: 2000,
        },
      
        // If we need pagination
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        }
    });

    // lightbox
    lightbox.option({
        resizeDuration: 500,
        wrapAround: true,
        fadeDuration: 1000,
        positionFromTop: 300,
    });

    // top
    $('.top').click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });
});