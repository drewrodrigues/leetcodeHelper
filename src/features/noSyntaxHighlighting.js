import { StyleHandler } from "../helpers/styleHandler";

const PROBLEMS_CODE_EDITOR_LINE = ".monaco-scrollable-element span";
const PROBLEMS_CODE_EDITOR_COMMENT = ".monaco-scrollable-element span.mtk3";

// -----------------------------------------------------------------------------
// Problems Page Code Editor (Light)
// -----------------------------------------------------------------------------
const PROBLEMS_CODE_EDITOR_LINE__LIGHT = `${PROBLEMS_CODE_EDITOR_LINE} { color: black !important; opacity: 1 !important; }`;
const PROBLEMS_CODE_EDITOR_COMMENT__LIGHT = `${PROBLEMS_CODE_EDITOR_COMMENT} { opacity: 0.35 !important; }`;

// -----------------------------------------------------------------------------
// Problems Page Code Editor (Dark)
// -----------------------------------------------------------------------------
const VS_CODE_DARK_SELECTOR = ".vs-dark";
const PROBLEMS_CODE_EDITOR_LINE__DARK = `${VS_CODE_DARK_SELECTOR} ${PROBLEMS_CODE_EDITOR_LINE} { color: white !important; opacity: 1 !important; }`;
const PROBLEMS_CODE_EDITOR_COMMENT__DARK = `${VS_CODE_DARK_SELECTOR} ${PROBLEMS_CODE_EDITOR_COMMENT} { opacity: 0.35 !important; }`;

// -----------------------------------------------------------------------------
// Explore Page Code Editor
// -----------------------------------------------------------------------------
// TODO: make sure these are handled

const disableSyntaxHighlighting = new StyleHandler([
  PROBLEMS_CODE_EDITOR_LINE__LIGHT,
  PROBLEMS_CODE_EDITOR_COMMENT__LIGHT,
  PROBLEMS_CODE_EDITOR_LINE__DARK,
  PROBLEMS_CODE_EDITOR_COMMENT__DARK,
]);
export default disableSyntaxHighlighting;
