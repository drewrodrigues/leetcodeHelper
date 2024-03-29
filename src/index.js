import { ExploreProgressCardIndicator, RandomButton } from "./elements";
import { initExtensionBar } from "./components/extensionBar";
import { createElement } from "./helpers/createElement";

function main() {
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

// const $completedChallenges = document.querySelectorAll(
//   ".check-mark.completed"
// );
// const $incompleteChallenges = document.querySelectorAll(
//   ".check-mark.incomplete"
// );
// const $allChallenges = document.querySelectorAll(".check-mark");

// const progressPercentage = Math.round(
//   ($completedChallenges.length / $allChallenges.length) * 100
// );

// function clickRandomIncomplete() {
//   $incompleteChallenges[
//     Math.floor(Math.random() * $incompleteChallenges.length) + 1
//   ].click();
// }
// TODO:
// setInterval(() => {
//   const $itemsNeededToLoad = document.querySelectorAll(
//     ".chapter-list-area .chapter-list-item"
//   );
//   if ($itemsNeededToLoad.length === 0) return;
//   const $loadedItems = document.querySelectorAll(".table-header");
//   const excludeOverviewAndDiscuss = 2;

//   /*
//     If a chapter is selected, we just check for the chapter content
//   */
//   const isOverviewSelected =
//     document.querySelector(".chapter-list-item.active .title")?.textContent ===
//     "Overview";

//   const isChapterLoaded = document.querySelector(".chapter-content");

//   if (
//     isOverviewSelected
//       ? $itemsNeededToLoad.length - excludeOverviewAndDiscuss ===
//         $loadedItems.length
//       : isChapterLoaded
//   ) {
//     main();
//   }
// }, 50);

// TODO: change to where we set a mutation observer after we insert and then once there's a change we'll trigger the water
// TODO: re-implement the above in a more sane way

initExtensionBar();
