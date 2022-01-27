'use strict';
document.addEventListener('DOMContentLoaded', () => {

	const modal = document.querySelector('.modal');
	const overlay = document.querySelector('.overlay');
	const btnCloseModal = document.querySelector('.close-modal');
	const btnOpenModal = document.querySelectorAll('.show-modal');

	// close the modal window and overlay
	const toHideModal = () => {
		modal.classList.add('hidden');
		overlay.classList.add('hidden');
	}

	// open the modal window and overlay
	btnOpenModal.forEach(item => { 
		item.addEventListener('click', () => {
			modal.classList.remove('hidden');
			overlay.classList.remove('hidden');
		}); 
	});

	// close the modal window by click on X or on the area beyond the modal window
	btnCloseModal.addEventListener('click', toHideModal);
	overlay.addEventListener('click', toHideModal);

	window.addEventListener('keydown', (event) => {
		if (event.key == 27 || event.key == 'Escape') toHideModal();
	});


});