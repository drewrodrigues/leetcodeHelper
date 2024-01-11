export class StyleHandler {
  _$stylesheet;
  _$styles;

  constructor(styles) {
    this._$stylesheet = document.createElement("style");
    this._$stylesheet.setAttribute("type", "text/css");
    document.head.appendChild(this._$stylesheet);
    this._$styles = styles;
  }

  on() {
    if (this._$stylesheet.textContent) return;
    for (const style of this._$styles) {
      this._$stylesheet.appendChild(document.createTextNode(style));
    }
  }

  off() {
    this._$stylesheet.textContent = "";
  }
}
