$(document).ready(function () {
    var n = 1;
    $('.hamburger').click(function (e) { 
        e.preventDefault();
        if (n == 1) {
            $('.hamburger').addClass("active");
            $('.navigate').addClass("active");
        } else {
            $('.hamburger').removeClass("active");
            $('.navigate').removeClass("active");
        }
        n = !n;
    });
});
