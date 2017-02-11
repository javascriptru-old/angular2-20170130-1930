import { PostalBoxPage } from './app.po';

describe('postal-box App', function() {
  let page: PostalBoxPage;

  beforeEach(() => {
    page = new PostalBoxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
