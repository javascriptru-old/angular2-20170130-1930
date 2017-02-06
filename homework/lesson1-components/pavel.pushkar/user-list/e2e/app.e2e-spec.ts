import { UserListPage } from './app.po';

describe('user-list App', function() {
  let page: UserListPage;

  beforeEach(() => {
    page = new UserListPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
