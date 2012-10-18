Ext.define('Dmpc.model.Talk', {
    extend: 'Ext.data.Model',
    requires: ['Ext.data.identifier.Uuid'],

    year: 2012,
    month: 5,
    dates: {
        'thursday' : 7,
        'friday' : 8,
        'saturday' : 9
    },
    config: {
        identifier: 'uuid',
        proxy: {
            type: 'localstorage',
            id: 'schedule'
        }
    },

    getDate: function() {
        var date = new Date(),
            recordDay = this.get('day'),
            recordTime = this.get('time').toString(),
            day = this.dates[recordDay],
            hour = recordTime.split(':')[0],
            minutes = recordTime.split(':')[1];

        date.setFullYear(this.year, this.month, day);
        date.setHours(hour, minutes, 0, 0);

        return date;
    }

});