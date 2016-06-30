$(document).ready(function(){
      
		
		$('.slidemarca').slick({
			centerMode: true,
			centerPadding: '60px',
			slidesToShow: 7,
			autoplay: true,
			autoplaySpeed: 1000,
			responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',

        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 3
      }
    }
  ]
});




});



