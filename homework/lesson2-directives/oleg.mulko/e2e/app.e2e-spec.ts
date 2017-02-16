import { OlegMulkoPage } from './app.po';

describe('oleg-mulko App', function() {
  let page: OlegMulkoPage;

  beforeEach(() => {
    page = new OlegMulkoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
