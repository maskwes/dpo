$(".list__questions__item").click(function(e) {
    $(this).toggle('active-answer');
});
$(".hamburger").click(function(e) {
    $(this).toggleClass('active-hamburger');
    $(".mobile-menu").toggleClass('active-menu');
});
