import { Lesson3ServicesPage } from './app.po';

describe('lesson3-services App', function() {
  let page: Lesson3ServicesPage;

  beforeEach(() => {
    page = new Lesson3ServicesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
