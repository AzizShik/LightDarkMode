const burgerEl = document.querySelector('.nav__burger');
const navEl = document.querySelector('nav');
const navList = document.querySelector('.nav__list');
const body = document.querySelector('body');

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
