Package.describe({
  name: 'yasaricli:textcounter',
  version: '0.0.1',
  summary: 'A jQuery plugin which provides a countdown of text in an input field.',
  git: 'https://github.com/yasaricli/meteor-textcounter.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.1');

  api.use('jquery', "client");
  api.addFiles('jquery.textcounter.js', 'client');
});
