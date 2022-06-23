export function collapse() {
	const langBtn = document.querySelector('.btn-lang'),
		langMenu = document.querySelector('.lang-list'),
		megaMenu = document.querySelector('.mega-menu'),
		megaTrigger = document.querySelector('#services'),
		burger = document.querySelector('.burger-btn'),
		mobileMenu = document.querySelector('.mobile-menu')

	langBtn.addEventListener('click', e => {
		e.preventDefault()
		langMenu.classList.toggle('show')
	})

	burger.addEventListener('click', e => {
		e.preventDefault()
		mobileMenu.classList.toggle('show')
		burger.classList.toggle('open')
	})

	megaTrigger.addEventListener('click', e => {
		e.preventDefault()
		megaMenu.classList.toggle('show')
	})
}
