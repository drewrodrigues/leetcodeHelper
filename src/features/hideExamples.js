import { prefixedName } from "../helpers/prefixedClassName";

let $style = null;

// TODO: can create abstraction now
export function disableExamples() {
  _initStylesheet();
  $style.appendChild(
    document.createTextNode(
      '[data-track-load="description_content"] pre { display: none }'
    )
  );
  $style.appendChild(
    document.createTextNode(
      '[data-track-load="description_content"] img { display: none }'
    )
  );
  $style.appendChild(
    document.createTextNode(
      '[data-track-load="description_content"] .example { display: none }'
    )
  );
}

export function enableExamples() {
  _initStylesheet();
  $style.textContent = "";
}

function _initStylesheet() {
  if ($style) return;
  $style = document.createElement("style");
  $style.id = prefixedName("examples");
  $style.setAttribute("type", "text/css");
  document.head.appendChild($style);
}
