define([
    'Underscore',
    'Backbone'
], function(_, Backbone) {
    var Model = Backbone.Model.extend({
        defaults: function() {
            return {
                id: null,
                name: ""
            };
        },

        initialize: function() {}
    });
    
    return Model;
});