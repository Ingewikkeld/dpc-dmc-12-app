Ext.define('Dmpc.view.ScheduleDataview', {
    extend: 'Ext.dataview.List',
    xtype: 'scheduledataview',

    config: {
        cls: 'scheduleDataView',
        scrollable: true,
        grouped: true,
        store: 'OfflineSchedule',
        itemTpl: Dmpc.view.templates.TalkListItem
    }
});