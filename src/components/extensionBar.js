import { RandomButton } from "../elements";
import difficultyHider from "../features/difficultyHider";
import hideExamples from "../features/hideExamples";
import hideSyntaxErrors from "../features/noSyntaxError";
import disableSyntaxHighlighting from "../features/noSyntaxHighlighting";
import { createElement } from "../helpers/createElement";
import { prefixedName } from "../helpers/prefixedClassName";
import {
  STORAGE_KEYS,
  getStorageValue,
  setStorageValue,
} from "../helpers/storage";

// ? maybe we pull this into a extension pop out to keep vertical space
export async function initExtensionBar() {
  const $hideDifficulty = await Feature({
    dataKey: STORAGE_KEYS.HIDE_DIFFICULTY,
    label: "Hide Difficulty",
    onClick: (toggled) => {
      if (toggled) difficultyHider.on();
      else difficultyHider.off();
    },
  });

  const $hideSyntaxHighlighting = await Feature({
    dataKey: STORAGE_KEYS.DISABLE_SYNTAX_HIGHLIGHTING,
    label: "Disable Syntax Highlighting",
    onClick: (toggled) => {
      if (toggled) disableSyntaxHighlighting.on();
      else disableSyntaxHighlighting.off();
    },
  });

  const $disableSyntaxErrors = await Feature({
    dataKey: STORAGE_KEYS.DISABLE_SYNTAX_ERRORS,
    label: "Hide Syntax Errors",
    onClick: (toggled) => {
      if (toggled) hideSyntaxErrors.on();
      else hideSyntaxErrors.off();
    },
  });

  const $disableExamples = await Feature({
    dataKey: STORAGE_KEYS.DISABLE_EXAMPLES,
    label: "Hide Examples",
    onClick: (toggled) => {
      if (toggled) hideExamples.on();
      else hideExamples.off();
    },
  });

  const $leftContainer = createElement("div", {
    children: [
      $hideDifficulty,
      $hideSyntaxHighlighting,
      $disableSyntaxErrors,
      // $disableExamples,
    ],
    classNames: ["features"],
  });
  // TODO: implement
  // const $rightContainer = createElement("aside", {
  //   children: [RandomButton({})],
  // });

  const $header = createElement("header", {
    children: [$leftContainer],
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
