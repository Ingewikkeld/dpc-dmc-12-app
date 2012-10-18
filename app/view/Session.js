Ext.define('Dmpc.view.Session', {
    extend: 'Ext.Panel',
    xtype: 'session',
    config: {
        layout: 'vbox',
        scrollable: true,
        items: [
            {
                xtype: 'titlebar',
                id: 'sessionToolbar',
                title: 'Talk info',
                docked: 'top',
                items: [
                    {
                        xtype: 'button',
                        text: 'Back',
                        ui: 'back',
                        id: 'backbutton',
                        align: 'left'
                    }
                ]
            },
            {
                xtype: 'panel',
                id: 'sessionDetail',
                styleHtmlContent: true,
                data: [],
                tpl: Dmpc.view.templates.TalkDetail
            },
            {
                xtype: 'button',
                text: 'Add to My Tracklist',
                id: 'addbutton',
                margin: 10
            }
        ]
    }
});