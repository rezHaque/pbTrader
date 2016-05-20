export class PbTraderPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('pb-trader-app h1')).getText();
  }
}
