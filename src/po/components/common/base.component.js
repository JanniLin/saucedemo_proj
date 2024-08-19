import { Key } from "webdriverio";

export default class BaseComponent {
  constructor(rootSelector) {
    this.rootSelector = rootSelector;
  }
  get rootEl() {
    return $(this.rootSelector);
  }
  get cleanEl() {
    return async () => {
      await this.rootEl.click();
      await browser.keys([Key.Ctrl, "a"]);
      await browser.keys([Key.Delete]);
    };
  }
}
