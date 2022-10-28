/* eslint-disable no-undef */
const body = document.body;

const preloader = document.getElementById('preloader');
window.addEventListener('load', () => {
  preloader.remove();
});

// header

// header // dropdown
const dropdownBtnHeader = document.querySelectorAll('.header__dropdown-btn');
const dropdownHeader = document.querySelectorAll('.header__dropdown');
const classOpenList = 'header__dropdown-open';
const classCloseList = 'header__dropdown-close';
const classActiveBtn = 'header__dropdown-btn-active';

dropdownBtnHeader.forEach(function (btn, indexBtn) {
  btn.addEventListener('click', function () {
    if (dropdownHeader[indexBtn].classList.contains(classOpenList)) {
      this.classList.remove(classActiveBtn);
      elemHidden(dropdownHeader[indexBtn], classOpenList, classCloseList);
    } else {
      this.classList.add(classActiveBtn);
      elemVisible(dropdownHeader[indexBtn], classOpenList, 'block');
    }
  });
});
body.addEventListener('click', (el) => {
  dropdownBtnHeader.forEach(function (btn, indexBtn) {
    if (dropdownHeader[indexBtn].style.display === 'none') return;
    if (
      !dropdownHeader[indexBtn].contains(el.target) &&
      !btn.contains(el.target)
    ) {
      btn.classList.remove(classActiveBtn);
      elemHidden(dropdownHeader[indexBtn], classOpenList, classCloseList);
    }
  });
});

// header // nav
const navLinksHeader = document.querySelectorAll('.header__nav-link');

navLinksHeader.forEach((link) => {
  smoothScroll(link, 50);
});

// header // menu
const menuHeader = document.getElementById('menu');
const btnOpenMenuHeader = document.getElementById('menu-open');
const btnCloseMenuHeader = document.getElementById('menu-close');
const linkOpenHeader = document.querySelector('.header__nav-link-open');
const classOpenMenuHeader = 'header__nav-menu-open';
const classCloseMenuHeader = 'header__nav-menu-close';

btnOpenMenuHeader.addEventListener('click', () => {
  elemVisible(menuHeader, classOpenMenuHeader, 'flex');
});
btnCloseMenuHeader.addEventListener('click', () => {
  elemHidden(menuHeader, classOpenMenuHeader, classCloseMenuHeader);
});

function menuResize() {
  if (window.screen.width < 1251) {
    menuHeader.style.display = 'none';
    linkOpenHeader.classList.remove('us-link');
    linkOpenHeader.classList.add('us-btn');
    body.addEventListener('click', (el) => {
      if (menuHeader.style.display === 'none') return;
      if (
        !menuHeader.contains(el.target) &&
        !btnOpenMenuHeader.contains(el.target)
      ) {
        elemHidden(menuHeader, classOpenMenuHeader, classCloseMenuHeader);
      }
    });
  } else {
    menuHeader.style.display = 'flex';
    linkOpenHeader.classList.add('us-link');
    linkOpenHeader.classList.remove('us-btn');
  }
}
window.addEventListener('resize', menuResize());
window.addEventListener('load', menuResize());

// header // search
const searchHeader = document.getElementById('search');
const btnOpenSearchHeader = document.getElementById('search-open');
const btnCloseSearchHeader = document.getElementById('search-close');
const classOpenSearchHeader = 'header__search-box-open';
const classCloseSearchHeader = 'header__search-box-close';

btnOpenSearchHeader.addEventListener('click', () => {
  elemVisible(searchHeader, classOpenSearchHeader, 'flex');
});
btnCloseSearchHeader.addEventListener('click', () => {
  elemHidden(searchHeader, classOpenSearchHeader, classCloseSearchHeader);
});
function searchResiza() {
  if (window.screen.width < 1251) {
    searchHeader.style.display = 'none';
    body.addEventListener('click', (el) => {
      if (searchHeader.style.display === 'none') return;
      if (
        !searchHeader.contains(el.target) &&
        !btnOpenSearchHeader.contains(el.target)
      ) {
        elemHidden(searchHeader, classOpenSearchHeader, classCloseSearchHeader);
      }
    });
  } else searchHeader.style.display = 'flex';
}
window.addEventListener('resize', searchResiza());
window.addEventListener('load', searchResiza());

// section-banner
const linkBanner = document.querySelector('.section-banner__btn');

smoothScroll(linkBanner, 50);

// section-gallery

// section-gallery // select
const selectGallery = document.getElementById('select');

