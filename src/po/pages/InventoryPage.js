import BasePage from "./BasePage.js";
import HeaderComponent from "../components/HeaderComponent.js";

export default class InventoryPage extends BasePage {
  constructor() {
    super("/inventory");
    this.header = new HeaderComponent();
  }
}
