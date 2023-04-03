$(() => {
 
	const slider = document.querySelector('.slider');
	const sl = new Swiper(slider, {
		loop: true,
		spaceBetween: 20,
		lazy: {
			enabled: true,
			checkInView: true,
			loadOnTransitionStart: true,
			loadPrevNext: true
		},
		speed: 5000,
		slidesPerView: '9',
		autoplay: {
			enabled: true,
			delay: 1,
		},
		breakpoints: {
			0: {
				spaceBetween: 20,
				slidesPerView: 2
			},
			480: {
				spaceBetween: 20,
				slidesPerView: 2
			},
			768: {
				spaceBetween: 20,
				slidesPerView: 3
			},
			1024: {
				spaceBetween: 20,
				slidesPerView: 4
			},
			1370: {
				spaceBetween: 20,
				slidesPerView: 6
			}
		},
	});


	$('select').niceSelect();

	$('.steps_item').click((e) => {
		e.preventDefault()
	})
	
	$('.personal_item').click((e) => {
		e.preventDefault()
	})
	
	// Моб. меню
	$('header .mob_menu_btn').click((e) => {
		e.preventDefault()

		$('header .mob_menu_btn').addClass('active')
		$('body').addClass('menu_open')
		$('header .menu').addClass('show')
		$('.overlay').fadeIn(300)
	})

	$('header .close_btn, header .menu .item a, .overlay').click((e) => {
		e.preventDefault()

		$('header .mob_menu_btn').removeClass('active')
		$('body').removeClass('menu_open')
		$('header .menu').removeClass('show')
		$('.overlay').fadeOut(300)
	})



	$('body').on('click', '.modal_link', function (e) {
		e.preventDefault()

		Fancybox.close(true)
		Fancybox.show([{
			src: $(this).data('content'),
			type: 'inline',
		}]);
	})







})


