function createHeader(): HTMLElement {
  const container = document.createElement('header');
  container.className = 'header-container';

  const textHeader = document.createElement('h1');
  textHeader.textContent = 'Water tracker';

  container.appendChild(textHeader);

  return container;
}

export { createHeader };
