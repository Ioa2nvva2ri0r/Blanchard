/* eslint-disable no-unused-vars */
function accordionDropdownLink(tabObj, accordionObj, arrayObjContent) {
  // tab
  const tab = tabObj.element;
  // tab // add-class
  tab.classList.add(tabObj.classes.tab);

  // accordion
  const accordion = accordionObj.element;
  // accordion // add-class
  accordion.classList.add(accordionObj.classes.accordion);

  function removeClass(arrayElem, removeClass) {
    arrayElem.forEach((el) => {
      el.classList.remove(removeClass);
    });
  }

  // event
  arrayObjContent.forEach(function (objContent, index) {
    // accordion // create-elem
    const containerDropdown = document.createElement('div');
    const dropdownBtn = document.createElement('button');
    const dropdownTitle = document.createElement('div');
    const dropdownList = document.createElement('ul');
    // accordion // add-class
    dropdownBtn.classList.add(accordionObj.classes.btnDropdown.main);
    dropdownTitle.classList.add(accordionObj.classes.titleDropdown);
    dropdownList.classList.add(accordionObj.classes.listDropdown.main);
    // accordion // add-content
    dropdownTitle.textContent = objContent.titleDropdownAccordion;
    dropdownBtn.setAttribute('data-dropdown-btn', `${index + 1}`);
    dropdownList.setAttribute('data-dropdown', `${index + 1}`);
    if (
      dropdownList.getAttribute('data-dropdown') === '1' &&
      dropdownBtn.getAttribute('data-dropdown-btn') === '1'
    ) {
      dropdownBtn.classList.add(accordionObj.classes.btnDropdown.active);
      dropdownList.classList.add(accordionObj.classes.listDropdown.open);
    }
    // accordion // event
    dropdownBtn.addEventListener('click', function () {
      if (
        dropdownList.classList.contains(accordionObj.classes.listDropdown.open)
      ) {
        dropdownList.classList.remove(accordionObj.classes.listDropdown.open);
        this.classList.remove(accordionObj.classes.btnDropdown.active);
      } else {
        removeClass(
          document.querySelectorAll('[data-dropdown]'),
          accordionObj.classes.listDropdown.open
        );
        removeClass(
          document.querySelectorAll('[data-dropdown-btn]'),
          accordionObj.classes.btnDropdown.active
        );
        this.classList.add(accordionObj.classes.btnDropdown.active);
        dropdownList.classList.add(accordionObj.classes.listDropdown.open);
      }
    });

    objContent.contentTab.forEach((obj) => {
      // tab // create-elem
      const containerTab = document.createElement('div');
      const pictureTab = document.createElement('picture');
      const sourceTab = document.createElement('source');
      const imgTab = document.createElement('img');
      const titleTab = document.createElement('h3');
      const subtitleTab = document.createElement('h4');
      const descTab = document.createElement('p');
      // tab // add-class
      containerTab.classList.add(tabObj.classes.container.main);
      sourceTab.classList.add(tabObj.classes.img);
      imgTab.classList.add(tabObj.classes.img);
      titleTab.classList.add(tabObj.classes.title);
      subtitleTab.classList.add(tabObj.classes.subtitle);
      descTab.classList.add(tabObj.classes.desc);
      // tab // add-content
      containerTab.setAttribute('data-target', `${obj.title}`);
      titleTab.textContent = obj.title;
      subtitleTab.textContent = obj.subtitle;
      descTab.textContent = obj.desc;
      imgTab.alt = 'Каталог-Изображение';
      if (
        containerTab.getAttribute('data-target') ===
        accordionObj.activeLinkDropdown
      ) {
        containerTab.classList.add(tabObj.classes.container.active);
        sourceTab.srcset = `${objContent.pathPicture}12.webp`;
        imgTab.src = `${objContent.pathPicture}12.webp`;
      } else {
        sourceTab.srcset = `${objContent.pathPicture}1.webp`;
        imgTab.src = `${objContent.pathPicture}1.webp`;
      }
      // tab // add-DOM
      tab.append(containerTab);
      containerTab.append(pictureTab, titleTab, subtitleTab, descTab);
      pictureTab.append(sourceTab, imgTab);

      // accordion // create-elem
      const dropdownItem = document.createElement('li');
      const dropdownlink = document.createElement('button');
      // accordion // add-class
      dropdownItem.classList.add(accordionObj.classes.itemDropdown);
      dropdownlink.classList.add(accordionObj.classes.linkDropdown.main);
      dropdownlink.classList.add('us-link');
      // accordion // add-content
      dropdownlink.textContent = obj.title;
      dropdownlink.setAttribute('data-tabId', tabObj.element.id);
      dropdownlink.setAttribute('data-path', obj.title);
      if (
        dropdownlink.getAttribute('data-path') ===
        accordionObj.activeLinkDropdown
      ) {
        dropdownlink.classList.add(accordionObj.classes.linkDropdown.active);
      }
      // accordion // event
      dropdownlink.addEventListener('click', function () {
        removeClass(
          document.querySelectorAll('[data-path]'),
          accordionObj.classes.linkDropdown.active
        );
        removeClass(
          document.querySelectorAll('[data-target]'),
          tabObj.classes.container.active
        );
        this.classList.add(accordionObj.classes.linkDropdown.active);
        document
          .querySelector(`[data-target="${obj.title}"]`)
          .classList.add(tabObj.classes.container.active);
        const scrollTarget = document.getElementById(
          dropdownlink.getAttribute('data-tabId')
        );
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - 50;
        window.scrollBy({
          top: offsetPosition,
          behavior: 'smooth',
        });
      });
      // accordion // add-DOM
      dropdownList.append(dropdownItem);
      dropdownItem.append(dropdownlink);
    });
    // accordion // add-DOM
    accordion.append(containerDropdown);
    containerDropdown.append(dropdownBtn, dropdownList);
    dropdownBtn.append(dropdownTitle);
    dropdownBtn.insertAdjacentHTML(
      'beforeend',
      '<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M50 25C50 38.8071 38.8071 50 25 50C11.1929 50 0 38.8071 0 25C0 11.1929 11.1929 0 25 0C38.8071 0 50 11.1929 50 25Z" fill="#ECECEC"/><path d="M50 25C50 38.8071 38.8071 50 25 50C11.1929 50 0 38.8071 0 25C0 11.1929 11.1929 0 25 0C38.8071 0 50 11.1929 50 25Z" stroke="#ECECEC"/><path d="M33.3333 23.3333L25 31.6667L16.6667 23.3333" stroke="black"/></svg>'
    );
  });
}
