//<debug>
Ext.Loader.setPath({
    'Ext': 'sdk/src'
});
//</debug>

Ext.application({
    name: 'Dmpc',

    requires: [
        'Ext.MessageBox',
        'Ext.TitleBar',
        'Dmpc.lib.reader.NestedJson',
        'Dmpc.view.HelperFunctions',
        'Dmpc.view.templates.AboutTextDMC',
        'Dmpc.view.templates.AboutTextDPC',
        'Dmpc.view.templates.AboutRightDMC',
        'Dmpc.view.templates.AboutRightDPC',
        'Dmpc.view.templates.AboutLeftDMC',
        'Dmpc.view.templates.AboutLeftDPC',
        'Dmpc.view.templates.HomeTextDMC',
        'Dmpc.view.templates.HomeTextDPC',
        'Dmpc.view.templates.InitialScheduleDMC',
        'Dmpc.view.templates.InitialScheduleDPC',
        'Dmpc.view.templates.SocialTextDMC',
        'Dmpc.view.templates.SocialTextDPC',
        'Dmpc.view.templates.SocialRightDMC',
        'Dmpc.view.templates.SocialRightDPC',
        'Dmpc.view.templates.SocialLeftDMC',
        'Dmpc.view.templates.SocialLeftDPC',
        'Dmpc.view.templates.TalkDetail',
        'Dmpc.view.templates.TalkListItem',
        'Dmpc.view.templates.TalkListItemHome',
        'Dmpc.view.templates.TalkListItemSelected'
    ],

    profiles: [
        'AndroidPhone',
        'AndroidTablet',
        'Phone',
        'Tablet'
    ],

    stores: [
        'JoindIn',
        'Schedule',
        'OfflineSchedule',
        'Tracklist'
    ],

    controllers: [
        'About',
        'Main',
        'Session',
        'Social'
    ],

    models: [
        'JoindInComment',
        'Tracklist'
    ],

    views: [
        'About',
        'tablet.AboutRight',
        'tablet.AboutLeft',
        'Home',
        'HomeMiddle',
        'HomeText',
        'Main',
        'MyTracklist',
        'Schedule',
        'ScheduleDataview',
        'Session',
        'Social',
        'tablet.SocialRight',
        'tablet.SocialLeft',
        'Travel'
    ],

    icon: {
        57: 'resources/icons/Icon.png',
        72: 'resources/icons/Icon~ipad.png',
        114: 'resources/icons/Icon@2x.png',
        144: 'resources/icons/Icon~ipad@2x.png'
    },
    
    phoneStartupScreen: 'resources/loading/Homescreen.jpg',
    tabletStartupScreen: 'resources/loading/Homescreen~ipad.jpg',

    viewport: { autoMaximize: true },

    variant: 'dpc',

    appStrings: {
        appTitle: 'Dutch PHP Conference',
        showOther: 'Show Mobile Tracks'
    },

    launch: function() {
        this.setVariant();
        document.title = this.appStrings.appTitle;
        document.addEventListener("backbutton", this.backKeyDown, true);
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();
    },

    backKeyDown: function() {
        Ext.getCmp('mainview').setActiveIndex(0);
    },

    setVariant: function() {
        Ext.Viewport.addCls(this.variant);
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function() {
                window.location.reload();
            }
        );
    }
});
