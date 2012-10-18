Ext.define('Dmpc.view.Travel', {
    extend: 'Ext.Panel',
    xtype: 'travel',
    requires: [
        'Ext.form.Panel',
        'Ext.field.Radio'
    ],
    id: 'travel',

    config: {
        title: 'Travel',
        iconCls: 'globe2',
        layout: 'fit',
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
                xtype: 'tabpanel',
                ui: 'light',
                activeItem: 1,
                items: [
                    { xtype: 'travellocations' },
                    { xtype: 'travelmap' },
                    { xtype: 'traveldirections' }
                ]
            }
        ]
    }
});