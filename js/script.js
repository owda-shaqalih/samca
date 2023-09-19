$(window).on ('load', function (){ // makes sure the whole site is loaded
    $("#preloader").fadeOut();
        if ($("[data-aos]").length) { 
            AOS.init({
            duration: 1000,
            mirror: true,
            once: true,
          });
        }

});
$(document).ready(function(){
    var rtl = false;
    if($("html").attr("lang") == 'ar'){
         rtl = true;
    }
    
    $('a[href="#search"]').on('click', function(event) {
        event.preventDefault();
        $('#search').addClass('open');
        setTimeout(function(){
            $('#search form input[type="text"]').focus();
        },100);
    });

    $('.search_close').on('click', function(event) {
            $('#search').removeClass('open');
    });
    
    /*open menu*/
    $(".menu-trigger").click(function(){
        $("body,html").addClass('menu-toggle');
        $(".menu-trigger").addClass('active');
    });
    $(".m-overlay").click(function(){
        $("body,html").removeClass('menu-toggle');
        $(".menu-trigger").removeClass('active');
    });

    $(".js-select").each(function(i,v){
        var that = $(this);
        var placeholder = $(that).attr("data-placeholder");
        $(that).select2({
            placeholder:placeholder,
            minimumResultsForSearch: Infinity,
        });
    });
    
    var owl = $('#home_slider');

        owl.on('initialized.owl.carousel change.owl.carousel',function(elem){
            var current = elem.item.index;
            $(elem.target).find(".owl-item").eq(current).find(".to-animate").removeClass('fadeInUpn animated');
            $(elem.target).find(".owl-item").eq(current).find(".to-animate2").removeClass('fadeInUpn animated');
            $(elem.target).find(".owl-item").eq(current).find(".to-animate3").removeClass('fadeInUpn animated');
            $(elem.target).find(".owl-item").eq(current).find(".to-animate4").removeClass('fadeInRight animated');
        });
       
        owl.on('initialized.owl.carousel changed.owl.carousel',function(elem){
            window.setTimeout(function(){
                var current = elem.item.index;
                $(elem.target).find(".owl-item").eq(current).find(".to-animate").addClass('fadeInUpn animated');
                $(elem.target).find(".owl-item").eq(current).find(".to-animate2").addClass('fadeInUpn animated');
                $(elem.target).find(".owl-item").eq(current).find(".to-animate3").addClass('fadeInUpn animated');
                $(elem.target).find(".owl-item").eq(current).find(".to-animate4").addClass('fadeInRight animated');
            }, 400);
        });
        owl.owlCarousel({
                items: 1,
                loop: true,
                margin: 0,
                responsiveClass: true,
                nav: true,
                dots: true,
                rtl:rtl,
                smartSpeed: 500,
                autoplay: false,
                autoplayTimeout: 5000,
                autoplayHoverPause: true,
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
                navText:['<i class="fal fa-long-arrow-up"></i>','<i class="fal fa-long-arrow-down"></i>'],
        });

	$("#memberships_owl").owlCarousel({
        loop:false,
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
        autoplay:false,
        navText:['<i class="fal fa-long-arrow-right"></i>',
            '<i class="fal fa-long-arrow-left"></i>'],

    })

    $("#slide_about").owlCarousel({
        loop:false,
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
        autoplay:false,
        navText:['<i class="fal fa-long-arrow-right"></i>',
            '<i class="fal fa-long-arrow-left"></i>'],

    })


    $("#releated_slide").owlCarousel({
        loop:false,
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
                items:2,
            }

        },
        dots:true,
        nav:true,
        autoplay:false,
        navText:['<i class="fal fa-long-arrow-right"></i>',
            '<i class="fal fa-long-arrow-left"></i>'],

    })

    $("#details_slide").owlCarousel({
            loop:true,
            margin:0,
            rtl:rtl,
            items:1,
            responsiveClass:true,
            dots:false,
            nav:true,
            autoplay:false,
            navText:['<i class="fal fa-long-arrow-right"></i>',
            '<i class="fal fa-long-arrow-left"></i>'],
            // When only using images in your slide (like the demo) use this option to dynamicly create thumbnails without using the attribute data-thumb.
            thumbImage: false,

            // Enable this if you have pre-rendered thumbnails in your html instead of letting this plugin generate them. This is recommended as it will prevent FOUC
            thumbsPrerendered: true,

            // Class that will be used on the thumbnail container
            thumbContainerClass: 'owl-thumbs',

            // Class that will be used on the thumbnail item's
            thumbItemClass: 'owl-thumb-item',

    })

    var $input;

    function onInputFocus(event) {
      var $target = $(event.target);
      var $parent = $target.closest("div.form-group");
          $parent.addClass('focus-input');
    };

    function onInputBlur(event) {
      var $target = $(event.target);
      var $parent = $target.closest("div.form-group");

      if (event.target.value.trim() === '') {
        $parent.removeClass('focus-input');
      }
    };

    $input = $('.form_st2 .form-control');
      
      $input.each(function(){
        if ($input.val().trim() !== '') {
          var $parent = $input.closest("div.form-group");
          $parent.addClass('focus-input');
        }
    });
          
    $input.on('focus', onInputFocus);
    $input.on('blur', onInputBlur);


    $input2 = $('.form_st2 select');

    $input2.each(function(){
        if ($input2.val().trim() !== '') {
            var $parent2 = $input2.closest('div.form-group');
            $parent2.addClass('focus-input');
        }
    });

    $input2.on('change', onInputFocus);
    $input2.on('blur', onInputBlur);
})