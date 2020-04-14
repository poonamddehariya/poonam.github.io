(function($) {
  "use strict";

//------------------------------------- Waiting for the entire site to load ------------------------------------------------//

jQuery(window).load(function() { 
		jQuery("#loaderInner").fadeOut(); 
		jQuery("#loader").delay(200).fadeOut("slow"); 
});

$(window).load(function() {

	
	
	
	
	setTimeout(function(){ 
	$('.contentHolder').addClass('appear');	
	 }, 500);

	

});




//--------------------------------- Random images-------------------------------//

/*$(function() {
    var randomImg = ['r1.jpg', 'r2.jpg', 'r3.jpg', 'r4.jpg', 'r5.jpg', 'r6.jpg'];
    $('.holder').css({'background-image': 'url(images/' + randomImg[Math.floor(Math.random() * randomImg.length)] + ')'});

   }); */       

//--------------------------------- End random images--------------------------------//


})(jQuery);
