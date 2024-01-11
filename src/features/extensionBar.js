import { prefixedName } from "../helpers/prefixedClassName";
import { hideDifficulty, showDifficulty } from "./difficultyHider";
import { disableSyntaxErrors, enableSyntaxErrors } from "./noSyntaxError";
import {
  disableSyntaxHighlighting,
  enableSyntaxHighlighting,
} from "./noSyntaxHighlighting";

const { createElement } = require("../helpers/createElement");

export function initExtensionBar() {
  const $hideDifficulty = Feature({
    label: "Hide Difficulty",
    onClick: (toggled) => {
      console.log({ toggled });
      if (toggled) hideDifficulty();
      else showDifficulty();
    },
  });

  const $hideSyntaxHighlighting = Feature({
    label: "Disable Syntax Highlighting",
    onClick: (toggled) => {
      if (toggled) disableSyntaxHighlighting();
      else enableSyntaxHighlighting();
    },
  });

  const $disableSyntaxErrors = Feature({
    label: "Disable Syntax Errors",
    onClick: (toggled) => {
      if (toggled) disableSyntaxErrors();
      else enableSyntaxErrors();
    },
  });

  const $header = createElement("header", {
    children: [$hideDifficulty, $hideSyntaxHighlighting, $disableSyntaxErrors],
    className: "bar",
  });

  document.body.insertAdjacentElement("afterbegin", $header);
}

let featureState = {};
function Feature({ onClick, label }) {
  featureState[label] = featureState[label] || false;

  const $label = createElement("label", {
    textContent: label,
    className: "feature-label",
  });
  const $toggle = createElement("button", {
    textContent: "",
    className: "feature-toggle",
  });

  const $featureContainer = createElement("div", {
    children: [$toggle, $label],
    className: "feature-container",
    onClick: () => {
      featureState[label] = !featureState[label];
      $toggle.classList.toggle(prefixedName("feature-toggle--on"));
      onClick(featureState[label]);
    },
  });

  return $featureContainer;
}
