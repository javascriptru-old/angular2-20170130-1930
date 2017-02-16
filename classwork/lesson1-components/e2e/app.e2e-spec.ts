import { Lesson1ComponentsPage } from './app.po';

describe('lesson1-components App', function() {
  let page: Lesson1ComponentsPage;

  beforeEach(() => {
    page = new Lesson1ComponentsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
