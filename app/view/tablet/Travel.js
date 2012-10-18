Ext.define('Dmpc.view.tablet.Travel',{
    extend: 'Dmpc.view.Travel',
    xtype: 'tablettravel',

    config: {
        layout: 'hbox',
        items: [
            {
                xtype: 'titlebar',
                title: 'Travel',
                docked: 'top',
                items: [
                    { xtype: 'travelbuttons', align: 'right' }
                ]
            },
            {
                xtype: 'travellocations',
                flex: 1
            },
            {
                xtype: 'travelmap',
                flex: 2

            },
            {
                xtype: 'traveldirections',
                flex: 2
            }
        ]
    }
});