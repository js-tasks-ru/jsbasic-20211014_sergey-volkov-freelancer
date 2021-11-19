import createElement from '../../assets/lib/create-element.js';
export default class ProductCard {
  ASSETS_URL = '/assets/images/products/';

  constructor(product) {
    this.product = product;

    this.render();

    const button = this.elem.querySelector('.card__button');
    button.addEventListener('click', this.buttonClickHandler);
  }

  render() {
    this.elem = createElement(`
      <div class="card">
        <div class="card__top">
            <img src="${this.getImageUrl()}" class="card__image" alt="product">
            <span class="card__price">${this.getPrice()}</span>
        </div>
        <div class="card__body">
            <div class="card__title">${this.product.name}</div>
            <button type="button" class="card__button">
                <img src="/assets/images/icons/plus-icon.svg" alt="icon">
            </button>
        </div>
      </div>
    `);
  }

  getPrice() {
    return `€${this.product.price.toFixed(2)}`;
  }

  getImageUrl() {
    return `${this.ASSETS_URL}${this.product.image}`;
  }

  buttonClickHandler = () => {
    const customEvent = new CustomEvent("product-add", {
      detail: this.product.id,
      bubbles: true
    });

    this.elem.dispatchEvent(customEvent);
  }
}
