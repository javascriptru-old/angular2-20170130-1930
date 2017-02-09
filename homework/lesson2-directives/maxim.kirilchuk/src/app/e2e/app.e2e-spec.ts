import { Ng2HwPage } from './app.po';

describe('ng2-hw App', function() {
  let page: Ng2HwPage;

  beforeEach(() => {
    page = new Ng2HwPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
