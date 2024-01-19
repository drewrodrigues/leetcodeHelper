import { createElement } from "./helpers/createElement";
import "./styles.css";

export function ExploreProgressCardIndicator(props) {
  const $progressPercentage = createElement("p", {
    classNames: ["progress-text"],
    textContent: `${props.textContent}%`,
  });
  const $progressCount = createElement("p", {
    textContent: `${props.completedChallengeCount} / ${props.challengeCount}`,
    classNames: ["progress-text"],
  });
  const $progressFill = createElement("div", {
    classNames: ["progress-fill"],
    styles: { width: `${props.textContent}%` },
  });

  const $container = createElement("div", {
    classNames: ["container"],
    children: [$progressPercentage, $progressCount, $progressFill],
  });

  return $container;
}

export function RandomButton(props) {
  const $button = createElement("button", {
    classNames: ["random-button"],
    textContent: "Pick Random Incomplete",
    onClick: props.onClick,
  });
  $button.textContent = "Pick Random Incomplete";

  return $button;
}
