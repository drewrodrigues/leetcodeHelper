import { prefixedName } from "../helpers/prefixedClassName";
import {
  STORAGE_KEYS,
  getStorageValue,
  setStorageValue,
} from "../helpers/storage";
import { hideDifficulty, showDifficulty } from "./difficultyHider";
import { disableExamples, enableExamples } from "./hideExamples";
import { disableSyntaxErrors, enableSyntaxErrors } from "./noSyntaxError";
import {
  disableSyntaxHighlighting,
  enableSyntaxHighlighting,
} from "./noSyntaxHighlighting";

const { createElement } = require("../helpers/createElement");

export async function initExtensionBar() {
  const $hideDifficulty = await Feature({
    dataKey: STORAGE_KEYS.HIDE_DIFFICULTY,
    label: "Hide Difficulty",
    onClick: (toggled) => {
      if (toggled) hideDifficulty();
      else showDifficulty();
    },
  });

  const $hideSyntaxHighlighting = await Feature({
    dataKey: STORAGE_KEYS.DISABLE_SYNTAX_HIGHLIGHTING,
    label: "Disable Syntax Highlighting",
    onClick: (toggled) => {
      if (toggled) disableSyntaxHighlighting();
      else enableSyntaxHighlighting();
    },
  });

  const $disableSyntaxErrors = await Feature({
    dataKey: STORAGE_KEYS.DISABLE_SYNTAX_ERRORS,
    label: "Disable Syntax Errors",
    onClick: (toggled) => {
      if (toggled) disableSyntaxErrors();
      else enableSyntaxErrors();
    },
  });

  const $disableExamples = await Feature({
    dataKey: STORAGE_KEYS.DISABLE_EXAMPLES,
    label: "Disable Examples",
    onClick: (toggled) => {
      if (toggled) disableExamples();
      else enableExamples();
    },
  });

  const $header = createElement("header", {
    children: [
      $hideDifficulty,
      $hideSyntaxHighlighting,
      $disableSyntaxErrors,
      $disableExamples,
    ],
    classNames: ["bar"],
  });

  document.body.insertAdjacentElement("afterbegin", $header);
}

async function Feature({ onClick, label, dataKey }) {
  let featureToggled = await getStorageValue(dataKey);

  onClick(featureToggled);

  const $label = createElement("label", {
    textContent: label,
    classNames: ["feature-label"],
  });
  const $toggle = createElement("button", {
    textContent: "",
    classNames: ["feature-toggle", featureToggled && "feature-toggle--on"],
  });

  const $featureContainer = createElement("div", {
    children: [$toggle, $label],
    classNames: ["feature-container"],
    onClick: () => {
      featureToggled = !featureToggled;
      setStorageValue(dataKey, featureToggled);
      $toggle.classList.toggle(prefixedName("feature-toggle--on"));
      onClick(featureToggled);
    },
  });

  return $featureContainer;
}
