Ext.define('Dmpc.profile.AndroidTablet', {
    extend: 'Dmpc.profile.Tablet',

    config: {
        name: 'AndroidTablet'
    },

    isActive: function() {
        return (Ext.os.is.Tablet === true && Ext.os.is.Android === true) ||
               (Ext.os.is.Desktop && window.innerWidth > 400 && Ext.browser.is.Chrome === true);
    },

    launch: function() {
        Ext.Viewport.add(Ext.create('Dmpc.view.androidtablet.Main'));
    }
});