Ext.define('Dmpc.view.androidtablet.Main', {
    extend: 'Dmpc.view.tablet.Main',

    config: {
        tabBarPosition: 'top',
        items: [
            {xtype: 'tablethome'},
            {xtype: 'tabletschedule'},
            {xtype: 'tablettravel'},
            {xtype: 'tabletsocial'},
            {xtype: 'tabletabout'}
        ]
    }
});