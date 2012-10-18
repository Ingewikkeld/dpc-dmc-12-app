Ext.namespace('Dmpc.view.templates');
Dmpc.view.templates.TalkListItemHome = new Ext.XTemplate(
    '<div class="talkListItem {conference}">',
        '<div class="title">{[ this.getTitle(values.short_title, values.title) ]}</div>',
        '<span class="metainfo">',
            '<tpl for="speakers">',
                '<span class="speaker">{name}</span>',
            '</tpl>',
            '<tpl if="talk_level"><span class="sessionicon1 {talk_level}">&nbsp;</span></tpl>',
            '<tpl if="talk_orientation"><span class="sessionicon2 {talk_orientation}">&nbsp;</span></tpl>',
            '<p>{time} - {time_end}</p>',
        '</span>',
    '</div>',
    Ext.create('Dmpc.view.HelperFunctions')
);