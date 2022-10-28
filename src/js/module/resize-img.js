/* eslint-disable no-constant-condition */
/* eslint-disable no-unused-vars */
function resizeImg(sumbol, screenWidth, imagesClass, preloaderClass) {
  if (`${window.screen.width} ${sumbol} ${screenWidth}`) {
    const sourse = document.querySelectorAll(`.${imagesClass}[data-srcset]`);
    const img = document.querySelectorAll(`.${imagesClass}[data-src]`);
    const preloader = document.querySelectorAll(`.${preloaderClass}`);

    preloader.forEach((el) => {
      el.style.display = 'none';
    });
    sourse.forEach((el) => {
      el.srcset = el.getAttribute('data-srcset');
    });
    img.forEach((el) => {
      el.src = el.getAttribute('data-src');
    });
  }
}
