Package.describe({
  name: 'halil:materialize',
  summary: 'A modern responsive front-end framework based on Material Design',
  version: '0.94.0',
  git: 'https://github.com/halilertekin/meteor-materialize.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use('jquery');

  var path = Npm.require('path');
  var asset_path = path.join('materialize');
  api.addFiles('materialize/css/materialize.css', 'client');
  api.addFiles('materialize/js/materialize.js', 'client');

  api.export('Materialize', 'client');

  // fonts
  api.addFiles('materialize/font/roboto/Roboto-Bold.ttf', 'client');
  api.addFiles('materialize/font/roboto/Roboto-Medium.ttf', 'client');
  api.addFiles('materialize/font/roboto/Roboto-Regular.ttf', 'client');
  api.addFiles('materialize/font/roboto/Roboto-Thin.ttf', 'client');

  api.addFiles('materialize/font/material-design-icons/Material-Design-Icons.eot', 'client');
  api.addFiles('materialize/font/material-design-icons/Material-Design-Icons.svg', 'client');
  api.addFiles('materialize/font/material-design-icons/Material-Design-Icons.ttf', 'client');
  api.addFiles('materialize/font/material-design-icons/Material-Design-Icons.woff', 'client');

});
