export default function subPageSlider() {
	const persons = document.querySelectorAll('.sub-team__slide-left '),
		slides = document.querySelectorAll('.sub-team__slide'),
		nextSlide = document.querySelector('.meet-team__next-slide')

	const tl2 = gsap.timeline({
		defaults: { duration: 0.75, ease: 'Power3.easeOut' },
	})

	const subPageSlide = new Swiper('.sub-team__slider', {
		loop: true,
		spaceBetween: 30,
		slidesPerView: 1,
		speed: 500,
		navigation: {
			nextEl: '.meet-team__next-slide',
		},
		allowTouchMove: false,
		effect: 'creative',
		creativeEffect: {
			prev: {
				translate: [0, 0, -800],
				rotate: [180, 0, 0],
			},
			next: {
				translate: [0, 0, -800],
				rotate: [-180, 0, 0],
			},
		},
	})

	let thisSlide = 1

	const swipeNextSlideBtn = () => {
		nextSlide
			.querySelector('.meet-team__photo img')
			.setAttribute(
				'src',
				persons[thisSlide]
					.querySelector('.sub-team__slide-photo img')
					.getAttribute('src'),
			)
		nextSlide.querySelector('.meet-team__name').textContent = persons[
			thisSlide
		].querySelector('.sub-team__slide-name').textContent

		nextSlide.querySelector('.meet-team__position').textContent = persons[
			thisSlide
		].querySelector('.sub-team__slide-position').textContent

		subPageSlide.slideTo(thisSlide)
	}

	swipeNextSlideBtn()

	nextSlide.addEventListener('click', () => {
		thisSlide++

		if (thisSlide > slides.length) {
			thisSlide = 0
		}
		tl2.to(nextSlide, {
			right: '-300px',
		})

		swipeNextSlideBtn()

		tl2.to(nextSlide, {
			right: '0',
			duration: 0.4,
		})
	})
}
