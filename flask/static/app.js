$(function() {

	/* FIXED HEADER */
	let header = $("#header");
	let intro = $("#intro");
	let introH = intro.innerHeight();
	let scrollPos = $(window).scrollTop();
	let nav = $("#nav");
	let navToggle = $("#navToggle");

	checkScroll(scrollPos, introH);

	$(window).on("scroll resize", function() {
		introH = intro.innerHeight();
		scrollPos = $(this).scrollTop();

		checkScroll(scrollPos, introH)
	});

	function checkScroll(scrollPos, introH) {
		if( scrollPos > introH ) {
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}
	}

	/* SMOOTH SCROLL */
	$("[data-scroll]").on("click", function(event) {
		event.preventDefault();

		let elementId = $(this).data("scroll");
		let elementOffset = $(elementId).offset().top;

		nav.removeClass("show");

		$("html,body").animate({
			scrollTop: elementOffset -70
		}, 700);
	});

	/*NAV TOGGLE*/

	navToggle.on("click", function(event) {
		event.preventDefault();

		nav.toggleClass("show");
	})


	/* ABOUT/SLIDER: https://kenwheeler.github.io/slick/ */
	$("[data-slider]").slick({
		infinite: true,
		fade: false,
		slidesToShow: 1,
  		slidesToScroll: 1
	});

});