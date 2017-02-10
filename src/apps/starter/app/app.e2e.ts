import { browser, by, element } from 'protractor';

describe('App /home', () => {

  beforeEach(() => {
    browser.get('/#/home');
  });

  it('should have a title', () => {
    let subject = browser.getTitle();
    let result  = 'Ekspand for Angular2, Webpack, Material, UI-Router';
    expect(subject).toEqual(result);
  });

  it('should have header', () => {
    let subject = element(by.css('h1')).isPresent();
    let result  = true;
    expect(subject).toEqual(result);
  });

  it('should have div.ks-page-view-container', () => {
    let subject = element(by.css('.ks-page-view-container')).isPresent();
    let result  = true;
    expect(subject).toEqual(result);
  });

/*
  it('should have buttons', () => {
    let subject = element(by.css('button')).getText();
    let result  = 'Submit Value';
    expect(subject).toEqual(result);
  });
*/
});
