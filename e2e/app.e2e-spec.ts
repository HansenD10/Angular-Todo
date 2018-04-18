import { NgTodosPage } from './app.po';

describe('ng-todos App', function() {
  let page: NgTodosPage;

  beforeEach(() => {
    page = new NgTodosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
