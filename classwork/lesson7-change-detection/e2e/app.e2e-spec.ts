import { Lesson7ChangeDetectionPage } from './app.po';

describe('lesson7-change-detection App', () => {
  let page: Lesson7ChangeDetectionPage;

  beforeEach(() => {
    page = new Lesson7ChangeDetectionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
