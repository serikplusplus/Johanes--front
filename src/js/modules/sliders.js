export default function sliders() {
	const indexMain = new Swiper('.main-section__slider', {
		loop: true,
		spaceBetween: 30,
		slidesPerView: 1,
		speed: 500,
		autoplay: {
			delay: 2000,
			disableOnInteraction: false,
		},
		breakpoints: {
			1335: {
				slidesPerView: 1.4,
			},
		},
	})

	const indexOurClients = new Swiper('.our-clients__slider', {
		loop: true,
		speed: 5000,
		autoplay: {
			delay: 0,
			disableOnInteraction: false,
		},
		slidesPerView: 1,
		breakpoints: {
			630: {
				slidesPerView: 2,
			},
			991: {
				slidesPerView: 3,
			},
		},
	})
	const indexReviews = new Swiper('.reviews__slider', {
		loop: true,
		slidesPerView: 1,
		pagination: {
			el: '.reviews-pagination',
			clickable: true,
		},
		speed: 500,
		autoplay: {
			delay: 2000,
			disableOnInteraction: false,
		},
	})
	const indexHowWork = new Swiper('.how-work__slider', {
		loop: true,
		slidesPerView: 1,
		pagination: {
			el: '.how-work__btns',
			clickable: true,
			renderBullet(index, className) {
				return `<button class="${className}">Step ${index}</button>`
			},
		},
	})

	const aboutStories = new Swiper('.stories__slider', {
		loop: true,
		slidesPerView: 1,
		spaceBetween: 20,
		pagination: {
			el: '.stories-pagination',
			clickable: true,
		},
		breakpoints: {
			630: {
				slidesPerView: 2,
				centeredSlides: true,
			},
			991: {
				slidesPerView: 3,
			},
		},
	})
}
