import { createElement } from "./helpers/createElement";
import "./styles.css";

export function ExploreProgressCardIndicator(props) {
  const $progressPercentage = createElement("p", {
    className: "progress-text",
    textContent: `${props.textContent}%`,
  });
  const $progressCount = createElement("p", {
    textContent: `${props.completedChallengeCount} / ${props.challengeCount}`,
    className: "progress-text",
  });
  const $progressFill = createElement("div", {
    className: "progress-fill",
    styles: { width: `${props.textContent}%` },
  });

  const $container = createElement("div", {
    className: "container",
    children: [$progressPercentage, $progressCount, $progressFill],
  });

  return $container;
}

export function RandomButton(props) {
  const $button = createElement("button", {
    className: 'random-button',
    textContent: "Pick Random Incomplete",
    onClick: props.onClick
  });
  $button.textContent = "Pick Random Incomplete";

  return $button;
}
