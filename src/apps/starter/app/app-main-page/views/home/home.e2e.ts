import { browser, by, element } from 'protractor';

describe('App', () => {

  beforeEach(() => {
    // change hash depending on router LocationStrategy
    browser.get('/#/home');
  });

  it('should have a title', () => {
    let subject = browser.getTitle();
    let result  = 'Ekspand for Angular2, Webpack, Material, UI-Router';
    expect(subject).toEqual(result);
  });

  it('should have `your content here` x-large', () => {
    let subject = element(by.css('[xLarge]')).getText();
    let result  = 'Angular, Material, UI-Router';
    expect(subject).toEqual(result);
  });

  it('should have div.ks-page-view-container', () => {
    let subject = element(by.css('.ks-page-view-container')).isPresent();
    let result  = true;
    expect(subject).toEqual(result);
  });
});
