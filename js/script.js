$(document).ready(function () {
    $(".button").on("click", function () {
        console.log('#button');
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1500);
    });
});


$(document).ready(function(){
    $(".phone").mask("+ 375 (99) 999 99 99");
});


                        