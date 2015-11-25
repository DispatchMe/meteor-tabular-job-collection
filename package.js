Package.describe({
  name: 'dispatch:tabular-job-collection',
  summary: "Easy admin tables for vsivsi:job-collection using aldeed:tabular",
  version: '0.0.5',
  git: 'https://github.com/DispatchMe/meteor-tabular-job-collection'
});

Package.onUse(function (api) {
  api.versionsFrom('1.1.0.3');

  api.use([
    'underscore',
    'templating',
    'aldeed:tabular@1.4.0',
    'aldeed:template-extension@3.4.3 || 4.0.0',
    'vsivsi:job-collection@1.2.3'
  ]);

  api.use([
    'momentjs:moment@2.10.6'
  ], 'client', {weak: true});

  api.addFiles([
    'lib/both/tabular-job-collection.js'
  ], ['client', 'server']);

  api.addFiles([
    'lib/server/methods.js'
  ], 'server');

  api.addFiles([
    'lib/client/templates.html',
    'lib/client/templates.js'
  ], 'client');

  api.export('TabularJobCollections');
});
