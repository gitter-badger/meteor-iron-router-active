Package.describe({
  git: 'https://github.com/XpressiveCode/iron-router-active.git',
  summary: 'An iron-router module for quickly adding classnames to your active navigation elements.',
  version: '0.2.1'
});

Package.onUse(function(api){
  api.versionsFrom('0.9.0');
  api.use([
    'ui',
    'iron:router'
  ], 'client');

  api.addFiles([
    'LICENSE',
    'lib/client/helpers.js'
  ], 'client');
});
