require.config({
    baseUrl: '/javascripts',
    paths: {
        text:         'vendor/require/text',
        jQuery:       'vendor/jquery/jquery-1.7.1.min',
        Underscore:   'vendor/underscore/underscore',
        Backbone:     'vendor/backbone/backbone',
        Bootstrap:    'vendor/bootstrap/js/bootstrap.min',
        Handlebars:   'vendor/handlebars/handlebars'
    },
    shim: {
        'jQuery': {
            exports: function() {
                return jQuery.noConflict();
            }
        },
        'Underscore': {
            exports: '_'
        },
        'Backbone': {
            deps:    ['Underscore', 'jQuery'],
            exports: 'Backbone'
        },
        'Bootstrap': {
            deps: ['jQuery']
        },
        'Handlebars': {
            exports: 'Handlebars'
        }
    }
});

require([
    'Backbone',
    'router/app'
], function(Backbone, Router){
    Backbone.history.start();
});