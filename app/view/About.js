Ext.define('Dmpc.view.About', {
    extend: 'Ext.Panel',
    xtype: 'about',
    config: {
        title: 'About',
        iconCls: 'info',
        items: [
            {
                xtype: 'titlebar',
                title: 'About',
                docked: 'top'
            }
        ],
        scrollable: 'vertical',
        styleHtmlContent: true,
        html: ''
    }
});