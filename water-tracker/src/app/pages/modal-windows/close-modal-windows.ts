function closeModal(modalOverlay: HTMLElement) {
  document.body.style.overflow = '';
  document.body.removeChild(modalOverlay);
}

export { closeModal };
