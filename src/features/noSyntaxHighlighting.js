import { prefixedName } from "../helpers/prefixedClassName";

let $style = null;

export function disableSyntaxHighlighting() {
  _initStylesheet();
  $style.appendChild(
    document.createTextNode(
      ".monaco-scrollable-element span { color: white !important; opacity: 1 !important; }"
    )
  );
  $style.appendChild(
    document.createTextNode(
      ".CodeMirror-line span { color: white !important; opacity: 1 !important; }"
    )
  );
}

export function enableSyntaxHighlighting() {
  _initStylesheet();
  $style.textContent = "";
}

function _initStylesheet() {
  if ($style) return;
  $style = document.createElement("style");
  $style.id = prefixedName("syntaxHighlight");
  $style.setAttribute("type", "text/css");
  document.head.appendChild($style);
}
