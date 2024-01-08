const EASY_SELECTOR = ".text-difficulty-easy";
const MEDIUM_SELECTOR = ".text-difficulty-medium";
const HARD_SELECTOR = ".text-difficulty-hard";
const DIFFICULTY_SELECTOR = `${EASY_SELECTOR},${MEDIUM_SELECTOR},${HARD_SELECTOR}`;

console.log("Hiding difficulty");
// document.querySelector(DIFFICULTY_SELECTOR).style.display = "none";

const style = document.createElement("style");
style.setAttribute("type", "text/css");
style.appendChild(
  document.createTextNode(
    `${DIFFICULTY_SELECTOR} { display: none !important; }`
  )
);
style.appendChild(
  document.createTextNode(
    ".monaco-scrollable-element span { color: white !important; opacity: 1 !important; }"
  )
);
style.appendChild(
  document.createTextNode(".squiggly-error { display: none !important; }")
);
document.head.appendChild(style);
