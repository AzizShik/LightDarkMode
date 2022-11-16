const burgerEl = document.querySelector('.nav__burger');
const navEl = document.querySelector('nav');
const navList = document.querySelector('.nav__list');
const body = document.querySelector('body');
const themeInput = document.querySelector('#themeInput');
const image1 = document.querySelector('#image1');
const image2 = document.querySelector('#image2');
const image3 = document.querySelector('#image3');
const toggleText = document.querySelector('.toggle-text');
const htmlEl = document.documentElement;

if (localStorage.getItem('theme') === 'dark') {
	darkThemeChange();
	themeInput.click();
}
themeInput.addEventListener('click', () => {
	if (htmlEl.dataset.theme !== 'dark') {
		darkThemeChange();
	} else {
		lightThemeChange();
	}
});

function darkThemeChange() {
	htmlEl.setAttribute('data-theme', 'dark');
	imageThemeChange('dark');
	toggleText.textContent = 'Dark Mode';
	document.querySelector('.fa-sun').className = 'fas fa-moon';
	localStorage.setItem('theme', 'dark');
}

function lightThemeChange() {
	toggleText.textContent = 'Light Mode';
	imageThemeChange('light');
	htmlEl.removeAttribute('data-theme');
	document.querySelector('.fa-moon').className = 'fas fa-sun';
	localStorage.setItem('theme', 'light');
}

function imageThemeChange(theme) {
	image1.src = `img/undraw_proud_coder_${theme}.svg`;
	image2.src = `img/undraw_feeling_proud_${theme}.svg`;
	image3.src = `img/undraw_conceptual_idea_${theme}.svg`;
}

burgerEl.addEventListener('click', () => {
	if (burgerEl.classList.contains('active')) {
		closeBurger();
	} else {
		openBurger();
	}
});

function openBurger() {
	navEl.classList.add('active');
	navList.classList.add('active');
	burgerEl.classList.add('active');
	body.classList.add('_lock');
}

function closeBurger() {
	navEl.classList.remove('active');
	navList.classList.remove('active');
	burgerEl.classList.remove('active');
	body.classList.remove('_lock');
}

navEl.addEventListener('click', (e) => {
	const el = e.target;
	if (el.classList.contains('nav__link')) {
		closeBurger();
	}

	if (!el.closest('.nav__list') && !el.closest('.nav__burger')) {
		closeBurger();
	}
});
