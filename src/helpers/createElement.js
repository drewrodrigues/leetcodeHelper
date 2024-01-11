export function createElement(elementType, props = {}) {
  const $element = document.createElement(elementType);
  if (props.classNames) {
    for (const className of props.classNames) {
      if (!className) continue;
      $element.classList.add(`leetcode_helper-${className}`);
    }
  }
  $element.textContent = props.textContent;
  for (const child of props.children || []) {
    $element.appendChild(child);
  }
  for (const key in props.styles || {}) {
    $element.style[key] = props.styles[key];
  }
  if (props.onClick) $element.addEventListener("click", props.onClick);
  return $element;
}
