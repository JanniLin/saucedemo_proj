import { Key } from "webdriverio";

export default class BaseComponent {
  constructor(rootSelector) {
    this.rootSelector = rootSelector;
  }
  get rootEl() {
    return $(this.rootSelector);
  }
}
