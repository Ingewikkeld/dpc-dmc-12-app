Ext.define('Dmpc.model.Tracklist', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            {name: 'o_key',            type: 'string' },
            {name: 'day',              type: 'string' },
            {name: 'time',             type: 'string' },
            {name: 'time_end',         type: 'string' },
            {name: 'short_title',      type: 'string' },
            {name: 'title',            type: 'string' },
            {name: 'description',      type: 'string' },
            {name: 'talk_type',        type: 'string' },
            {name: 'talk_level',       type: 'string' },
            {name: 'talk_orientation', type: 'string' },
            {name: 'track' },
            {name: 'speakers' },
            {name: 'conference', defaultValue:'dpc' }
        ],
        proxy: {
            type: 'localstorage',
            id: 'mytracklist'
        },
        identifier: 'uuid'
    }
});