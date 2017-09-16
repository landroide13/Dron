import { DronsPage } from './app.po';

describe('drons App', () => {
  let page: DronsPage;

  beforeEach(() => {
    page = new DronsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
