Ext.define('Dmpc.view.HomeMiddle', {
    extend: 'Ext.Panel',
    xtype: 'homemiddle',

    config: {
        scrollable: 'vertical',
        layouyt: 'vbox',
        items: [
            {
                styleHtmlContent: true,
                flex: 1,
                html: '<h2>Current schedule</h2>'
            },
            {
                xtype: 'list',
                scrollable: false,
                id: 'homeScheduleList',
                itemTpl: Dmpc.view.templates.TalkListItemHome

            },
            {
                xtype: 'formpanel',
                ui: 'round',
                flex: 1,
                scrollable: false,
                styleHtmlContent: true,
                items: [
                    {
                        html: '<h2>Conference Addresses</h2>'
                    },
                    { xtype: 'travellocations', id: 'hometravel' }
                ]
            }
        ]
    }
});