Ext.define('Dmpc.store.Tracklist', {
    extend: 'Ext.data.Store',
    config: {
        model: 'Dmpc.model.Tracklist',
        autoLoad: true,
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
                property: 'conference',
                direction: 'ASC'
            },
            {
                property: 'title',
                direction: 'ASC'
            }
        ],
        grouper: {
            property: 'day',
            sortProperty: 'day',
            transform: function (value) {
                if (value == 'thursday') return 0;
                if (value == 'friday') return 1;
                if (value == 'saturday') return 2;
            }
        }
    }
});