window.addEventListener('load', () => {
  if (window.screen.width < 451) {
    selectGallery.append(
      select(
        {
          name: 'Автор',
          classContainer: 'section-gallery__select-container',
          classSelect: {
            main: 'section-gallery__select',
            active: 'section-gallery__select-active',
          },
          classDropdown: {
            main: 'section-gallery__select-dropdown',
            open: 'section-gallery__select-dropdown-open',
            close: 'section-gallery__select-dropdown-close',
          },
        },
        [
          {
            name: 'Направление',
            class: 'section-gallery__select-dropdown-btn',
          },
          { name: 'Техника', class: 'section-gallery__select-dropdown-btn' },
        ]
      )
    );
  } else {
    selectGallery.append(
      select(
        {
          name: 'Живопись',
          classContainer: 'section-gallery__select-container',
          classSelect: {
            main: 'section-gallery__select',
            active: 'section-gallery__select-active',
          },
          classDropdown: {
            main: 'section-gallery__select-dropdown',
            open: 'section-gallery__select-dropdown-open',
            close: 'section-gallery__select-dropdown-close',
          },
        },
        [
          { name: 'Рисунок', class: 'section-gallery__select-dropdown-btn' },
          { name: 'Скульптура', class: 'section-gallery__select-dropdown-btn' },
        ]
      )
    );
  }
});

// section-gallery // popup-slide
const btnSlideGallery = document.querySelectorAll('.section-gallery__slide');
const btnPopupCloseGallery = document.getElementById('popup-slide-close');
const popupGallery = document.getElementById('popup-slide');
const containerPopupGallery = document.getElementById('popup-slide-box');

btnSlideGallery.forEach(function (btn, indexBtn) {
  btn.setAttribute('data-slide', `${indexBtn + 1}`);
  btn.addEventListener('click', () => {
    popupGallery.style.display = 'flex';
    function contentPopupGallery(numberImg, objContent) {
      const img = document.querySelector('[data-img="img"]');
      const source = document.querySelector('[data-img="source"]');
      const title = document.querySelector('.section-gallery__popup-title');
      const subtitle = document.querySelector(
        '.section-gallery__popup-subtitle'
      );
      const date = document.querySelector(
        '.section-gallery__popup-subtitle-date'
      );
      const desc = document.querySelector('.section-gallery__popup-desc');

      if (numberImg === '3') {
        img.src = `img/desktop/gallery/popup/${numberImg}.webp`;
        source.srcset = `img/desktop/gallery/popup/${numberImg}.webp`;
      } else {
        img.src = `img/desktop/gallery/slide/${numberImg}.webp`;
        source.srcset = `img/desktop/gallery/slide/${numberImg}.webp`;
      }

      title.textContent = objContent.title;
      subtitle.textContent = objContent.subtitle;
      date.textContent = objContent.date;
      desc.textContent = objContent.desc;
    }
    contentPopupGallery(
      btn.getAttribute('data-slide'),
      arrayObjGallery[indexBtn]
    );
  });
});

btnPopupCloseGallery.addEventListener('click', () => {
  popupClose(popupGallery, 'section-gallery__popup-close');
});
popupGallery.addEventListener('click', (el) => {
  if (!containerPopupGallery.contains(el.target)) {
    popupClose(popupGallery, 'section-gallery__popup-close');
  }
});

// section-catalog

// section-catalog // accordion
const tab = {
  element: document.getElementById('tab'),
  classes: {
    tab: 'section-catalog__tab',
    container: {
      main: 'section-catalog__tab-container',
      active: 'section-catalog__tab-container-active',
    },
    img: 'section-catalog__tab-img',
    title: 'section-catalog__tab-title',
    subtitle: 'section-catalog__tab-subtitle',
    desc: 'section-catalog__tab-desc',
  },
};
const accordion = {
  element: document.getElementById('accordion'),
  classes: {
    accordion: 'section-catalog__accordion',
    btnDropdown: {
      main: 'section-catalog__accordion-dropdown-btn',
      active: 'section-catalog__accordion-dropdown-btn-active',
    },
    titleDropdown: 'section-catalog__accordion-dropdown-title',
    listDropdown: {
      main: 'section-catalog__accordion-dropdown',
      open: 'section-catalog__accordion-dropdown-open',
      close: 'section-catalog__accordion-dropdown-close',
    },
    itemDropdown: 'section-catalog__accordion-item',
    linkDropdown: {
      main: 'section-catalog__accordion-btn',
      active: 'section-catalog__accordion-btn-active',
    },
  },
  activeLinkDropdown: 'Доменико Гирландайо',
};

accordionDropdownLink(tab, accordion, accordionContent);

// section-events

// section-events // all-events
const btnEvents = document.getElementById('all-events');
const itemEvents = document.querySelectorAll('.section-events__item');

btnEvents.addEventListener('click', function () {
  itemEvents.forEach((item) => {
    item.style.display = 'block';
  });
  this.style.display = 'none';
});

// section-events // slider-img
window.addEventListener(
  'load',
  resizeImg('>=', 450, 'section-events__img', null)
);
window.addEventListener(
  'resize',
  resizeImg('>=', 450, 'section-events__img', null)
);

// section-editions

// section-editions // checkbox
const checkboxEditions = document.querySelectorAll(
  '.section-editions__checkbox'
);
const itemsEditions = document.querySelectorAll(
  '.section-editions__dropdown-item'
);
const btnCheckEditions = document.querySelector(
  '.section-editions__dropdown-btn'
);
const labelEditions = document.querySelectorAll(
  '.section-editions__checkbox-label'
);

