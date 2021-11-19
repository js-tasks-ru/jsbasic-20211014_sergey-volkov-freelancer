import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  ASSETS_URL = '/assets/images/carousel/';
  currentSlideNumber = 0;

  constructor(slides) {
    this.slides = slides;

    this.render();

    this.elem.addEventListener('click', this.buttonClickHandler);
  }

  render() {
    this.elem = createElement(`
      <div class="carousel">
        <div class="carousel__arrow carousel__arrow_right">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </div>
        <div class="carousel__arrow carousel__arrow_left">
          <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
        </div>
        <div class="carousel__inner">
        </div>
      </div>
    `);

    this.initCarousel();
  }

  renderSlide(slide) {
    return createElement(`
      <div class="carousel__slide" data-id="penang-shrimp">
        <img src="${this.getImageUrl(slide)}" class="carousel__img" alt="slide">
        <div class="carousel__caption">
          <span class="carousel__price">${this.getPrice(slide)}</span>
          <div class="carousel__title">${slide.name}</div>
          <button type="button" class="carousel__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
        </div>
      </div>
    `);
  }

  getPrice(slide) {
    return `€${slide.price.toFixed(2)}`;
  }

  getImageUrl(slide) {
    return `${this.ASSETS_URL}${slide.image}`;
  }

  initCarousel() {
    const container = this.elem.querySelector('.carousel__inner');
    const arrowRight = this.elem.querySelector('.carousel__arrow_right');
    const arrowLeft = this.elem.querySelector('.carousel__arrow_left');

    this.slides.forEach(item => {
      const slide = this.renderSlide(item);
      container.append(slide);
    });

    const slidesNumber = container.querySelectorAll('.carousel__slide').length;

    const update = (value = 0) => {
      let offset = value * this.currentSlideNumber;
      container.style.transform = `translateX(${-offset}px)`;

      if (this.currentSlideNumber === slidesNumber - 1) {
        arrowRight.style.display = 'none';
      } else {
        arrowRight.style.display = '';
      }

      if (this.currentSlideNumber === 0) {
        arrowLeft.style.display = 'none';
      } else {
        arrowLeft.style.display = '';
      }
    };

    const rightArrowClickHandler = () => {
      const offset = container.offsetWidth;

      this.currentSlideNumber++;

      update(offset);
    };

    const leftArrowClickHandler = () => {
      const offset = container.offsetWidth;

      this.currentSlideNumber--;

      update(offset);
    };

    arrowRight.addEventListener('click', rightArrowClickHandler);
    arrowLeft.addEventListener('click', leftArrowClickHandler);

    update();
  }

  buttonClickHandler = (evt) => {
    if (evt.target.classList.contains('carousel__button') || evt.target.parentNode.classList.contains('carousel__button')) {
      const currentSlide = this.slides[this.currentSlideNumber];

      const customEvent = new CustomEvent("product-add", {
        detail: this.slides[this.currentSlideNumber].id,
        bubbles: true
      });

      this.elem.dispatchEvent(customEvent);
    }
  }
}
