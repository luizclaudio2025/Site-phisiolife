
window.scroll({


});



$(".navbar").ready(function() {


    jQuery(window).scroll(function() {
       var windowScrollPosTop = jQuery(window).scrollTop();

       if(windowScrollPosTop >= 150) {


         jQuery("nav").addClass("nav-c");


       }
       else{
         jQuery("nav").removeClass("nav-c");



       }
    });




});


 
