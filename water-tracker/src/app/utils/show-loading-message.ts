function showLoadingMessage() {
  const message = document.createElement('div');
  message.className = 'loading-message';
  message.textContent = 'Загрузка данных...';
  document.body.appendChild(message);
  return message;
}

export { showLoadingMessage };
