/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, EffectFade, Autoplay, Pagination } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Инициализация слайдеров
function initSliders() {
	// Перечень слайдеров
	// Проверяем, есть ли слайдер на стронице
	if (document.querySelector('.main-block__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.main-block__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, EffectFade, Autoplay, Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
			speed: 500,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			
			// Эффекты
			effect: 'fade',
   fadeEffect: {
    crossFade: true
   },
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			

			// Пагинация
			
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			},

			// Брейкпоинты
			/*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			// События
			on: {

			}
		});
	}
 if (document.querySelector('.valuables__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.valuables__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
			speed: 500,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,

			
			// Эффекты
			// effect: 'fade',
   // fadeEffect: {
   //  crossFade: true
   // },
			// autoplay: {
			// 	delay: 3000,
			// 	disableOnInteraction: false,
			// },
			

			// Пагинация
			
			pagination: {
				el: '.swiper-pagination-valuables',
				clickable: true,
			},
			

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			},

			// Брейкпоинты
			/*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			// События
			on: {

			}
		});
	}
 if (document.querySelector('.products__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.products__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
			speed: 500,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,

			
			// Эффекты
			// effect: 'fade',
   // fadeEffect: {
   //  crossFade: true
   // },
			// autoplay: {
			// 	delay: 3000,
			// 	disableOnInteraction: false,
			// },
			

			// Пагинация
			
			pagination: {
				el: '.swiper-pagination-products',
				clickable: true,
			},
			

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			},

			// Брейкпоинты
			/*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			// События
			on: {

			}
		});
	}
 if (document.querySelector('.benefits__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.benefits__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
			speed: 500,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,

			
			// Эффекты
			// effect: 'fade',
   // fadeEffect: {
   //  crossFade: true
   // },
			// autoplay: {
			// 	delay: 3000,
			// 	disableOnInteraction: false,
			// },
			

			// Пагинация
			
			pagination: {
				el: '.swiper-pagination-valuables',
				clickable: true,
			},
			

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			},

			// Брейкпоинты
			/*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			// События
			on: {

			}
		});
	}
 if (document.querySelector('.history__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.history__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 3,
			spaceBetween: 70,
			autoHeight: true,
			speed: 500,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,

			
			// Эффекты
			// effect: 'fade',
   // fadeEffect: {
   //  crossFade: true
   // },
			// autoplay: {
			// 	delay: 3000,
			// 	disableOnInteraction: false,
			// },
			

			// Пагинация
			
			pagination: {
				el: '.swiper-pagination-history',
				clickable: true,
			},
			

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.history-button-prev',
				nextEl: '.history-button-next',
			},

			// Брейкпоинты
			
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
    550: {
					slidesPerView: 2,
					spaceBetween: 20,
					autoHeight: true,
				},
				768: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				// 992: {
				// 	slidesPerView: 3,
				// 	spaceBetween: 20,
				// },
				// 1268: {
				// 	slidesPerView: 4,
				// 	spaceBetween: 30,
				// },
			},
			
			// События
			on: {

			}
		});
	}
 if (document.querySelector('.hero__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.hero__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 20,
			autoHeight: true,
			speed: 500,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,

			
			// Эффекты
			// effect: 'fade',
   // fadeEffect: {
   //  crossFade: true
   // },
			// autoplay: {
			// 	delay: 3000,
			// 	disableOnInteraction: false,
			// },
			

			// Пагинация
			
			pagination: {
				el: '.swiper-pagination-hero',
				clickable: true,
			},
			

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.history-button-prev',
				nextEl: '.history-button-next',
			},

			// Брейкпоинты
			
			breakpoints: {
				// 320: {
				// 	slidesPerView: 1,
				// 	spaceBetween: 0,
				// 	autoHeight: true,
				// },
    // 550: {
				// 	slidesPerView: 2,
				// 	spaceBetween: 20,
				// 	autoHeight: true,
				// },
				// 768: {
				// 	slidesPerView: 3,
				// 	spaceBetween: 20,
				// },
				// 992: {
				// 	slidesPerView: 3,
				// 	spaceBetween: 20,
				// },
				// 1268: {
				// 	slidesPerView: 4,
				// 	spaceBetween: 30,
				// },
			},
			
			// События
			on: {

			}
		});
	}
 if (document.querySelector('.subdivisions__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.subdivisions__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 20,
			autoHeight: true,
			speed: 500,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,

			
			// Эффекты
			// effect: 'fade',
   // fadeEffect: {
   //  crossFade: true
   // },
			// autoplay: {
			// 	delay: 3000,
			// 	disableOnInteraction: false,
			// },
			

			// Пагинация
			
			pagination: {
				el: '.swiper-pagination-subdivisions',
				clickable: true,
			},
			

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.history-button-prev',
				nextEl: '.history-button-next',
			},

			// Брейкпоинты
			
			breakpoints: {
				// 320: {
				// 	slidesPerView: 1,
				// 	spaceBetween: 0,
				// 	autoHeight: true,
				// },
    // 550: {
				// 	slidesPerView: 2,
				// 	spaceBetween: 20,
				// 	autoHeight: true,
				// },
				// 768: {
				// 	slidesPerView: 3,
				// 	spaceBetween: 20,
				// },
				// 992: {
				// 	slidesPerView: 3,
				// 	spaceBetween: 20,
				// },
				// 1268: {
				// 	slidesPerView: 4,
				// 	spaceBetween: 30,
				// },
			},
			
			// События
			on: {

			}
		});
	}
 if (document.querySelector('.services__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.services__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 10,
			autoHeight: true,
			speed: 500,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,

			
			// Эффекты
			// effect: 'fade',
   // fadeEffect: {
   //  crossFade: true
   // },
			// autoplay: {
			// 	delay: 3000,
			// 	disableOnInteraction: false,
			// },
			

			// Пагинация
			
			pagination: {
				el: '.swiper-pagination-valuables',
				clickable: true,
			},
			

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			},

			// Брейкпоинты
			/*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			// События
			on: {

			}
		});
	}
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});