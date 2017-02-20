import { Alexey.TihonenkoPage } from './app.po';

describe('alexey.tihonenko App', function() {
  let page: Alexey.TihonenkoPage;

  beforeEach(() => {
    page = new Alexey.TihonenkoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
