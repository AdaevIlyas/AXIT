document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.tabs__contant__container').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path;

      document.querySelectorAll('.tabs__discription').forEach(function (tabContent) {
        tabContent.classList.remove('tabs__discription-active');
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('tabs__discription-active');
    });
  });
});

// card 1
document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#one').addEventListener('click', function () {
    document.querySelector('#one-info').classList.toggle('pricing__options__card__item-active');
    document.querySelector('#two-info').classList.remove('pricing__options__card__item-active');
    document.querySelector('#three-info').classList.remove('pricing__options__card__item-active');
  });
});

// card 2
document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#two').addEventListener('click', function () {
    document.querySelector('#two-info').classList.toggle('pricing__options__card__item-active');
    document.querySelector('#one-info').classList.remove('pricing__options__card__item-active');
    document.querySelector('#three-info').classList.remove('pricing__options__card__item-active');
  });
});

// card 3
document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#three').addEventListener('click', function () {
    document.querySelector('#three-info').classList.toggle('pricing__options__card__item-active');
    document.querySelector('#two-info').classList.remove('pricing__options__card__item-active');
    document.querySelector('#one-info').classList.remove('pricing__options__card__item-active');
  });
});