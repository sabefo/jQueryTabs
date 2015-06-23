$(document).ready(function () {
  // Put your JavaScript behavior here
   $(".container div:first").show();
   $(".tabs a").on('click', function(){
   	$(".tab").hide();
	 	$("li").removeClass("active");
 		$(this).parent().addClass("active");
   	$($(this).attr("href")).show();
   })
});
