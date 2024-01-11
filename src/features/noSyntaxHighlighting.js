import { StyleHandler } from "../helpers/styleHandler";

const disableSyntaxHighlighting = new StyleHandler([
  ".monaco-scrollable-element span { color: white !important; opacity: 1 !important; }",
  ".CodeMirror-line span { color: white !important; opacity: 1 !important; }",
]);
export default disableSyntaxHighlighting;
