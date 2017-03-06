import { Lesson6UnitTestsPage } from './app.po';

describe('lesson6-unit-tests App', () => {
  let page: Lesson6UnitTestsPage;

  beforeEach(() => {
    page = new Lesson6UnitTestsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
