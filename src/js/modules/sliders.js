export default function sliders() {
	const indexMain = new Swiper('.main-section__slider', {
		loop: true,
		spaceBetween: 30,
		slidesPerView: 1.4,
		speed: 500,
		autoplay: {
			delay: 2000,
			disableOnInteraction: false,
		},
	})

	const indexOurClients = new Swiper('.our-clients__slider', {
		loop: true,
		speed: 5000,
		autoplay: {
			delay: 0,
			disableOnInteraction: false,
		},
		slidesPerView: 3,
	})
	const indexReviews = new Swiper('.reviews__slider', {
		loop: true,
		slidesPerView: 1,
		pagination: {
			el: '.reviews-pagination',
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
		slidesPerView: 3,
		spaceBetween: 20,
		pagination: {
			el: '.stories-pagination',
		},
	})
}
