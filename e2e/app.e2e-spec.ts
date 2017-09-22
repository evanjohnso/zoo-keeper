import { AnimalTrackerPage } from './app.po';

describe('animal-tracker App', function() {
  let page: AnimalTrackerPage;

  beforeEach(() => {
    page = new AnimalTrackerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
