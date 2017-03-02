import { Lesson5FormsPage } from './app.po';

describe('lesson5-forms App', () => {
  let page: Lesson5FormsPage;

  beforeEach(() => {
    page = new Lesson5FormsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
