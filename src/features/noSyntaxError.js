import { prefixedName } from "../helpers/prefixedClassName";

let $style = null;

export function disableSyntaxErrors() {
  _initStylesheet();
  $style.appendChild(
    document.createTextNode(".squiggly-error { display: none !important; }")
  );
}

export function enableSyntaxErrors() {
  _initStylesheet();
  $style.textContent = "";
}

function _initStylesheet() {
  if ($style) return;
  $style = document.createElement("style");
  $style.id = prefixedName("syntaxError");
  $style.setAttribute("type", "text/css");
  document.head.appendChild($style);
}
