 jQuery(document).ready(function() {
  AOS.init();

   //Menu active class script
   var url = window.location.pathname; if (url == "/") { url
   = "/index.php"; }

   var urlRegExp = new RegExp(url.replace(/\/$/, '') + "$"); // create regexp to match current url pathname and remove trailing slash if present as it could collide with the link in navigation in case trailing slash wasn't present there

   // now grab every link from the navigation
   $('nav ul li a').each(function() {
     // and test its normalized href against the url pathname regexp
     if (urlRegExp.test(this.href.replace(/\/$/, ''))) {
       $(this).parent('li').addClass('active');
     }
   });

   // menu toggle
   jQuery(".mmenu").click(function(e) {
     e.stopPropagation();
     if (jQuery('body').hasClass("show-menu")) {
       jQuery('body').removeClass("show-menu");
     } else {
       jQuery('body').addClass("show-menu");
     }
   });
   jQuery(document).on('click', function(e) {
     e.stopPropagation();
     jQuery('body').removeClass("show-menu");
   });

   jQuery('.close-button').click(function() {
     jQuery('body').removeClass('show-menu');
   });

   //header fixed 
   jQuery(window).scroll(function() {
     var sticky = jQuery('.header'),
       scroll = jQuery(window).scrollTop();

     if (scroll >= 70) sticky.addClass('fixed');
     else sticky.removeClass('fixed');
   });

   // Bottom to top scroll
   jQuery("#myBtn").hide();
   jQuery(function() {
     jQuery(window).scroll(function() {
       if (jQuery(this).scrollTop() > 100) {
         jQuery('#myBtn').fadeIn();
       } else {
         jQuery('#myBtn').fadeOut();
       }
     });

     // scroll body to 0px on click
     jQuery('#myBtn').click(function() {
       jQuery('body,html').animate({
         scrollTop: 0
       }, 1000);
       return false;
     });
   });

   jQuery(".filter-button").click(function () {
       var value = jQuery(this).attr('data-filter');
       if (value == "all") {
           jQuery('.filter').show('1000');
       } else {
           jQuery(".filter").not('.' + value).hide('3000');
           jQuery('.filter').filter('.' + value).show('3000');

       }
       jQuery(".filter-button").removeClass("active")
       jQuery(this).addClass("active");
   });


   // menu toggle
        jQuery(".togglebtn").click(function () {
            jQuery("body").toggleClass("menu_open");
        });
        jQuery(".close-button").click(function () {
            jQuery("body").removeClass("menu_open");
        });
        jQuery(window).scroll(function () {
            var sticky = jQuery("#header"),
                scroll = jQuery(window).scrollTop();

            if (scroll >= 70) sticky.addClass("fixed");
            else sticky.removeClass("fixed");
        });

        //on scroll hide and show header
        var lastScrollTop = 0;
        jQuery(window).scroll(function(event){
            var st = jQuery(this).scrollTop();
            if (st >= 70){
               jQuery('.header').addClass('scrolling_down');
             } else{
               jQuery('.header').removeClass('scrolling_down');
            }
             if (st >= lastScrollTop){
               jQuery('.header, body').removeClass('scrolling_up');
               jQuery('.header, body').addClass('scrolling_down');
             } else{
               jQuery('.header, body').addClass('scrolling_up');
               jQuery('.header, body').removeClass('scrolling_down');  
            }
            lastScrollTop = st;
        });

        $('.blog-slider').owlCarousel({
            loop: true,
            margin:10,
            nav: false,
            items:3,
            smartSpeed: 1000,
            responsive:{
                0:{
                    items:1.2
                },
                600:{
                    items:2.5
                },
                900:{
                    items:2.5,
                    margin:30,
                },
                1200:{
                    items:2.5,
                    margin:100,
                }
            }
        });

        $('.work-slider').owlCarousel({
            loop: true,
            margin:15,
            nav: false,
            items:3,
            smartSpeed: 1000,
            responsive:{
                0:{
                    items:1.4
                },
                600:{
                    items:3,
                    margin:20,
                },
                900: {
                    items:3.7,
                    margin:20,
                },
                1200:{
                    items:4,
                    margin:40,
                }
            }
        });



        $('.testimonial-slider').owlCarousel({
            loop: true,
            margin:10,
            nav: true,
            items:1,
            smartSpeed: 1000,
            dots: false,
            navText: [
                '<img src="./images/arrow-left.svg">',
                '<img src="./images/arrow-right.svg">'
            ],
        });


        // Show the first tab and hide the rest
        $('.tabs-nav li:first-child').addClass('active');
        $('.tab-content').hide();
        $('.tab-content:first').show();

        // Click function
        $('.tabs-nav li').click(function(){
          $('.tabs-nav li').removeClass('active');
          $(this).addClass('active');
          $('.tab-content').hide();
          
          var activeTab = $(this).find('a').attr('href');
          $(activeTab).fadeIn();
          return false;
    });
            const parallax = new Ukiyo(".ukiyo", {
              externalRAF: true
            });

            const lenis = new Lenis();

            function raf(time) {
              parallax.animate();

              lenis.raf(time);
              requestAnimationFrame(raf);
            }

            requestAnimationFrame(raf);
 });


 window.addEventListener("load", function() {
     var loader = document.querySelector(".loader");
     var body = document.querySelector("body");
     loader.style.opacity = "0";
     // document.body.
     body.classList.add("loded");
 });