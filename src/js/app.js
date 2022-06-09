
document.addEventListener('DOMContentLoaded', () => {
	const button = document.getElementById('open-modal');
	const modal = document.getElementById('modal');
	const modalContent = document.getElementById('modal-content');
	const buttonMenu = document.getElementById('open-menu')
	const menu = document.getElementById('menu');
	

	button.addEventListener('click', () => {
		modal.style.display = 'block';
	});

	modal.addEventListener('click', e => {
	if (e.target !== modalContent) {
		modal.style.display = 'none';
	}
	});




	buttonMenu.addEventListener('click', () => {
		menu.style.display = 'block';
	});

	menu.addEventListener('click', e => {
	if (e.target !== menuList) {
		menu.style.display = 'none';
	}
	});
});

$(document).ready(() => {
	$('.body__carousel').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
		{
		breakpoint: 600,
		settings: {
		slidesToShow: 2,
		slidesToScroll: 1
		}
		},
		{
		breakpoint: 480,
		settings: {
		slidesToShow: 1,
		slidesToScroll: 1
		}
		}
		]
	});
})