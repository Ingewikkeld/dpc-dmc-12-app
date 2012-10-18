Ext.define('Dmpc.view.tablet.Schedule', {
    extend: 'Ext.Panel',
    requires: ['Ext.field.Toggle'],
    xtype: 'tabletschedule',
    id: 'scheduleTabletCard',

    config: {
        title: 'Schedule',
        iconCls: 'calendar',
        layout: 'hbox',
        items: [
            {
                xtype: 'titlebar',
                title: 'Schedule',
                docked: 'top',
                items: [
                    {
                        xtype: 'button',
                        name: 'showboth',
                        text: 'PHP',
                        align: 'left'
                    }
                ]
            },
            {
                xtype: 'schedule',
                docked: 'left',
                width: 350
            },
            {
                xtype: 'panel',
                layout: 'card',
                id: 'sessionpanel',
                styleHtmlContent: true,
                flex: 3,
                scrollable: 'vertical',
                html: ''
            }
        ]
    }
});