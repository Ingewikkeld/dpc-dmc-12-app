Ext.define('Dmpc.view.Schedule', {
    extend: 'Ext.Panel',
    requires: ['Ext.field.Toggle'],
    xtype: 'schedule',
    id: 'scheduleCard',

    config: {
        title: 'Schedule',
        iconCls: 'calendar',
        layout: 'fit',
        items: [
            {
                xtype: 'titlebar',
                id: 'scheduletoolbar',
                title: 'Schedule',
                docked: 'top',
                items: [
                    {
                        xtype: 'button',
                        name: 'showboth',
                        text: 'PHP',
                        align: 'right'
                    }
                ]
            },
            {
                xtype: 'tabpanel',
                id: 'scheduleTabs',

                scrollable: 'vertical',
                ui: 'light',
                items: [
                    {
                        iconCls: 'june7',
                        id: 'June7',
                        title: 'June 7',
                        xtype: 'scheduledataview'
                    },
                    {
                        iconCls: 'june8',
                        id: 'June8',
                        title: 'June 8',
                        xtype: 'scheduledataview'
                    },
                    {
                        iconCls: 'june9',
                        id: 'June9',
                        title: 'June 9',
                        xtype: 'scheduledataview'
                    },
                    {
                        iconCls: 'selected',
                        title: 'Selected',
                        cls: 'scheduleDataView personalSchedule',
                        id: 'PersonalSchedule',
                        xtype: 'list',
                        store: 'Tracklist',
                        grouped: true,
                        itemTpl: Dmpc.view.templates.TalkListItemSelected
                    }
                ]
            }
        ]
    }
});