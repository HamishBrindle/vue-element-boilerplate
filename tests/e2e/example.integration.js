/* eslint-disable no-undef */
beforeAll(async () => {
  // eslint-disable-next-line global-require
  require('jsdom-global')();
});

describe('Google', () => {
  beforeAll(async () => {
    await page.goto('https://google.com');
  });

  it('should display "google" text on page', async () => {
    await expect(page).toMatch('google');
  });
});
