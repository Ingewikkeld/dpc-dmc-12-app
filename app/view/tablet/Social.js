Ext.define('Dmpc.view.tablet.Social', {
    extend: 'Ext.Panel',
    xtype: 'tabletsocial',

    config: {
        title: 'Social',
        iconCls: 'chat',
        layout: 'hbox',
        items: [
            {
                xtype: 'titlebar',
                title: 'Social',
                docked: 'top'
            },
            { xtype: 'socialleft',  flex: 1 },
            { xtype: 'socialright', flex: 1 }
        ],
        scrollable: false
    }
});