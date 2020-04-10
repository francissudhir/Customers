

module.exports = {
  projectId: 'customer-273607',
  keyFilename: './customers.json',
  bucketName: 'staging.customer-273607.appspot.com',
  cookieSecret: '[cookie signing key]',
  oauth2: {
    clientId: '[Client ID for web application credentials]',
    clientSecret: '[Client Secret for web application credentials]',
    redirectUrl: process.env.REDIRECT_URL || 'http://localhost:8080/oauth2callback'
  }
};
