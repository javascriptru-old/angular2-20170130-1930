import { A2ProjectPage } from './app.po';

describe('a2-project App', function() {
  let page: A2ProjectPage;

  beforeEach(() => {
    page = new A2ProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
