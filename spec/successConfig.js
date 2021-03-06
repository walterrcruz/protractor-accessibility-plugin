var env = require('./environment.js');

exports.config = {
  seleniumAddress: env.seleniumAddress,
  framework: 'jasmine',
  specs: ['success_spec.js'],
  baseUrl: env.baseUrl,
  plugins: [{
    tenonIO: {
      options: {
        key: 'YOUR_API_KEY', // ADD YOUR API KEY HERE
        level: 'AA' // WCAG AA OR AAA
      },
      printAll: false
    },
    chromeA11YDevTools: true,
    path: "../index.js"
  }]
};
