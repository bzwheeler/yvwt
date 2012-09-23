define([
    'jQuery',
    'Underscore',
    'Backbone',
    'Handlebars',
    'text!template/winery_list.hbs'
], function($, _, Backbone, Handlebars, ListTemplate) {
    var View = Backbone.View.extend({

        template: Handlebars.compile(ListTemplate),

        // register DOM events
        events: {
            // listen for a click event on DOM elements with a class of 'winery'
            // and call the onWineryClick method
            'click .winery' : 'onWineryClick'
        },

        initialize: function() {
            // call the render method whenever the collection loads data
            this.collection.on('reset', _.bind(this.render, this));
        },

        render: function() {
            // render the template
            var content = this.template({
                wineries : this.collection.toJSON()
            });
            
            // add the html content to the page
            this.$el.html(content);
        },

        onWineryClick : function() {
            console.log('That tickles!');
        }
    });

    return View;
});