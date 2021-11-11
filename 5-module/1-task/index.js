function hideSelf() {
  const button = document.querySelector('.hide-self-button');

  function buttonClickHandler() {
    this.hidden = true;
  }

  button.addEventListener('click', buttonClickHandler);
}
