import { CourseworkPage } from './app.po';

describe('coursework App', function() {
  let page: CourseworkPage;

  beforeEach(() => {
    page = new CourseworkPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
