import { Lesson7applifecyclePage } from './app.po';

describe('lesson7applifecycle App', function() {
  let page: Lesson7applifecyclePage;

  beforeEach(() => {
    page = new Lesson7applifecyclePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
