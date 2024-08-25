import LoginPage from "./pages/LoginPage.js";
import InventoryPage from "./pages/InventoryPage.js";

export default function pagesFactory(name) {
  const pages = {
    login: new LoginPage(),
    inventory: new InventoryPage(),
  };
  return pages[name.toLowerCase()];
}
