Ext.define('Dmpc.profile.AndroidPhone', {
    extend: 'Dmpc.profile.Phone',
    requires: ['Dmpc.view.androidphone.Main'],

    config: {
        name: 'AndroidPhone'
    },

    isActive: function() {
        return (Ext.os.is.Phone === true && Ext.os.is.Android === true) ||
               (window.innerWidth <= 400 && Ext.browser.is.Chrome === true);
    },

    launch: function() {
        Ext.Viewport.add(Ext.create('Dmpc.view.androidphone.Main'));
    }
});