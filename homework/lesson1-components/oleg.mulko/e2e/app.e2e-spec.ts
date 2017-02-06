import { Lesson1MulkoPage } from './app.po';

describe('lesson1-mulko App', function() {
  let page: Lesson1MulkoPage;

  beforeEach(() => {
    page = new Lesson1MulkoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
