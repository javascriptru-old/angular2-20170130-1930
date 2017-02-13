import { Lesson2Page } from './app.po';

describe('lesson2 App', function() {
  let page: Lesson2Page;

  beforeEach(() => {
    page = new Lesson2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
