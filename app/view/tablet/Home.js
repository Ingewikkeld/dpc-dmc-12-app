Ext.define('Dmpc.view.tablet.Home', {
    extend: 'Ext.Panel',
    requires: [
        'Ext.dataview.DataView'
    ],
    xtype: 'tablethome',

    config: {
        title: 'Home',
        iconCls: 'home',
        layout: 'hbox',
        scrollable: false,
        items: [
            {
                xtype: 'titlebar',
                title: '',
                docked: 'top'
            },
            { xtype: 'home', flex: 1 },
            { xtype: 'homemiddle', flex: 1 },
            { xtype: 'hometext', flex: 1 }
        ]
    }
});