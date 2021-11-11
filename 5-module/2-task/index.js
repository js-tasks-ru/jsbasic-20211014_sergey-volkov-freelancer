function toggleText() {
  const button = document.querySelector('.toggle-text-button');
  const text = document.querySelector('#text');

  function buttonClickHandler() {
    text.hidden = !text.hidden;
  }

  button.addEventListener('click', buttonClickHandler);
}
