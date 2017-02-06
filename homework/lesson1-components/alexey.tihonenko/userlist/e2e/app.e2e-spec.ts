import { UserlistPage } from './app.po';

describe('userlist App', function() {
  let page: UserlistPage;

  beforeEach(() => {
    page = new UserlistPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
