AOS.init({duration:800,easing:"slide"}),function(a){"use strict";a(window).stellar({responsive:!0,parallaxBackgrounds:!0,parallaxElements:!0,horizontalScrolling:!1,hideDistantElements:!1,scrollProperty:"scroll"});a(".js-fullheight").css("height",a(window).height()),a(window).resize((function(){a(".js-fullheight").css("height",a(window).height())}));setTimeout((function(){a("#ftco-loader").length>0&&a("#ftco-loader").removeClass("show")}),1),a.Scrollax();a(".home-slider").owlCarousel({loop:!0,autoplay:!0,margin:0,animateOut:"fadeOut",animateIn:"fadeIn",nav:!1,autoplayHoverPause:!1,items:1,navText:["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"],responsive:{0:{items:1},600:{items:1},1e3:{items:1}}}),a(".carousel-testimony").owlCarousel({autoplay:!0,center:!0,loop:!0,items:1,margin:30,stagePadding:0,nav:!1,navText:['<span class="ion-ios-arrow-back">','<span class="ion-ios-arrow-forward">'],responsive:{0:{items:1},600:{items:1},1e3:{items:1}}}),a("nav .dropdown").hover((function(){var e=a(this);e.addClass("show"),e.find("> a").attr("aria-expanded",!0),e.find(".dropdown-menu").addClass("show")}),(function(){var e=a(this);e.removeClass("show"),e.find("> a").attr("aria-expanded",!1),e.find(".dropdown-menu").removeClass("show")})),a("#dropdown04").on("show.bs.dropdown",(function(){console.log("show")}));a(window).scroll((function(){var e=a(this).scrollTop(),s=a(".ftco_navbar"),o=a(".js-scroll-wrap");e>150&&(s.hasClass("scrolled")||s.addClass("scrolled")),e<150&&s.hasClass("scrolled")&&s.removeClass("scrolled sleep"),e>350&&(s.hasClass("awake")||s.addClass("awake"),o.length>0&&o.addClass("sleep")),e<350&&(s.hasClass("awake")&&(s.removeClass("awake"),s.addClass("sleep")),o.length>0&&o.removeClass("sleep"))}));a("#section-counter").waypoint((function(e){if("down"===e&&!a(this.element).hasClass("ftco-animated")){var s=a.animateNumber.numberStepFactories.separator(",");a(".number").each((function(){var e=a(this),o=e.data("number");console.log(o),e.animateNumber({number:o,numberStep:s},7e3)}))}}),{offset:"95%"});a(".ftco-animate").waypoint((function(e){"down"!==e||a(this.element).hasClass("ftco-animated")||(a(this.element).addClass("item-animate"),setTimeout((function(){a("body .ftco-animate.item-animate").each((function(e){var s=a(this);setTimeout((function(){var a=s.data("animate-effect");"fadeIn"===a?s.addClass("fadeIn ftco-animated"):"fadeInLeft"===a?s.addClass("fadeInLeft ftco-animated"):"fadeInRight"===a?s.addClass("fadeInRight ftco-animated"):s.addClass("fadeInUp ftco-animated"),s.removeClass("item-animate")}),50*e,"easeInOutExpo")}))}),100))}),{offset:"95%"}),a(".image-popup").magnificPopup({type:"image",closeOnContentClick:!0,closeBtnInside:!1,fixedContentPos:!0,mainClass:"mfp-no-margins mfp-with-zoom",gallery:{enabled:!0,navigateByImgClick:!0,preload:[0,1]},image:{verticalFit:!0},zoom:{enabled:!0,duration:300}}),a(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({disableOn:700,type:"iframe",mainClass:"mfp-fade",removalDelay:160,preloader:!1,fixedContentPos:!1}),a(".appointment_date").datepicker({format:"m/d/yyyy",autoclose:!0}),a(".appointment_time").timepicker()}(jQuery);