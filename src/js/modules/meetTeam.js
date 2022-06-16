export default function meetTeam() {
	const persons = document.querySelectorAll('.meet-team__person '),
		close = document.querySelector('.meet-team__close-btn'),
		slides = document.querySelectorAll('.meet-team__slide'),
		nextSlide = document.querySelector('.meet-team__next-slide'),
		wrapper = document.querySelector('.meet-team__wrapper')

	const tl = gsap.timeline({
		defaults: { duration: 0.75, ease: 'Power3.easeOut' },
	})
	const tl2 = gsap.timeline({
		defaults: { duration: 0.75, ease: 'Power3.easeOut' },
	})
	const tl3 = gsap.timeline({
		defaults: { duration: 0.75, ease: 'Power3.easeOut' },
	})

	const meetSlide = new Swiper('.meet-team__slider', {
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

	let thisSlide = 0,
		thisPerson = 0

	const swipeNextSlideBtn = () => {
		nextSlide
			.querySelector('.meet-team__photo img')
			.setAttribute(
				'src',
				persons[thisSlide]
					.querySelector('.meet-team__photo img')
					.getAttribute('src'),
			)
		nextSlide.querySelector('.meet-team__name').textContent =
			persons[thisSlide].querySelector('.meet-team__name').textContent

		nextSlide.querySelector('.meet-team__position').textContent = persons[
			thisSlide
		].querySelector('.meet-team__position').textContent
		meetSlide.slideTo(thisSlide)
	}

	persons.forEach((person, index) => {
		person.addEventListener('click', () => {
			thisPerson = index
			thisSlide = index + 1

			swipeNextSlideBtn()

			persons.forEach(pers => {
				tl.fromTo(
					pers,
					{ y: 0, opacity: 1 },
					{ y: 20, opacity: 0, pointerEvents: 'none', duration: 0.3 },
				)
			})

			tl.to(
				wrapper,
				{
					transform: 'translateX(-100%)',
				},
				'<60%',
			)
		})
	})

	close.addEventListener('click', () => {
		tl3.to(wrapper, {
			transform: 'translateX(0%)',
		})

		persons.forEach(pers => {
			tl3.fromTo(
				pers,
				{ y: 20, opacity: 0 },
				{ y: 0, opacity: 1, pointerEvents: 'auto', duration: 0.3 },
			)
		})
	})

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
