/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const swiperBanner = new Swiper('.section-banner__slider', {
  wrapperClass: 'section-banner__box-slide',
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  loop: false,
  speed: 800,
  observer: true,
  observeParents: true,
});

const swiperSliderGallery = new Swiper('.section-gallery__slider', {
  pagination: {
    el: '.section-gallery__slider-pagination',
    type: 'fraction',
  },
  navigation: {
    prevEl: '.section-gallery__slider-btn-1',
    nextEl: '.section-gallery__slider-btn-2',
  },
  a11y: {
    prevSlideMessage: 'Влево',
    nextSlideMessage: 'Вправо',
  },
  lazy: {
    loadOnTransitionStart: false,
    loadPrevNextAmount: 6,
  },
  watchSlidesProgress: true,
  watchSlidesVisibiliti: true,
  breakpoints: {
    1662: {
      spaceBetween: 50,
      slidesPerView: 3,
      slidesPerGroup: 3,
      grid: {
        rows: 2,
      },
    },
    500: {
      spaceBetween: 34,
      slidesPerView: 2,
      slidesPerGroup: 2,
      grid: {
        rows: 2,
      },
    },
    451: {
      spaceBetween: 30,
      slidesPerView: 1,
      slidesPerGroup: 1,
      grid: {
        rows: 2,
      },
    },
    200: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 30,
      grid: {
        rows: 1,
      },
      initialSlide: 2,
    },
  },
  hideOnClick: true,
  loop: false,
  speed: 1000,
  preloadImages: false,
  observer: true,
  observeParents: true,
});

const swiperSliderProjects = new Swiper('.section-projects__slider', {
  navigation: {
    prevEl: '.section-projects__slider-btn-1',
    nextEl: '.section-projects__slider-btn-2',
  },
  a11y: {
    prevSlideMessage: 'Влево',
    nextSlideMessage: 'Вправо',
  },
  breakpoints: {
    1340: {
      spaceBetween: 50,
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    1001: {
      spaceBetween: 50,
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    600: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },
    200: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 30,
    },
  },
  hideOnClick: true,
  loop: false,
  speed: 1000,
  observer: true,
  observeParents: true,
});

if (window.screen.width > 450) {
  const swiperSliderEditions = new Swiper('.section-editions__slider', {
    pagination: {
      el: '.section-editions__slider-pagination',
      type: 'fraction',
    },
    navigation: {
      prevEl: '.section-editions__slider-btn-1',
      nextEl: '.section-editions__slider-btn-2',
    },
    a11y: {
      prevSlideMessage: 'Влево',
      nextSlideMessage: 'Вправо',
    },
    lazy: {
      loadOnTransitionStart: false,
      loadPrevNextAmount: 1,
    },
    watchSlidesProgress: true,
    watchSlidesVisibiliti: true,
    breakpoints: {
      1251: {
        spaceBetween: 50,
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
      1001: {
        spaceBetween: 50,
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      731: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 34,
      },
      450: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 30,
      },
    },
    hideOnClick: true,
    loop: false,
    speed: 1000,
    observer: true,
    observeParents: true,
  });
}

if (window.screen.width < 451) {
  const swiperSliderEvents = new Swiper('.section-events__content', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    lazy: {
      loadOnTransitionStart: false,
      loadPrevNextAmount: true,
    },
    loop: false,
    slidesPerView: 1,
    spaceBetween: 30,
  });
}
