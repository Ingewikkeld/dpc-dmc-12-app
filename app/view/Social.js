Ext.define('Dmpc.view.Social', {
    extend: 'Ext.Panel',
    xtype: 'social',
    config: {
        title: 'Social',
        iconCls: 'chat',
        items: [
            {
                xtype: 'titlebar',
                title: 'Social',
                docked: 'top'
            }
        ],
        scrollable: 'vertical',
        styleHtmlContent: true,
        html: ''
    }
});