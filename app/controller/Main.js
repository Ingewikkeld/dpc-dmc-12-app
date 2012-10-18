Ext.define('Dmpc.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {

        refs: {
            titlebars : 'titlebar'
        },

        control: {
            'titlebars' : {
                initialize: 'onTitlebarInit'
            }
        }
    },

    onTitlebarInit: function(cmp) {
        if (cmp.getTitle() == '') {
            cmp.setTitle(Dmpc.app.appStrings.appTitle);
        }
     }
});