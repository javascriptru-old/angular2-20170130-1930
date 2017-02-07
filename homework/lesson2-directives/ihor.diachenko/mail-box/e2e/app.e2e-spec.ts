import { MailBoxPage } from './app.po';

describe('mail-box App', function() {
  let page: MailBoxPage;

  beforeEach(() => {
    page = new MailBoxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
