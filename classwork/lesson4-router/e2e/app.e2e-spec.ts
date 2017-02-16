import { Lesson4RouterPage } from './app.po';

describe('lesson4-router App', function() {
  let page: Lesson4RouterPage;

  beforeEach(() => {
    page = new Lesson4RouterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
