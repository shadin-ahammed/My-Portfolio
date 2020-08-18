const hamburger = document.querySelector('.head .nav .nav-list .hamburger');
const mobile_menu = document.querySelector('.head .nav .nav-list ul');
const menu_item = document.querySelectorAll('.head .nav .nav-list ul li a');
const head = document.querySelector('.head .container1');



hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});



document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		head.style.backgroundColor = '#29323c';
	} else {
		head.style.backgroundColor = 'transparent';
	}
});



menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});