import { StyleHandler } from "../helpers/styleHandler";

const hideExamples = new StyleHandler([
  '[data-track-load="description_content"] pre { display: none }',
  '[data-track-load="description_content"] img { display: none }',
  '[data-track-load="description_content"] .example { display: none }',
]);
export default hideExamples;
