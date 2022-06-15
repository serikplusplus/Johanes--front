export default function timeline() {
	const circleFirst = document.querySelector('.timeline__circle-first'),
		circleSecond = document.querySelector('.timeline__circle-second'),
		circleThirs = document.querySelector('.timeline__circle-third'),
		textFirst = document.querySelector('.timeline__text--first'),
		textSecond = document.querySelector('.timeline__text--second'),
		textThirs = document.querySelector('.timeline__text--third'),
		lineFirst = document.querySelector('.timeline__line-first'),
		lineSecond = document.querySelector('.timeline__line-second')

	circleFirst.addEventListener('mouseover', () => {
		textFirst.classList.add('hover')
	})
	circleFirst.addEventListener('mouseout', () => {
		textFirst.classList.remove('hover')
	})

	circleSecond.addEventListener('mouseover', () => {
		textSecond.classList.add('hover')
		lineFirst.classList.add('hover')
	})
	circleSecond.addEventListener('mouseout', () => {
		textSecond.classList.remove('hover')
		lineFirst.classList.remove('hover')
	})

	circleThirs.addEventListener('mouseover', () => {
		textThirs.classList.add('hover')
		lineSecond.classList.add('hover')
	})
	circleThirs.addEventListener('mouseout', () => {
		textThirs.classList.remove('hover')
		lineSecond.classList.remove('hover')
	})
}
