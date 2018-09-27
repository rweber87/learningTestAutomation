module.exports = {
  '@tags': ['demo'],
  'Demo test Google' : function (client) {
    client
      .url('http://www.google.com')
      .waitForElementVisible('body', 1000)
      .assert.title('Google')
      .click('#gbqfbb')
      .click('#tsf > div:nth-child(2) > div.A8SBwf > div.FPdoLc.VlcLAe > center > div')
      .pause(5000)
      .end();
  }
};