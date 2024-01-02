// TODO: UGLY, refactor this
export function ExploreProgressCardIndicator(props) {
  const $container = document.createElement("div");
  $container.style.display = "flex";
  $container.style.justifyContent = "space-between";
  $container.style.background = "#E6E6E6";
  $container.style.padding = "5px 10px";
  $container.style.position = "relative";
  $container.style.borderRadius = "10px";
  $container.style.overflow = "hidden";
  $container.style.marginBottom = "20px";

  const $progressPercentage = document.createElement("p");
  $progressPercentage.textContent = `${props.textContent}%`;
  $progressPercentage.style.position = "relative";
  $progressPercentage.style.zIndex = 1;
  $progressPercentage.style.margin = 0; // TODO: add reset
  $progressPercentage.style.color = "white"; // TODO: add reset
  $progressPercentage.style.textShadow = "0 4px 20px rgba(0, 0, 0, 0.3)"; // TODO: add reset
  $container.appendChild($progressPercentage);

  const $progressCount = document.createElement("p");
  $progressCount.textContent = `${props.completedChallengeCount} / ${props.challengeCount}`;
  $progressCount.style.position = "relative";
  $progressCount.style.zIndex = 1;
  $progressCount.style.margin = 0; // TODO: add reset
  $progressCount.style.color = "white"; // TODO: add reset
  $progressCount.style.textShadow = "0 4px 20px rgba(0, 0, 0, 0.3)"; // TODO: add reset
  $container.appendChild($progressCount);

  const $progressFill = document.createElement("div");
  $progressFill.style.position = "absolute";
  $progressFill.style.width = `${props.textContent}%`;
  $progressFill.style.height = "100%";
  $progressFill.style.top = 0;
  $progressFill.style.left = 0;
  $progressFill.style.bottom = 0;
  $progressFill.style.background = "linear-gradient(#DBEB50, #79B332)";
  $progressFill.style.zIndex = 0;
  $container.appendChild($progressFill);

  return $container;
}

export function SelectRandomButton(props) {
  const $button = document.createElement("button");
  $button.textContent = "Pick Random Incomplete";
  $button.style.padding = "5px 10px";
  $button.style.marginBottom = "20px";
  $button.style.borderRadius = "10px";
  $button.style.background = "linear-gradient(to top, #ff8200, #ffb800)";
  $button.style.textShadow = "0 4px 20px rgba(0, 0, 0, 0.3)"; // TODO: add reset
  $button.style.color = "white";
  $button.style.boxShadow = "0 5px 5px rgba(0,0,0,0.25)";
  $button.style.boxShadow = "0 5px 5px rgba(0,0,0,0.25)";

  $button.addEventListener("click", props.onClick);

  return $button;
}
