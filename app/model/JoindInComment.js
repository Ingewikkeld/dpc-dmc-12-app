Ext.define('Dmpc.model.JoindInComment', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            {name: 'rating'             , type: 'number' },
            {name: 'comment'            , type: 'string' },
            {name: 'user_display_name'  , type: 'string' },
            {name: 'talk_title'         , type: 'string' },
            {name: 'created_date'       , type: 'string' },
            {name: 'talk_comments_uri'  , type: 'string' }
        ]
    }
});