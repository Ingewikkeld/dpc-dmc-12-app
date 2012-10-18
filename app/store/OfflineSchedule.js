Ext.define('Dmpc.store.OfflineSchedule', {
    extend: 'Ext.data.Store',
    requires: [
        'Dmpc.model.TalkDMC',
        'Dmpc.model.TalkDPC'
    ],

    config: {
        model: 'Dmpc.model.TalkDPC',
        sorters: [
            {
                property: 'time',
                direction: 'ASC'
            },
            {
                property: 'title',
                direction: 'ASC'
            },
            {
                sorterFn: function(record1, record2) {
                    if (record1.data.conference == record2.data.conference) return 0;
                    if (record1.data.conference == Dmpc.app.variant) return -1;
                    return 1;
                },
                direction: 'ASC'
            },
            {
                property: 'title',
                direction: 'ASC'
            }
        ],
        grouper: {
            groupFn: function(record) {
                var splitted = record.get('time');
                return splitted;
            }
        }
    }
});