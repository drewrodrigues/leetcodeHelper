export function createElement(elementType, props) {
  const $element = document.createElement(elementType);
  $element.classList.add(`leetcode_helper-${props.className}`);
  $element.textContent = props.textContent;
  for (const child of props.children || []) {
    $element.appendChild(child);
  }
  for (const key in props.styles || {}) {
    $element.style[key] = props.styles[key];
  }
  return $element;
}
