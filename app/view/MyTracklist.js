Ext.define('Dmpc.view.MyTracklist', {
    extend: 'Ext.Panel',
    xtype: 'mytracklist',
    config: {
        title: "My tracklist",
        iconCls: "sign_leftright2",
        items: [
            {
                xtype: 'titlebar',
                title: 'My Tracklist',
                docked: 'top'
            },
            {
                xtype: 'list',
                itemTpl: '{time} - {name}',
                store: 'Tracklist'
            }
        ]
    }
});