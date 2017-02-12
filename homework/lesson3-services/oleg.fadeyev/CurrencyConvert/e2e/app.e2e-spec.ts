import { CurrencyConvertPage } from './app.po';

describe('currency-convert App', function() {
  let page: CurrencyConvertPage;

  beforeEach(() => {
    page = new CurrencyConvertPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
