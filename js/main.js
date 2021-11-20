$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 350) {
	    $(".nav-link").css("color" , "black");
	  }

	  else{
		  $(".nav-link").css("color" , "#fff");  	
	  }
	  
  })
}) 