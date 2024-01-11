import { ExploreProgressCardIndicator, RandomButton } from "./elements";
import { initExtensionBar } from "./features/extensionBar";
import { createElement } from "./helpers/createElement";

let lastKnownCounts = {
  completedChallenges: null,
  incompleteChallenges: null,
  allChallenges: null,
};

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

  if (
    lastKnownCounts.completedChallenges === $completedChallenges.length &&
    lastKnownCounts.incompleteChallenges === $incompleteChallenges.length &&
    lastKnownCounts.allChallenges === $allChallenges.length
  ) {
    return;
  }
  lastKnownCounts = {
    completedChallenges: $completedChallenges.length,
    incompleteChallenges: $incompleteChallenges.length,
    allChallenges: $allChallenges.length,
  };

  // if the elements are there, remove them so we can re-insert them with updates
  const $extension = document.querySelector(".leetcode_helper-extension");
  if ($extension) $extension.remove();
  const $extensionContainer = createElement("section", {
    classNames: ["extension"],
    children: [
      ExploreProgressCardIndicator({
        textContent: progressPercentage,
        challengeCount: $allChallenges.length,
        completedChallengeCount: $completedChallenges.length,
      }),
      RandomButton({ onClick: clickRandomIncomplete }),
    ],
  });
  const $insertionContainer = document.querySelector(".intro-area");

  $insertionContainer.prepend($extensionContainer);
}

setInterval(() => {
  const $itemsNeededToLoad = document.querySelectorAll(
    ".chapter-list-area .chapter-list-item"
  );
  if ($itemsNeededToLoad.length === 0) return;
  const $loadedItems = document.querySelectorAll(".table-header");
  const excludeOverviewAndDiscuss = 2;

  /*
    If a chapter is selected, we just check for the chapter content
  */
  const isOverviewSelected =
    document.querySelector(".chapter-list-item.active .title")?.textContent ===
    "Overview";

  const isChapterLoaded = document.querySelector(".chapter-content");

  if (
    isOverviewSelected
      ? $itemsNeededToLoad.length - excludeOverviewAndDiscuss ===
        $loadedItems.length
      : isChapterLoaded
  ) {
    main();
  }
}, 50);

// TODO: change to where we set a mutation observer after we insert and then once there's a change we'll trigger the water

console.log("inserted index.js");
initExtensionBar();
