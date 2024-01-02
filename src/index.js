import { ExploreProgressCardIndicator, SelectRandomButton } from "./elements";

function main() {
  const $completedChallenges = document.querySelectorAll(
    ".check-mark.completed"
  );
  const $incompleteChallenges = document.querySelectorAll(
    ".check-mark.incomplete"
  );
  const $allChallenges = document.querySelectorAll(".check-mark");

  const progressPercentage = Math.round(
    ($completedChallenges.length / $allChallenges.length) * 100
  );

  function clickRandomIncomplete() {
    $incompleteChallenges[
      Math.floor(Math.random() * $incompleteChallenges.length) + 1
    ].click();
  }

  const $insertionContainer = document.querySelector(".card-intro-base");
  $insertionContainer.prepend(
    SelectRandomButton({ onClick: clickRandomIncomplete })
  );
  $insertionContainer.prepend(
    ExploreProgressCardIndicator({
      textContent: progressPercentage,
      challengeCount: $allChallenges.length,
      completedChallengeCount: $completedChallenges.length,
    })
  );
}

const startInterval = setInterval(() => {
  // TODO: change this logic to account for a sidebar topic being selected

  console.log("trying to attach");
  const $itemsNeededToLoad = document.querySelectorAll(
    ".chapter-list-area .chapter-list-item"
  );
  if ($itemsNeededToLoad.length === 0) return;
  const $loadedItems = document.querySelectorAll(".table-header");
  const excludeOverviewAndDiscuss = 2;

  if (
    $itemsNeededToLoad.length - excludeOverviewAndDiscuss ===
    $loadedItems.length
  ) {
    clearInterval(startInterval);
    main();

    // FIXME: this doesn't work -- look into
    // if navigating away, we'll start the interval again. Might need to poll
    window.addEventListener("beforeunload", () => setInterval(startInterval));
  }
}, 50);
