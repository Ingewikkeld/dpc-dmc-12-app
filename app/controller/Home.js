Ext.define('Dmpc.controller.Home', {
    extend: 'Ext.app.Controller',

    config: {
        control: {
            'homecard': {
                activate: 'onHomecardShow'
            },
            'homecardtablet' : {
                activate: 'onHomecardTabletShow'
            },
            'hometext':{
                initialize: 'onHomeTextInit'
            }
        },

        refs: {
            homecard: 'home',
            hometext: 'hometext',
            homecardtablet: 'tablethome'
        }
    },

    /**
     * Launch function:
     * Load schedule.
     */
    launch: function() {
        if (navigator.onLine) {
            // Load online store, and call LoadAll, this wil trigger syncing to offline store.
            var scheduleStore = Ext.getStore('Schedule');
            if (!scheduleStore.isLoaded()) {
                scheduleStore.loadAll();
            }
        }
        else {
            var offlineScheduleStore = Ext.getStore('OfflineSchedule');
            if (!offlineScheduleStore.isLoaded()) {
                offlineScheduleStore.load();
            }
        }
    },

    onHomecardShow: function() {
        var me = this;
        getTwitters('tweet', {
          id: '#dmconf OR #dpc12 OR @dpcon OR @dmconf',
          count: 50,
          callback: me.tweetsLoaded,
          enableLinks: true,
          ignoreReplies: false,
          clearContents: true,
          template: '<div class="tweetheader"><span class="date">%time%</span>, <a class="name" href="http://www.twitter.com/%user_screen_name%">%user_screen_name%</a> said: </div><div class="tweettext">%text%</div>'
        });
    },

    tweetsLoaded: function() {
        var rootElement = Ext.DomQuery.selectNode('div[id=tweet]'),
            linkElements = Ext.DomQuery.select('a', rootElement);

        Ext.each(linkElements, function(link) {
            link.target = '_blank';
        });
    },

    onHomecardTabletShow: function() {
        this.onHomecardShow();
    },

    onHomeTextInit: function(cmp) {
        var variant = Dmpc.app.variant;
        if (variant == 'dpc') {
            homeText = Dmpc.view.templates.HomeTextDPC;
        } else {
            homeText = Dmpc.view.templates.HomeTextDMC;
        }

        cmp.setHtml(homeText);
    }
});
