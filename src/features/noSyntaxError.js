import { StyleHandler } from "../helpers/styleHandler";

const hideSyntaxErrors = new StyleHandler([
  ".squiggly-error { display: none !important; }",
]);
export default hideSyntaxErrors;
