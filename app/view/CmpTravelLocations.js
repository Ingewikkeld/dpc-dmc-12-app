Ext.define('Dmpc.view.CmpTravelLocations', {
    extend: 'Ext.form.FormPanel',
    xtype: 'travellocations',

    config: {
        title: 'Locations',
        cls: 'locations',
        scrollable: false,
        items: [
            {
                xtype: 'radiofield',
                labelCls: 'fieldlabel',
                labelWidth: '160px',
                name : 'location',
                value: 'Europaplein 1 Amsterdam',
                label: 'Venue',
                checked: true
            },
            {
                xtype: 'radiofield',
                labelCls: 'fieldlocation',
                labelWidth: '160px',
                name : 'location',
                value: 'Rokin 85 Amsterdam',
                label: 'The Tara (social)'
            },
            {
                xtype: 'radiofield',
                labelCls: 'fieldlocation',
                labelWidth: '160px',
                name : 'location',
                value: 'Spuistraat 288-292 Amsterdam',
                label: 'Hotel'
            }
        ]
    }
});