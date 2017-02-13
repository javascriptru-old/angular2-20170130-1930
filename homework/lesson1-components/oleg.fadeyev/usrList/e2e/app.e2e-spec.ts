import { UsrListPage } from './app.po';

describe('usr-list App', function() {
  let page: UsrListPage;

  beforeEach(() => {
    page = new UsrListPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
