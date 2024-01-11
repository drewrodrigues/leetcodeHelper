export class StyleHandler {
  _$style;

  constructor() {
    this._$style = document.createElement("style");
    this._$style.setAttribute("type", "text/css");
    document.head.appendChild(this._$style);
  }

  addStyle(style) {
    this._$style.appendChild(document.createTextNode(style));
  }

  clearStyle() {
    this._$style.textContent = "";
  }
}
