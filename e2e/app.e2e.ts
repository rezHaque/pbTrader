import { PbTraderPage } from './app.po';

describe('pb-trader App', function() {
  let page: PbTraderPage;

  beforeEach(() => {
    page = new PbTraderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('pb-trader works!');
  });
});
