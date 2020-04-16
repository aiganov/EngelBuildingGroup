$('.slider').slick({
	dots: true,
	autoplay: true,
	autoplaySpeed: 5000	
});


$(".custom-scroll").niceScroll({
	cursorcolor:"#e7e7e7",
	hidecursordelay: 550
}); 

$('.gallery-item').magnificPopup({
  type: 'image',
  gallery:{
    enabled:true
	}
});