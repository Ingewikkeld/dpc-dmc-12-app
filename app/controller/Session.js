Ext.define('Dmpc.controller.Session', {
    extend: 'Ext.app.Controller',

    config: {
        control: {
            'backbtn' : {
                tap: 'onBackTap'
            }
        },

        refs: {
            backbtn: '#backbutton'
        }
    },

    onBackTap: function(item) {
        Ext.Viewport.animateActiveItem(0, {type: 'slide', direction: 'right'});
    }
});