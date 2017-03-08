import { FormPage } from './app.po';

describe('form App', function() {
  let page: FormPage;

  beforeEach(() => {
    page = new FormPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
