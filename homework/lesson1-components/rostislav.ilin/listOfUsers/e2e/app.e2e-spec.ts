import { ListOfUsersPage } from './app.po';

describe('list-of-users App', function() {
  let page: ListOfUsersPage;

  beforeEach(() => {
    page = new ListOfUsersPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
