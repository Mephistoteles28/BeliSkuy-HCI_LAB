$(document).ready(function () {
    $('#all').click(function (e) { 
        e.preventDefault();
        $('.row').removeClass('invisible');
    });

    $('#clothes').click(function (e) { 
        e.preventDefault();
        $('.row').removeClass('invisible');
        $('.pants').addClass('invisible');
        $('.shoes').addClass('invisible');
    });

    $('#pants').click(function (e) { 
        e.preventDefault();
        $('.row').removeClass('invisible');
        $('.shirt').addClass('invisible');
        $('.shoes').addClass('invisible');
    });

    $('#shoes').click(function (e) { 
        e.preventDefault();
        $('.row').removeClass('invisible');
        $('.pants').addClass('invisible');
        $('.shirt').addClass('invisible');
    });

    let slideCount = 3;
    let slideWidth = $(window).width();
    let totalWidth = slideCount * slideWidth;

    $('.slides').css({
    width: totalWidth,
    marginLeft: -slideWidth
    });

    $('.slide:last-child').prependTo('.slides');

    $('#left').click(function() { 
    $('.slides').animate({left: +slideWidth}, 500, function(){
        $('.slide:last-child').prependTo('.slides');
        $('.slides').css({left:0});
    })
    });

    $('#rite').click(function() { 
    $('.slides').animate({left: -slideWidth}, 500, ()=>{
        $('.slide:first-child').appendTo('.slides');
        $('.slides').css({left:0});
    })
    });
});