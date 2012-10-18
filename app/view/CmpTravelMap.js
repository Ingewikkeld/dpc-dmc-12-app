Ext.define('Dmpc.view.CmpTravelMap', {
    extend: 'Ext.Panel',
    requires: ['Ext.Map'],
    xtype: 'travelmap',

    config: {
        title: 'Map',
        id: 'maptab',
        cls: 'travelmap',
        scrollable: false,
        layout: 'fit',
        items: [
            {
                xtype: 'map',
                id: 'mapPanel',
                mapOptions: {
                    center: (new google.maps.LatLng(52.22, 4.53)),
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    zoom: 7
                }
            }
        ]
    }
});