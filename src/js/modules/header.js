export function collapse() {
	const langBtn = document.querySelector('.btn-lang'),
		langMenu = document.querySelector('.lang-list'),
		megaMenu = document.querySelector('.mega-menu'),
		megaTrigger = document.querySelector('#services')

	langBtn.addEventListener('click', e => {
		e.preventDefault()
		langMenu.classList.toggle('show')
	})

	megaTrigger.addEventListener('click', e => {
		e.preventDefault()
		megaMenu.classList.toggle('show')
	})
}
