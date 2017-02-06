import { UsersListPage } from './app.po';

describe('users-list App', function() {
  let page: UsersListPage;

  beforeEach(() => {
    page = new UsersListPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
