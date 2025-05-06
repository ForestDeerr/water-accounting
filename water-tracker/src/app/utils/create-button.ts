import { ButtonType } from "../../types/baseType";

function createButton({
  type,
  text,
  className,
  onClick,
  disabled = false,
}: ButtonType) {
  const button = document.createElement('button');
  button.type = type;
  button.textContent = text;
  button.className = className;
  button.disabled = disabled;
  if (onClick) button.addEventListener('click', onClick);

  return button;
}

export { createButton };