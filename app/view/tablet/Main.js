Ext.define('Dmpc.view.tablet.Main', {
    extend: 'Dmpc.view.Main',

    config: {
        items: [
            {xtype: 'tablethome'},
            {xtype: 'tabletschedule'},
            {xtype: 'tablettravel'},
            {xtype: 'tabletsocial'},
            {xtype: 'tabletabout'}
        ]
    }
});