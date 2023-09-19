$(document).ready(function () {
    
    initialize_owl($('#owl1_1'));

    $('a[href="#news"]').on('shown.bs.tab', function () {
        initialize_owl($('#owl1_1'));
    }).on('hide.bs.tab', function () {
        destroy_owl($('#owl1_1'));
    });

    $('a[href="#events"]').on('shown.bs.tab', function () {
        initialize_owl($('#owl1_2'));
    }).on('hide.bs.tab', function () {
        destroy_owl($('#owl1_2'));
    });


});

function initialize_owl(el) {
    var rtl = false;
    if($("html").attr("lang") == 'ar'){
         rtl = true;
    }
    el.owlCarousel({
            loop:true,
            margin:20,
            rtl:rtl,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                },
                575:{
                    items:2,
                },
                768:{
                    items:2,
                },
                992:{
                    items:3,
                }

            },
            dots:true,
            nav:true,
            navText:['<i class="fal fa-long-arrow-right"></i>',
            '<i class="fal fa-long-arrow-left"></i>'],
            autoplay:false
    });
}
function destroy_owl(el) {
    el.owlCarousel('destroy');
}