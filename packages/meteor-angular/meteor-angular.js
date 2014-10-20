Package.describe({
    summary: "test",
    version: "0.1.0"
});
Package.onUse(function(api) {
    api.export('UIRouter','client');
    api.versionsFrom('METEOR@0.9.3.1');
    api.addFiles('lib/angular.js', 'client');
    // api.addFiles('lib/angular-animate.js', 'client');
    // api.addFiles('lib/angular-cookies.js', 'client');
    // api.addFiles('lib/angular-ui-router.js', 'client');
    // api.addFiles('lib/angular-hash-key-copier.js','client');
    // api.addFiles('lib/angular-touch.js','client');
    // api.addFiles('modules/collection.js','client');
    // api.addFiles('modules/template.js','client');
    // api.addFiles('modules/uirouter.js','client');
    api.addFiles('modules/test.coffee','client');
    api.addFiles('meteor-angular.js','client');
});