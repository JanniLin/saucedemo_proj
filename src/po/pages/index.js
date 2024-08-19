import LoginPage from "./login.page.js";
import InventoryPage from "./inventory.page.js";

/**
 *
 * @param name {'login' / 'inventory'}
 * @returns {LoginPage / InventoryPage}
 */
export default function pages(name) {
  const items = {
    login: new LoginPage(),
    inventory: new InventoryPage(),
  };
  return items[name.toLowerCase()];
}
