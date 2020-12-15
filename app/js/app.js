'use strict';

document.addEventListener("DOMContentLoaded", function() {

	//----------------------SLIDER-price----------------------
		var mySwiper = new Swiper('.price__slider', {
			slidesPerView: 1,
			spaceBetween: 30,
			// loop: true,
			// effect: 'fade',
			autoplay: {
				delay: 5000,
			},
			// pagination: {
			// 	el: '.hero__pagination',
			// 	clickable: 'true',
			// },
			navigation: {
				nextEl: '.price__slider_next',
				prevEl: '.price__slider_prev',
			},
			// breakpoints: {
			// 	320: {
			// 		slidesPerView: 2,
			// 		spaceBetween: 20
			// 	},
			// }
		});

	//----------------------SCROLL-----------------------
		const scrollTo = (scrollTo) => {
			let list = document.querySelector(scrollTo);
			list = '.' + list.classList[0]  + ' li a[href^="#"';
	
			document.querySelectorAll(list).forEach(link => {
	
				link.addEventListener('click', function(e) {
						e.preventDefault();
						const scrollMenu = document.querySelector(scrollTo);
	
						let href = this.getAttribute('href').substring(1);
	
						const scrollTarget = document.getElementById(href);
	
						// const topOffset = scrollMenu.offsetHeight;
						const topOffset = 70;
						const elementPosition = scrollTarget.getBoundingClientRect().top;
						const offsetPosition = elementPosition - topOffset;
	
						window.scrollBy({
								top: offsetPosition,
								behavior: 'smooth'
						});
	
						
						let button = document.querySelector('.hamburger'),
								nav = document.querySelector('.header__nav'),
								header = document.querySelector('.header');
	
						button.classList.remove('hamburger--active');
						nav.classList.remove('header__nav--active');
						header.classList.remove('header--menu');
				});
			});
		};
		scrollTo('.header__nav');
	
	//----------------------FIXED-HEADER-----------------------
		const headerFixed = (headerFixed, headerActive) => {
			const header =  document.querySelector(headerFixed),
						active = headerActive.replace(/\./, '');
	
			window.addEventListener('scroll', function() {
				const top = pageYOffset;
				
				if (top >= 90) {
					header.classList.add(active);
				} else {
					header.classList.remove(active);
				}
	
			});
	
		};
		headerFixed('.header', '.header--active');
	
	//----------------------HAMBURGER-----------------------
		const hamburger = (hamburgerButton, hamburgerNav, hamburgerHeader) => {
			const button = document.querySelector(hamburgerButton),
						nav = document.querySelector(hamburgerNav),
						header = document.querySelector(hamburgerHeader);

			button.addEventListener('click', (e) => {
				nav.classList.toggle('header__nav--active');
				header.classList.toggle('header--menu');
			});

			const headerWrap = document.querySelector('.header__nav');

			nav.addEventListener('click', (e) => {
				if (e.target === headerWrap) {
					nav.classList.remove('header__nav--active');
					header.classList.remove('header--menu');
				}
			});

		};
		hamburger('.hamburger', '.header__nav', '.header');
		hamburger('.header__nav_close', '.header__nav', '.header');
		
	//----------------------MODAL-----------------------
		const modals = (modalSelector) => {
			const	modal = document.querySelectorAll(modalSelector);

			if (modal) {
				let i = 1;

				modal.forEach(item => {
					const wrap = item.id;
					const link = document.querySelector('.' + wrap);
					let close = item.querySelector('.close');
					if (link) {
						link.addEventListener('click', (e) => {
							if (e.target) {
								e.preventDefault();
							}
							item.classList.add('active');
						});
					}

					if (close) {
						close.addEventListener('click', () => {
							item.classList.remove('active');
						});
					}

					item.addEventListener('click', (e) => {
						if (e.target === item) {
							item.classList.remove('active');
						}
					});
				});
			}

		};
		modals('.modal');

	//------------------------------ACCORDIONS---------------------------
		const accordions = (accordionSelector) => {
			const	accordion = document.querySelectorAll(accordionSelector);

			accordion.forEach(item => {
				const accordionClick = item.querySelector('.accordion__header'),
							accordionContent = item.querySelector('.accordion__content');

				accordionClick.addEventListener('click', (e) => {
					item.classList.toggle('accordion--active');
				});
			});
		};
		accordions('.accordion');




});
	