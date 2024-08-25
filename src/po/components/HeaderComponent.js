import BaseComponent from "../common/base.component.js";

export default class HeaderComponent extends BaseComponent {
  constructor() {
    super("div.primary_header");
  }
  get headerText() {
    return this.rootEl.$("div.app_logo");
  }
}
