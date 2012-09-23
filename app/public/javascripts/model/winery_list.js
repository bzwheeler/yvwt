define([
    'Underscore',
    'Backbone',
    'model/winery'
], function(_, Backbone, Winery){
    var List = Backbone.Collection.extend({
        model: Winery,

        // base url to use for loading winery data (RESTful)
        url : function() {
            return '/api/1.0/wineries';
        },

        // Called whenever results are fetched from server.
        // Expected to parse JSON and return an array of winery model data.
        parse : function( payload ) {
            return payload.data;
        },

        // tell the collection to default sort by name
        comparator: function(winery) {
            return winery.get('name');
        }
    });  

    return List;
});