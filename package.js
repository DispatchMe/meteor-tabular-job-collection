Package.describe({
  name: 'dispatch:tabular-job-collection',
  summary: "Easy admin tables for vsivsi:job-collection using aldeed:tabular",
  version: '0.0.1'
});

Package.onUse(function (api) {
  api.use([
    'underscore',
    'aldeed:tabular',
    'templating',
    'aldeed:template-extension',
    'vsivsi:job-collection'
  ]);

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
