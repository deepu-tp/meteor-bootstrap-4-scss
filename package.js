Package.describe({
  name: 'chuikoff:bootstrap-4',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Bootstrap wrapper Alpha',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.use('jquery', 'client');
  api.use('fourseven:scss');
  api.addFiles([
    'dist/js/bootstrap.min.js',
    'scss/bootstrap-flex.scss',
    'scss/bootstrap-grid.scss',
    'scss/bootstrap-reboot.scss',
    'scss/bootstrap.scss' 
  ], 'client');
});
