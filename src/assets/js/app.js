/// *remove before//=../../../node_modules/jquery.breadcrumbs-generator/dist/jquery.breadcrumbs-generator.min.js


console.log('file 1');

// Burger menu

	$("#nav_toggle").on("click", function(event) {
		event.preventDefault();

		$(this).toggleClass("active");
		$("#nav").toggleClass("active");
	});

	var md = window.matchMedia("(max-width: 992px)");

	$("[data-subnav='has-subnav']").on("click", function(event) {
		event.preventDefault();

		if (md.matches) {
			$(this).next(".subnav").toggleClass("active");
		}

	});

// Smooth Scroll

	$("[data-scroll]").on("click", function(event) {
		event.preventDefault();

		var $this = $(this),
			blockId = $this.data('scroll'),
			blockOffset = $(blockId).offset().top;

			$("html, body").animate({
				scrollTop: blockOffset
			}, 500);
	});


// Scroll Top

	var height = $(window).height();
		scrollOffset = $(window).scrollTop();


	checkScroll(scrollOffset);

	$(window).on("scroll", function() {
		scrollOffset = $(this).scrollTop();
		checkScroll(scrollOffset);

	});

	function checkScroll(scrollOffset) {
		var $btnUp = $("#btn-scroll-top");

		if(scrollOffset >= height) {
			$btnUp.addClass("active")
		} else {
			$btnUp.removeClass("active")
		}
	}

	$("#btn-scroll-top").on("click", function(event) {
		event.preventDefault();

			$("html, body").animate({
				scrollTop: 0
			}, 500);
	});
