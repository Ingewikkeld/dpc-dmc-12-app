Ext.define('Dmpc.view.tablet.About', {
    extend: 'Ext.Panel',
    xtype: 'tabletabout',

    config: {
        title: 'About',
        iconCls: 'info',
        layout: 'hbox',
        items: [
            {
                xtype: 'titlebar',
                title: 'About',
                docked: 'top'
            },
            { xtype: 'aboutleft',  flex: 1 },
            { xtype: 'aboutright', flex: 1 }
        ],
        scrollable: false
    }
});