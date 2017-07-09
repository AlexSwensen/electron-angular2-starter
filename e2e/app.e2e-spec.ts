import {ElectronApp} from './app.po';
import {browser, by, element} from 'protractor';

describe('Electron App', () => {
  let page: ElectronApp;

  beforeEach(() => {
    page = new ElectronApp();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });

  it('should see a button on that page', () => {
    const button = element(by.buttonText('Hello'));
    expect(button.isPresent()).toBeTruthy();
  });
});
