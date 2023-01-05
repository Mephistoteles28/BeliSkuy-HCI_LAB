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
});