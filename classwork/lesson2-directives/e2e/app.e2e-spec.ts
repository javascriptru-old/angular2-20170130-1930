import { Lesson2DirectivesPage } from './app.po';

describe('lesson2-directives App', function() {
  let page: Lesson2DirectivesPage;

  beforeEach(() => {
    page = new Lesson2DirectivesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
