document.addEventListener('DOMContentLoaded', function () {
  // console.log(document.querySelectorAll('.how-we-work__step'))
  document.querySelectorAll('.tabs__contant__container').forEach(function (tabsBtn) {
    // console.log(tabsBtn)
    tabsBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path;

      document.querySelectorAll('.tabs__discription').forEach(function (tabContent) {
        tabContent.classList.remove('tabs__discription-active');
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('tabs__discription-active');
    });
  });
});