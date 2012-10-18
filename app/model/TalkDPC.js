Ext.define('Dmpc.model.TalkDPC', {
    extend: 'Dmpc.model.Talk',
    config: {
        fields: [
            {name: 'o_key',            type: 'string' },
            {name: 'day',              type: 'string' },
            {name: 'time',             type: 'string' },
            {name: 'time_end',         type: 'string', defaultValue: '16:45' },
            {name: 'short_title',      type: 'string' },
            {name: 'title',            type: 'string' },
            {name: 'description',      type: 'string' },
            {name: 'talk_type',        type: 'string' },
            {name: 'talk_level',       type: 'string' },
            {name: 'talk_orientation', type: 'string' },
            {name: 'track' },
            {name: 'speakers' },
            {name: 'conference', defaultValue:'dpc' }
        ]
    }
});