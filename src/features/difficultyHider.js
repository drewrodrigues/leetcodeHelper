import { StyleHandler } from "../helpers/styleHandler";

const EASY_SELECTOR = ".text-difficulty-easy";
const MEDIUM_SELECTOR = ".text-difficulty-medium";
const HARD_SELECTOR = ".text-difficulty-hard";
const DIFFICULTY_SELECTOR = `${EASY_SELECTOR},${MEDIUM_SELECTOR},${HARD_SELECTOR}`;

const difficultyHider = new StyleHandler([
  `${DIFFICULTY_SELECTOR} { display: none !important; }`,
]);
export default difficultyHider;
