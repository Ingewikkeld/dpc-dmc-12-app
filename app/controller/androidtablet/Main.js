Ext.define('Dmpc.controller.androidtablet.Main', {
    extend: 'Dmpc.controller.Main',
    config: {
        refs: {
            bar: 'titlebar'
        },

        control: {
            'bar': {
                initialize: 'onTitlebarShow'
            }
        }
    },

    onTitlebarShow: function(titlebar) {
        titlebar.hide();
    }
});