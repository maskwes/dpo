
$(document).ready(function(){
    $(".list__questions__item").click(function(e) {
        $(this).toggleClass('active-answer');
    });

    $(".hamburger").click(function(e) {
        $(this).toggleClass('active-hamburger');
        $(".mobile-menu").toggleClass('active-menu');
    });

    $('.slaider-documents').slick({

    });

    $('.wrapper-speakers').slick({
        infinite: true,
        responsive: [
            {
                breakpoint: 2048,
                settings: "unslick"
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    });
});