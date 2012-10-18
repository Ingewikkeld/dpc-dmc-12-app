Ext.define('Dmpc.view.CmpTransport', {
    extend: 'Ext.SegmentedButton',
    xtype: 'travelbuttons',
    config: {
        name: 'transportmethod',
        layout: {
            type:'hbox',
            align: 'center'
        },
        items: [
            {
                text: 'Car',
                pressed: true
            },
            {
                text: 'Walk'
            }
        ]
    }
});
