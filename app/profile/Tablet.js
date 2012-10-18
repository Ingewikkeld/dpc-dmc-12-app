Ext.define('Dmpc.profile.Tablet', {
    extend: 'Ext.app.Profile',

    config: {
        name: 'Tablet',

        views: [
            'About',
            'AboutLeft',
            'AboutRight',
            'Main',
            'Home',
            'Schedule',
            'Social',
            'SocialLeft',
            'SocialRight',
            'Travel'
        ],

        controllers: [
            'Home',
            'Travel',
            'Schedule'
        ]
    },

    isActive: function() {
        return (Ext.os.is.Tablet === true && Ext.os.is.Android !== true) ||
               (Ext.os.is.Desktop && window.innerWidth > 400 && Ext.browser.is.Chrome !== true);
    },

    launch: function() {
        Ext.Viewport.add(Ext.create('Dmpc.view.tablet.Main'));
    }
});