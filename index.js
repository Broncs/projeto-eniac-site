const btnToTop = document.querySelector('.rounded-btn');

window.addEventListener('scroll', () => {
  var y = window.scrollY;

  if (y > 400) {
    btnToTop.classList.add('show-btn');
  } else {
    btnToTop.classList.remove('show-btn');
  }
});
