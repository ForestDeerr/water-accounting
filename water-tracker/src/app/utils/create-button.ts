import { ButtonType } from '../../types/baseType';

function createButton({
  type,
  text,
  className,
  onClick,
  disabled = false,
  iconSvg,
  iconClass,
}: ButtonType) {
  const button = document.createElement('button');
  button.type = type;
  if (text) {
    button.textContent = text;
  }
  button.className = className;
  button.disabled = disabled;
  if (onClick) button.addEventListener('click', onClick);

  if (iconSvg) {
    const iconWrapper = document.createElement('span');
    iconWrapper.innerHTML = iconSvg.trim();
    if (iconClass) iconWrapper.className = iconClass;
    button.appendChild(iconWrapper);
  }

  return button;
}

export { createButton };
