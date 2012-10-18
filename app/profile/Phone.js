Ext.define('Dmpc.profile.Phone', {
    extend: 'Ext.app.Profile',

    config: {
        name: 'Phone',

        controllers: [
            'Home',
            'Travel',
            'Schedule'
        ]
    },

    isActive: function() {
        return (Ext.os.is.Phone === true && Ext.os.is.Android !== true) ||
               (window.innerWidth <= 400 && Ext.browser.is.Chrome !== true);
    },

    launch: function() {
        Ext.Viewport.add(Ext.create('Dmpc.view.Main'));
    }
});