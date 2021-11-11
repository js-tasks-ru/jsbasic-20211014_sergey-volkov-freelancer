function initCarousel() {
  const carousel = document.querySelector('.carousel');
  const viewport = carousel.querySelector('.carousel__inner');
  const arrowRight = carousel.querySelector('.carousel__arrow_right');
  const arrowLeft = carousel.querySelector('.carousel__arrow_left');

  const viewportWidth = viewport.offsetWidth;
  const slidesNumber = viewport.querySelectorAll('.carousel__slide').length;

  let position = 0;

  function increasePosition() {
    position += viewportWidth;
  }

  function decreasePostion() {
    position -= viewportWidth;
  }

  function updateArrows() {
    if (position === 0) {
      arrowLeft.style.display = 'none';
    } else {
      arrowLeft.style.display = '';
    }

    if (position >= viewportWidth * (slidesNumber - 1)) {
      arrowRight.style.display = 'none';
    } else {
      arrowRight.style.display = '';
    }
  }

  function updateViewport() {
    viewport.style.transform = `translateX(-${position}px)`;
  }

  function rightArrowClickHandler() {
    increasePosition();
    updateViewport();
    updateArrows();
  }

  function leftArrowClickHandler() {
    decreasePostion();
    updateViewport();
    updateArrows();
  }

  arrowRight.addEventListener('click', rightArrowClickHandler);
  arrowLeft.addEventListener('click', leftArrowClickHandler);

  updateArrows();
}
