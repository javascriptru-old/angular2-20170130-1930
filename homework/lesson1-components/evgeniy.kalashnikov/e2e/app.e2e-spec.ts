import { Lesson1HomeworkPage } from './app.po';

describe('lesson1-homework App', function() {
  let page: Lesson1HomeworkPage;

  beforeEach(() => {
    page = new Lesson1HomeworkPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
