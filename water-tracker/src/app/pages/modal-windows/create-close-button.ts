function createCloseButton(onClick: () => void): HTMLButtonElement {
  const button = document.createElement('button');
  button.className = 'close-btn';
  button.setAttribute('aria-label', 'Закрыть');

  const line1 = document.createElement('div');
  const line2 = document.createElement('div');
  line1.className = 'close-line';
  line2.className = 'close-line';

  button.appendChild(line1);
  button.appendChild(line2);
  button.addEventListener('click', onClick);

  return button;
}

export { createCloseButton };
