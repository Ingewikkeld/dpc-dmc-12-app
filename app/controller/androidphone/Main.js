Ext.define('Dmpc.controller.androidphone.Main', {
    extend: 'Dmpc.controller.Main',
    config: {
        refs: {
            titlebar: 'titlebar'
        },

        control: {
            'titlebar': {
                initialize: 'onTitlebarShow'
            }
        }
    },

    onTitlebarShow: function(titlebar) {
        titlebar.hide();
    }
});