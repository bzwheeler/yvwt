define([
    'jQuery',
    'Backbone',
    'model/winery',
    'model/winery_list',
    'view/winery_list_view'
], function($, Backbone, Winery, WineryList, WineryListView) {

    var Router = Backbone.Router.extend({
        routes : {
            '' : 'mainPage'
        },

        initialized : false,

        mainPage : function() {
            var self = this;
            this.init(function(){
                console.log('ready to go!');
            });
        },

        init : function(callback) {
            if (this.initialized) {
                callback();
                return;
            }

            initialized = true;

            var winery_list = new WineryList();
            var winery_view = new WineryListView({
                el         : '#wineries', // id of dom element where list should go
                collection : winery_list
            });

            // tell the collection to call the server and load winery data
            winery_list.fetch();

            // whenever initialization is completed, call the callback
            callback();
        }
    });

    return new Router();
});