const { Before } = require("@cucumber/cucumber");
const pagesFactory = require("../../po/pagesFactory.js");

let loginForm;
let header;

Before(async () => {
  header = pagesFactory("inventory").header;
  const loginPage = pagesFactory("login");
  loginForm = loginPage.loginForm;
  await loginPage.open();
});
