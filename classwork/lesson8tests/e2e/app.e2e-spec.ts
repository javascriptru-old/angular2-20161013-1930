import { Lesson8testsPage } from './app.po';

describe('lesson8tests App', function() {
  let page: Lesson8testsPage;

  beforeEach(() => {
    page = new Lesson8testsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
