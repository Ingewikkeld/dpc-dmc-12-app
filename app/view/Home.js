Ext.define('Dmpc.view.Home', {
    extend: 'Ext.Panel',
    requires: [
        'Ext.dataview.DataView'
    ],
    xtype: 'home',

    config: {
        title: 'Home',
        iconCls: 'home',
        layout: 'vbox',
        styleHtmlContent: true,
        scrollable: 'vertical',
        items: [
            {
                xtype: 'titlebar',
                id: 'phoneTitlebarHome',
                title: '',
                docked: 'top'
            },
            {
                cls: 'homepanel',
                html: '<div id="homeContainer"><h1 id="logo"> </h1><h3 class="date">June 7, 8 & 9, Amsterdam</h3>'
            },
            {
                // @todo change to dataview after implementation of personal schedule
                html: '<p>Personal schedule</p>',
                hidden: true
            },
            {
                cls: 'hometweets',
                html: '<h2>Social feed</h2><div id="tweet">Tweets are loading...</div>'
            }
        ]
    }
});