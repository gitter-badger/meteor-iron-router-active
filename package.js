Package.describe({
  git: 'https://github.com/zimme/meteor-iron-router-active.git',
  name: 'zimme:iron-router-active',
  summary: 'An iron-router module for quickly adding classnames to your active navigation elements.',
  version: '0.2.2-rc1'
});

Package.onUse(function(api){
  api.versionsFrom('0.9.1-rc3');
  api.use([
    'ui',
    'iron:router@0.9.2-rc2'
  ], 'client');

  api.addFiles([
    'LICENSE',
    'lib/client/helpers.js'
  ], 'client');
});
