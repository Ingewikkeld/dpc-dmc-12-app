Ext.define('Dmpc.view.CmpTravelDirections', {
    extend: 'Ext.Panel',
    xtype: 'traveldirections',

    config: {
        title: 'Directions',
        id: 'directionsWrapper',
        cls: 'directions',
        scrollable: true,
        xtype: 'panel',
        items: [
            {
                styleHtmlContent: true,
                html: '<div id="directionsPanel">&nbsp;</div>'
            }
        ]
    }
});