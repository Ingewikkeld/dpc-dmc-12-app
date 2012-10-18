Ext.define('Dmpc.store.Schedule', {
    extend: 'Ext.data.Store',
    requires: [
        'Dmpc.model.TalkDMC',
        'Dmpc.model.TalkDPC',
        'Ext.data.proxy.JsonP'
    ],

    config: {
        model: 'Dmpc.model.TalkDPC',
        sorters: [
            {
                property: 'time',
                direction: 'ASC'
            },
            {
                property: 'end_time',
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
        },
        proxy: {
            type: 'jsonp',
            url: 'http://www.phpconference.nl/schedule.json',
            noCache: false,
            enablePagingParams: false,
            reader: {
                type: 'nestedjson',
                rootProperty: 'sessions',
                depth: 3
            }
        },
        listeners: {
            storesloaded: function(records) {
                // Dirty double sessions hack since the service has no filters
                Ext.each(records, function(record, index){
                    if (record &&
                        record.data.talk_type == 'keynote' &&
                        record.data.conference != Dmpc.app.variant &&
                        record.data.day + record.data.time != 'saturday09:40'
                        ) {
                        records.splice(index, 1);
                    }
                });
                // End of hack

                var modelName = this.getModelName(),
                    extraSlots = [
                        Ext.create(modelName, {
                            o_key: 'extra1',
                            day: 'thursday',
                            time: '09:00',
                            time_end: '09:30',
                            short_title: 'Registration',
                            title: 'Registration',
                            description: '',
                            talk_type: 'notalk',
                            talk_level: '',
                            talk_orientation: '',
                            track: '',
                            speakers: '',
                            conference: 'both'
                        }),
                        Ext.create(modelName, {
                            o_key: 'extra2',
                            day: 'thursday',
                            time: '12:45',
                            time_end: '13:45',
                            short_title: 'Lunch',
                            title: 'Lunch',
                            description: '',
                            talk_type: 'notalk',
                            talk_level: '',
                            talk_orientation: '',
                            track: '',
                            speakers: '',
                            conference: 'both'
                        }),
                        Ext.create(modelName, {
                            o_key: 'extra3',
                            day: 'friday',
                            time: '09:00',
                            time_end: '09:30',
                            short_title: 'Registration',
                            title: 'Registration',
                            description: '',
                            talk_type: 'notalk',
                            talk_level: '',
                            talk_orientation: '',
                            track: '',
                            speakers: '',
                            conference: 'both'
                        }),
                        Ext.create(modelName, {
                            o_key: 'extra4',
                            day: 'friday',
                            time: '09:30',
                            time_end: '09:40',
                            short_title: 'Opening',
                            title: 'Opening',
                            description: '',
                            talk_type: 'notalk',
                            talk_level: '',
                            talk_orientation: '',
                            track: '',
                            speakers: '',
                            conference: 'both'
                        }),
                        Ext.create(modelName, {
                            o_key: 'extra5',
                            day: 'friday',
                            time: '12:30',
                            time_end: '13:30',
                            short_title: 'Lunch',
                            title: 'Lunch',
                            description: '',
                            talk_type: 'notalk',
                            talk_level: '',
                            talk_orientation: '',
                            track: '',
                            speakers: '',
                            conference: 'both'
                        }),
                        Ext.create(modelName, {
                            o_key: 'extra6',
                            day: 'friday',
                            time: '15:15',
                            time_end: '15:45',
                            short_title: 'Break',
                            title: 'Coffee & Tea break',
                            description: '',
                            talk_type: 'notalk',
                            talk_level: '',
                            talk_orientation: '',
                            track: '',
                            speakers: '',
                            conference: 'both'
                        }),
                        Ext.create(modelName, {
                            o_key: 'extra7',
                            day: 'friday',
                            time: '20:30',
                            time_end: '23:00',
                            short_title: 'Social',
                            title: 'Social',
                            description: '',
                            talk_type: 'notalk',
                            talk_level: '',
                            talk_orientation: '',
                            track: '',
                            speakers: '',
                            conference: 'both'
                        }),
                        Ext.create(modelName, {
                            o_key: 'extra8',
                            day: 'saturday',
                            time: '09:30',
                            time_end: '09:40',
                            short_title: 'Opening',
                            title: 'Opening',
                            description: '',
                            talk_type: 'notalk',
                            talk_level: '',
                            talk_orientation: '',
                            track: '',
                            speakers: '',
                            conference: 'both'
                        }),
                        Ext.create(modelName, {
                            o_key: 'extra9',
                            day: 'saturday',
                            time: '12:35',
                            time_end: '13:30',
                            short_title: 'Lunch',
                            title: 'Lunch',
                            description: '',
                            talk_type: 'notalk',
                            talk_level: '',
                            talk_orientation: '',
                            track: '',
                            speakers: '',
                            conference: 'both'
                        }),
                        Ext.create(modelName, {
                            o_key: 'extra10',
                            day: 'saturday',
                            time: '15:20',
                            time_end: '15:45',
                            short_title: 'Break',
                            title: 'Coffee & Tea break',
                            description: '',
                            talk_type: 'notalk',
                            talk_level: '',
                            talk_orientation: '',
                            track: '',
                            speakers: '',
                            conference: 'both'
                        }),
                        Ext.create(modelName, {
                            o_key: 'extra11',
                            day: 'saturday',
                            time: '16:45',
                            time_end: '17:00',
                            short_title: 'Closing',
                            title: 'Closing',
                            description: '',
                            talk_type: 'notalk',
                            talk_level: '',
                            talk_orientation: '',
                            track: '',
                            speakers: '',
                            conference: 'both'
                        })

                    ];

                this.add(extraSlots);

                // Load offline store and clear.
                var offlineScheduleStore = Ext.getStore('OfflineSchedule');
                offlineScheduleStore.removeAll();
                offlineScheduleStore.getProxy().clear();
                offlineScheduleStore.sync();

                // Sync to offline store.
                var offlineScheduleStore = Ext.getStore('OfflineSchedule');
                offlineScheduleStore.add(records);
                offlineScheduleStore.sync();
            },

            exception: function() {
                var offlineScheduleStore = Ext.getStore('OfflineSchedule');
                if (!offlineScheduleStore.isLoaded()) {
                    offlineScheduleStore.load();
                }
            }
        }
    },

    loadedStores: 0,

    getModelName: function() {
        return (Dmpc.app.variant === 'dpc' ? 'Dmpc.model.TalkDPC' : 'Dmpc.model.TalkDMC');
    },

    loadAll: function() {

        if (this.isLoading()) {
            return;
        }
        this.removeAll();

        this.setModel('Dmpc.model.TalkDPC');
        this.getProxy().setUrl('http://www.phpconference.nl/schedule.json');
        this.load(
            {
                'addRecords': true,
                'callback': this.singleStoreLoaded
            }
        );

        this.setModel('Dmpc.model.TalkDMC');
        this.getProxy().setUrl('http://www.mobileconference.nl/schedule.json');

        this.load(
            {
                'addRecords': true,
                'callback': this.singleStoreLoaded
            }
        );
    },

    singleStoreLoaded: function(records) {
        this.loadedStores++;
        if (this.loadedStores == 2) {
            this.sort();
            this.fireEvent('storesloaded', this.getData().all);
            this.loadedStores = 0;
        }
    }
});