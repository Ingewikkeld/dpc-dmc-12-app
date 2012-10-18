Ext.define('Dmpc.controller.tablet.Home', {
    extend: 'Dmpc.controller.Home',

    onHomecardTabletShow: function() {
        var phonetoolbar = Ext.getCmp('phoneTitlebarHome');
        if (phonetoolbar) {
            phonetoolbar.hide();
        }
        this.setUpcomingSessions();
    },

    setUpcomingSessions: function() {
        var scheduleStore = Ext.getStore('OfflineSchedule');
        scheduleStore.on('write', this.paintUpcomingSessions);
    },

    paintUpcomingSessions: function() {
        var scheduleStore = Ext.getStore('OfflineSchedule'),
            scheduleList = Ext.getCmp('homeScheduleList'),
            lowestDate = new Date(),
            upcoming = [];

        lowestDate.setFullYear(2025);

        var lowestDateStamp = lowestDate.getTime();

        scheduleStore.each(function(record) {
            var recordDateStamp = record.getDate().getTime();

            if (recordDateStamp < lowestDateStamp) {
                upcoming = [];
                lowestDateStamp = recordDateStamp;
                upcoming.push(record.data);
            }

            if (recordDateStamp === lowestDateStamp) {
                upcoming.push(record.data);
            }

        });

        scheduleList.setData(upcoming);
        scheduleList.fireEvent('listloaded', scheduleList);
    }
});