if (window.screen.width < 451) {
  btnCheckEditions.addEventListener('click', function () {
    this.classList.toggle('section-editions__dropdown-btn-active');
    itemsEditions.forEach((item) => {
      item.classList.toggle('section-editions__dropdown-item-open');
    });
  });
  checkboxEditions.forEach(function (checkbox, indexCheckbox) {
    if (checkbox.checked === true) {
      itemsEditions[indexCheckbox].classList.add(
        'section-editions__dropdown-item-active'
      );
    }
    checkbox.addEventListener('change', () => {
      if (checkbox.checked === false) {
        itemsEditions[indexCheckbox].classList.remove(
          'section-editions__dropdown-item-active'
        );
        labelEditions[indexCheckbox].insertAdjacentHTML('afterbegin', '');
      } else
        itemsEditions[indexCheckbox].classList.add(
          'section-editions__dropdown-item-active'
        );
    });
  });
}

// section-editions // slider-img
window.addEventListener(
  'load',
  resizeImg(
    '<=',
    450,
    'section-editions__slide-img',
    'section-editions__preloader'
  )
);
window.addEventListener(
  'resize',
  resizeImg(
    '<=',
    450,
    'section-editions__slide-img',
    'section-editions__preloader'
  )
);

// section-projects

const tooltipeBtns = document.querySelectorAll('.section-projects__tooltipe');
const tooltipeDesc = document.querySelectorAll(
  '.section-projects__tooltipe-desc'
);
const tooltipeClassOpen = 'section-projects__tooltipe-desc-open';
const tooltipeClassClose = 'section-projects__tooltipe-desc-close';

tooltipeBtns.forEach(function (btn, indexBtn) {
  btn.addEventListener('click', function () {
    this.classList.toggle('section-projects__tooltipe-active');
    if (tooltipeDesc[indexBtn].classList.contains(tooltipeClassOpen)) {
      elemHidden(tooltipeDesc[indexBtn], tooltipeClassOpen, tooltipeClassClose);
    } else elemVisible(tooltipeDesc[indexBtn], tooltipeClassOpen, 'block');
  });
});

// section-contacts

// section-contacts // form
const form = document.getElementById('form');
const inputs = document.querySelectorAll('.section-contacts__form-input');
const telId = document.getElementById('phone');
const popupForm = document.getElementById('popup-form');
const popupFormContainer = document.getElementById('popup-form-box');
const descForm = document.querySelector('.section-contacts__popup-desc');
const btnClosePopupForm = document.getElementById('popup-form-close');
const classCloseForm = 'section-contacts__popup-close';

const mask = new Inputmask('+7 (999)-999-99-99');
mask.mask(telId);
new JustValidate('.section-contacts__form', {
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 20,
    },
    tel: {
      required: true,
      // eslint-disable-next-line no-unused-vars
      function: (name, value) => {
        const phone = telId.inputmask.unmaskedvalue();
        return Number(phone) && phone.length === 10;
      },
    },
  },
  colorWrong: '#D11616',

  submitHandler: function (form, values, ajax) {
    ajax({
      url: '/php/post-value.php',
      method: 'POST',
      data: values,
      async: true,
      callback: function () {
        formModal(
          popupForm,
          popupFormContainer,
          btnClosePopupForm,
          descForm,
          'Ваша заявка принята!',
          classCloseForm
        );
      },
      error: function () {
        formModal(
          popupForm,
          popupFormContainer,
          btnClosePopupForm,
          descForm,
          'Ошибка отправки!',
          classCloseForm
        );
      },
    });
  },
});

form.addEventListener('submit', () => {
  inputs.forEach((el) => {
    el.value = '';
  });
});

// section-contacts // map
const containerContacts = document.querySelector('.section-contacts');
const mapPreloader = document.querySelector('.section-contacts__map-preloader');
const map = document.getElementById('map');
let mapInit = 0;
map.style.display = 'none';

function init() {
  function centrMap() {
    if (window.screen.width < 750) {
      return [55.754415494912976, 37.60202488686494];
    } else return [55.75806374129219, 37.60773262764864];
  }
  let myMap = new ymaps.Map('map', {
    center: centrMap(),
    zoom: 15,
  });
  let myPlacemark = new ymaps.Placemark(
    [55.75829564893993, 37.60108849999989],
    {},
    {
      iconLayout: 'default#image',
      iconImageHref: './img/favicon/blanchard.svg',
      iconImageSize: [25, 25],
      iconImageOffset: [-3, -42],
    }
  );
  myMap.geoObjects.add(myPlacemark);
}

window.addEventListener(
  'scroll',
  () => {
    const elementheight = containerContacts.getBoundingClientRect().height;
    const elementPositionBottom =
      containerContacts.getBoundingClientRect().bottom;
    const offsetPosition = elementPositionBottom + elementheight;

    if (window.pageYOffset >= offsetPosition) {
      if (mapInit === 0) {
        ymaps.ready(init);
        mapInit++;
      }
      map.style.display = 'block';
      mapPreloader.style.display = 'none';
    } else {
      map.style.display = 'none';
      mapPreloader.style.display = 'block';
    }
  },
  { passive: true }
);
