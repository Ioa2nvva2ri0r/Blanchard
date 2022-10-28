/* eslint-disable no-unused-vars */
// content-gallery
const titleObjGallery = [
  '“Торс”',
  '“Супрематическая композиция”',
  '“Женщина с граблями”',
  '“Женщина с ведрами”',
  '“Уборка ржи”',
  '“Супрематизм”',
  '“Крестьянин в поле”',
  '“Крестьянин в поле”',
  '“Два крестьянина на фоне полей”',
  '“Supremus №58, желтое и черное”',
  '“Супрематизм”',
  '“Девушки в поле”',
  '“Супрематическая композиция”',
  '“Супрематизм”',
  '“Уборка ржи”',
  '“Супрематизм”',
  '“Уборка ржи”',
  '“Два крестьянина на фоне полей”',
  '“Два крестьянина на фоне полей”',
  '“Супрематическая композиция”',
  '“Девушки в поле”',
  '“Супрематизм”',
  '“Девушки в поле”',
  '“Два крестьянина на фоне полей”',
];
let arrayObjGallery = [];

titleObjGallery.forEach((title) => {
  arrayObjGallery.push({
    title: 'Казимир Малевич',
    subtitle: title,
    date: '1931-1932',
    desc: 'Картина из второй серии крестьянского цикла работ Казимира Малевича. Художник принялся за её создание в 1930-1931 годах, после того, как первый цикл был утерян после Берлинской и Варшавской выставок в 1927 году.',
  });
});

// content-catalog
const tittleTabCatalog = [
  'Бенедетто ди Биндо',
  'Бергоньоне, Амброджо',
  'Биссоло, Франческо',
  'Больтраффио, Джованни',
  'Бонсиньори, Франческо',
  'Боттичини, Рафаэлло',
  'Брамантино',
  'Бреа, Людовико',
  "Бьяджо д'Антонио Туччи",
  'Веккьетта',
  'Андреа Верроккьо',
  'Доменико Гирландайо',
  'Беноццо Гоццоли',
  'Граначчи, Франческо',
  'Грегорио ди Чекко',
  'Джованни да Удине',
  'Джованни ди Паоло',
  'Джорджоне',
  'Парентино, Бернардо',
  'Пезеллино',
  'Пьетро Перуджино',
  'Перуцци, Бальдассаре',
  'Пизанелло',
  'Пинтуриккьо',
];
let arrayObjCatalog = [];

tittleTabCatalog.forEach((title) => {
  arrayObjCatalog.push({
    title: title,
    subtitle: '2 июня 1448 — 11 января 1494.',
    desc: 'Один из ведущих флорентийских художников Кватроченто, основатель художественной династии, которую продолжили его брат Давид и сын Ридольфо. Глава художественной мастерской, где юный Микеланджело в течение года овладевал профессиональными навыками.Автор фресковых циклов, в которых выпукло, со всевозможными подробностями показана домашняя жизнь библейских персонажей (в их роли выступают знатные граждане Флоренции в костюмах того времени)',
  });
});

const copyArrayObjCatalog = [
  arrayObjCatalog[1],
  arrayObjCatalog[2],
  arrayObjCatalog[3],
];

const accordionContent = [
  {
    titleDropdownAccordion: 'C 1400 по 1499 гг.',
    contentTab: arrayObjCatalog,
    pathPicture: 'img/desktop/catalog/',
  },
  {
    titleDropdownAccordion: 'C 1500 по 1599 гг.',
    contentTab: copyArrayObjCatalog,
    pathPicture: 'img/desktop/catalog/',
  },
  {
    titleDropdownAccordion: 'C 1600 по 1699 гг.',
    contentTab: copyArrayObjCatalog,
    pathPicture: 'img/desktop/catalog/',
  },
  {
    titleDropdownAccordion: 'C 1700 по 1799 гг.',
    contentTab: copyArrayObjCatalog,
    pathPicture: 'img/desktop/catalog/',
  },
  {
    titleDropdownAccordion: 'C 1800 по 1899 гг.',
    contentTab: copyArrayObjCatalog,
    pathPicture: 'img/desktop/catalog/',
  },
  {
    titleDropdownAccordion: 'C 1900 по 1999 гг.',
    contentTab: copyArrayObjCatalog,
    pathPicture: 'img/desktop/catalog/',
  },
  {
    titleDropdownAccordion: 'C 2000 г.',
    contentTab: copyArrayObjCatalog,
    pathPicture: 'img/desktop/catalog/',
  },
];
