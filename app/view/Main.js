Ext.define('Dmpc.view.Main', {
    extend: 'Ext.TabPanel',
    xtype: 'mainview',
    config: {
        layout: {
            type: 'card'
        },
        tabBarPosition: 'bottom',
        items: [
            {xtype: 'home'},
            {xtype: 'schedule'},
            {xtype: 'travel'},
            {xtype: 'social'},
            {xtype: 'about'}
        ]
    }
});