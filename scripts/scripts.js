// Food gallery more button
const moreBtn = document.getElementsByClassName('food-gallery__btn')[0];
const hiddenImgs = [...document.querySelectorAll('.food-gallery__img--hidden')];
hiddenImgs.forEach((img) => (img.style.display = 'none'));

moreBtn.addEventListener('click', () => {
  moreBtn.innerHTML === 'More'
    ? (moreBtn.innerHTML = 'Less')
    : (moreBtn.innerHTML = 'More');
  hiddenImgs[0].style.display === 'none'
    ? hiddenImgs.map((img) => (img.style.display = 'block'))
    : hiddenImgs.map((img) => (img.style.display = 'none'));
});
