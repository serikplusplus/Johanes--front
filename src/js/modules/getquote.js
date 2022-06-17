export function dropdawnTranslateFrom() {
	const wrapperLang = document.querySelector('.dropdawn-langfrom'),
		selectBtnLang = wrapperLang.querySelector('.dropdawn__select-btn'),
		searchInpLang = wrapperLang.querySelector('input'),
		optionsLang = wrapperLang.querySelector('.dropdawn__options')

	let elemCountries = null
	const lang = [
		'Afghanistan',
		'Algeria',
		'Argentina',
		'Australia',
		'Bangladesh',
		'Belgium',
		'Bhutan',
		'Brazil',
		'Canada',
		'China',
		'Denmark',
		'Ethiopia',
		'Finland',
		'France',
		'Germany',
		'Hungary',
		'Iceland',
		'India',
		'Indonesia',
		'Iran',
		'Italy',
		'Japan',
		'Malaysia',
		'Maldives',
		'Mexico',
		'Morocco',
		'Nepal',
		'Netherlands',
		'Nigeria',
		'Norway',
		'Pakistan',
		'Peru',
		'Russia',
		'Romania',
		'South Africa',
		'Spain',
		'Sri Lanka',
		'Sweden',
		'Switzerland',
		'Thailand',
		'Turkey',
		'Uganda',
		'Ukraine',
		'United States',
		'United Kingdom',
		'Vietnam',
	]
	function addCountry(selectedCountry) {
		optionsLang.innerHTML = ''
		lang.forEach(country => {
			const isSelected = country == selectedCountry ? 'selected' : ''
			const li = `<li class="${isSelected} ">${country}</li>`
			elemCountries = optionsLang.querySelectorAll('li')
			elemCountries.forEach(elem => {
				elem.addEventListener('click', e => {
					updateName(e.target)
				})
			})

			optionsLang.insertAdjacentHTML('beforeend', li)
		})
	}
	addCountry()

	elemCountries[0].classList.add('selected')
	selectBtnLang.firstElementChild.innerText = lang[0]

	function updateName(selectedLi) {
		searchInpLang.value = ''
		addCountry(selectedLi.innerText)
		wrapperLang.classList.remove('active')
		selectBtnLang.firstElementChild.innerText = selectedLi.innerText
	}

	searchInpLang.addEventListener('keyup', () => {
		let arr = []
		const searchWord = searchInpLang.value.toLowerCase()
		arr = lang
			.filter(data => data.toLowerCase().startsWith(searchWord))
			.map(data => {
				const isSelected =
					data == selectBtnLang.firstElementChild.innerText ? 'selected' : ''
				return `<li onclick="updateName(this)" class="${isSelected}">${data}</li>`
			})
			.join('')
		optionsLang.innerHTML =
			arr || '<p style="margin-top: 10px;">Oops! Country not found</p>'
	})

	selectBtnLang.addEventListener('click', () =>
		wrapperLang.classList.toggle('active'),
	)
}
export function dropdawnTranslateTo() {
	const wrapperLang = document.querySelector('.dropdawn-langto'),
		selectBtnLang = wrapperLang.querySelector('.dropdawn__select-btn'),
		searchInpLang = wrapperLang.querySelector('input'),
		optionsLang = wrapperLang.querySelector('.dropdawn__options')

	const lang = [
		'Afghanistan',
		'Algeria',
		'Argentina',
		'Australia',
		'Bangladesh',
		'Belgium',
		'Bhutan',
		'Brazil',
		'Canada',
		'China',
		'Denmark',
		'Ethiopia',
		'Finland',
		'France',
		'Germany',
		'Hungary',
		'Iceland',
		'India',
		'Indonesia',
		'Iran',
		'Italy',
		'Japan',
		'Malaysia',
		'Maldives',
		'Mexico',
		'Morocco',
		'Nepal',
		'Netherlands',
		'Nigeria',
		'Norway',
		'Pakistan',
		'Peru',
		'Russia',
		'Romania',
		'South Africa',
		'Spain',
		'Sri Lanka',
		'Sweden',
		'Switzerland',
		'Thailand',
		'Turkey',
		'Uganda',
		'Ukraine',
		'United States',
		'United Kingdom',
		'Vietnam',
	]

	function addCountry(selectedCountry) {
		optionsLang.innerHTML = ''
		lang.forEach(country => {
			const isSelected = country == selectedCountry ? 'selected' : ''
			const li = `<li class="${isSelected} ">${country}</li>`
			optionsLang.insertAdjacentHTML('beforeend', li)
		})
	}
	addCountry()

	const elemCountries = optionsLang.querySelectorAll('li')
	elemCountries[0].classList.add('selected')
	selectBtnLang.firstElementChild.innerText = lang[0]

	function updateName(selectedLi) {
		searchInpLang.value = ''
		addCountry(selectedLi.innerText)
		wrapperLang.classList.remove('active')
		selectBtnLang.firstElementChild.innerText = selectedLi.innerText
	}

	elemCountries.forEach(elem => {
		elem.addEventListener('click', e => {
			updateName(e.target)
		})
	})

	searchInpLang.addEventListener('keyup', () => {
		let arr = []
		const searchWord = searchInpLang.value.toLowerCase()
		arr = lang
			.filter(data => data.toLowerCase().startsWith(searchWord))
			.map(data => {
				const isSelected =
					data == selectBtnLang.firstElementChild.innerText ? 'selected' : ''
				return `<li onclick="updateName(this)" class="${isSelected}">${data}</li>`
			})
			.join('')
		optionsLang.innerHTML =
			arr || '<p style="margin-top: 10px;">Oops! Country not found</p>'
	})

	selectBtnLang.addEventListener('click', () =>
		wrapperLang.classList.toggle('active'),
	)
}
export function dropdawnTranslateFile() {
	const wrapperFile = document.querySelector('.dropdawn-file'),
		selectBtnFile = wrapperFile.querySelector('.dropdawn__select-btn'),
		optionsFile = wrapperFile.querySelector('.dropdawn__options')

	let elemFile

	function addFile(selectedCountry) {
		optionsFile.innerHTML = ''
		file.forEach(f => {
			const isSelected = f == selectedCountry ? 'selected' : ''
			const li = `<li class="${isSelected} ">${f}</li>`

			elemFile = optionsFile.querySelectorAll('li')
			elemFile.forEach(elem => {
				elem.addEventListener('click', e => {
					updateName(e.target)
				})
			})
			optionsFile.insertAdjacentHTML('beforeend', li)
		})
	}
	addFile()

	elemFile[0].classList.add('selected')
	selectBtnFile.firstElementChild.innerText = file[0]

	function updateName(selectedLi) {
		addFile(selectedLi.innerText)
		wrapperFile.classList.remove('active')
		selectBtnFile.firstElementChild.innerText = selectedLi.innerText
	}

	selectBtnFile.addEventListener('click', () =>
		wrapperFile.classList.toggle('active'),
	)
}
