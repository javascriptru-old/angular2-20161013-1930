import { Lesson6routerPage } from './app.po';

describe('lesson6router App', function() {
  let page: Lesson6routerPage;

  beforeEach(() => {
    page = new Lesson6routerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
