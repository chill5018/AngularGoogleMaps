import { AngularCrudGmapPage } from './app.po';

describe('angular-crud-gmap App', () => {
  let page: AngularCrudGmapPage;

  beforeEach(() => {
    page = new AngularCrudGmapPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
