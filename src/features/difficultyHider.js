import { prefixedName } from "../helpers/prefixedClassName";

const EASY_SELECTOR = ".text-difficulty-easy";
const MEDIUM_SELECTOR = ".text-difficulty-medium";
const HARD_SELECTOR = ".text-difficulty-hard";
const DIFFICULTY_SELECTOR = `${EASY_SELECTOR},${MEDIUM_SELECTOR},${HARD_SELECTOR}`;

let $style = null;

export function hideDifficulty() {
  _initStylesheet();
  $style.appendChild(
    document.createTextNode(
      `${DIFFICULTY_SELECTOR} { display: none !important; }`
    )
  );
}

export function showDifficulty() {
  _initStylesheet();
  $style.textContent = "";
}

function _initStylesheet() {
  if ($style) return;
  $style = document.createElement("style");
  $style.id = prefixedName("difficulty");
  $style.setAttribute("type", "text/css");
  document.head.appendChild($style);
}
