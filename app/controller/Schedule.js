Ext.define('Dmpc.controller.Schedule', {
    extend: 'Ext.app.Controller',

    config: {
        control: {
            'scheduleday' : {
                show: 'onScheduleTabChange',
                itemtap: 'onSessionTap'
            },
            'homeschedulelist' : {
                listloaded: 'toggleOtherConference',
                itemtap: 'onHomeSessionTap'
            },
            'personalschedule' : {
                itemtap: 'onSessionTap'
            },
            'conferencetoggle' : {
                initialize: 'onToggleInitialize',
                tap: 'onConferenceToggleChange'
            },
            'schedulecard' : {
                painted: 'onSchedulePainted'
            },
            'sessionpanel' : {
                painted: 'onSessionPanelPainted'
            },
            'addbtn' : {
                tap: 'onAddTap'
            }
        },

        refs: {
            schedulecard: '#scheduleCard',
            sessionpanel: '#sessionpanel',
            homeschedulelist: '#homeScheduleList',
            personalschedule: '#PersonalSchedule',
            conferencetoggle: 'button[name="showboth"]',
            scheduleday: '#scheduleCard scheduledataview',
            back: 'backbutton',
            mainview: 'mainview',
            addbtn: '#addbutton'
        }
    },

    titleFilters: {
        'June7' : 'thursday',
        'June8' : 'friday',
        'June9' : 'saturday'
    },

    /**
     * Show the other conference or not?
     *
     * @var Boolean
     */
    showOtherConference: false,

    /**
     * setDOMListeners:
     * Fired when the addToSchedule button is pressed.
     */
    setDOMListeners: function() {
        var selectedEl = Ext.get('selectedBtn');
        this.setElementHandler('click', selectedEl, this.onSelectedTap);
    },

    /**
     * Bind handler to element.
     * @param String eventName
     * @param Object element
     * @param ? handlerRef
     */
    setElementHandler: function(eventName, element, handlerRef) {
        if (element) {
            element.on(eventName, handlerRef, this);
        }
    },

    /**
     * Fired on tap of HomeSession item.
     * Switch to Schedule view & Detail view of Talk.
     *
     * @param Object cmp      - Component (this)
     * @param Number idx      - Index
     * @param Object dataitem - Target
     * @param Model  record   - Record
     */
    onHomeSessionTap: function(cmp, idx, dataitem, record, event) {
        if (this.isTriggeredByFavorite(event)) {
            return true;
        }

        this.getMainview().setActiveItem(1);
        this.onSessionTap(cmp, idx, dataitem, record, event);
    },

    /**
     * Trigger after Schedule has been Painted.
     * Call setToolbar, and toggleOtherConference to check if we need to show/hide the other conference talks.
     */
    onSchedulePainted: function(cmp) {
        this.setToolbar();
        this.toggleOtherConference();
        this.onScheduleTabChange(Ext.getCmp('scheduleTabs').getActiveItem());
        this.setDOMListeners();
    },

    /**
     * Set the label for the conference toggler
     * @param Object cmp - Button
     */
    onToggleInitialize: function(cmp) {
        cmp.setText(Dmpc.app.appStrings.showOther);
    },

    /**
     * Set the Toolbar.
     * Currently unused.
     */
    setToolbar: function() { },

    /**
     * Fired when changing the value of the Toggle button.
     * Sets a variable to either true or false, and calls
     * toggleOtherConference()
     *
     * @param Object button    - The Button
     * @param Object event   - The Event
     */
    onConferenceToggleChange: function(button, event) {
        if (!this.showOtherConference) {
            this.showOtherConference = true;
            button.addCls('other-enabled');
        } else {
            this.showOtherConference = false;
            button.removeCls('other-enabled');
        }

        this.toggleOtherConference();
    },

    /**
     * Get the other conference name.
     * Ie. if current conference app is DPC, return DMC.
     *
     * @return String  - Other conference key
     */
    getOtherConference: function() {
        var currentConference = Dmpc.app.variant;
        if (currentConference == 'dpc') {
            return 'dmc';
        }
        return 'dpc';
    },

    /**
     * Toggle the other conference's sessions.
     */
    toggleOtherConference: function() {
        var otherConferenceCls = this.getOtherConference(),
            otherElements = Ext.DomQuery.select('div.' + otherConferenceCls),
            currentElements = Ext.DomQuery.select('div.' + Dmpc.app.variant + ', div.both'),
            me = this;
        Ext.each(otherElements, function(element) {
            element.parentNode.style.display = (me.showOtherConference == true) ? 'block' : 'none';
        });
        Ext.each(currentElements, function(element) {
            element.parentNode.style.display = 'block';
        });
    },

    /**
     * Filter the schedule when changing tabs.
     * @param cmp
     */
    onScheduleTabChange: function(cmp) {
        var store = cmp.getStore(),
            id = cmp.getId();

        if (id !== 'PersonalSchedule') {
            store.clearFilter();
            store.filter('day', this.titleFilters[id]);
        }

        this.toggleOtherConference();
    },

    /**
     * Show Talk detail when selecting a talk.
     *
     * @param Object cmp      - Component (this)
     * @param Number idx      - Index
     * @param Object dataitem - Target
     * @param Model  record   - Record
     * @param Object event    - Event object
     */
    onSessionTap: function(cmp, idx, dataitem, record, event) {
        var data = record.data;

        if (data.conference === 'both') {
            return true;
        }

        if (this.isTriggeredByFavorite(event)) {
            return true;
        }

        if (!this.sessionView) {
            this.sessionView = Ext.create('Dmpc.view.Session');
        }

        Ext.getCmp('sessionDetail').setData(data);
        this.sessionView.getScrollable().getScroller().scrollTo(0,0);
        Ext.Viewport.animateActiveItem(this.sessionView, {type: 'slide', direction: 'left'});
    },

    /**
     * The selected button has been tapped.
     * Remove from personal schedule if it was present, otherwise add to personal schedule.
     */
    onSelectedTap: function(event, element) {
        var splitted = element.href.split('#'),
            model = Ext.create('Dmpc.model.Tracklist'),
            OfflineScheduleStore = Ext.getStore('OfflineSchedule'),
            talk = OfflineScheduleStore.getById(splitted[splitted.length - 1]),
            tracklistStore = Ext.getStore('Tracklist');

        // If the talk is null, we are probably in the personal schedule section.
        if (talk === null) {
            talk = tracklistStore.getById(splitted[splitted.length - 1]);
        }

        // Still no talk found, fallback to onAddTap function.
        if (talk === null) {
            return this.onAddTap();
        }

        var currentRecordFound = this.isTrackSelected(tracklistStore, talk);
        tracklistStore.remove(this.getRemoveFromPersonalSchedule(tracklistStore, talk));

        // If we found the exact data, the user toggled the button OFF. In this case we only remove and not add.
        if (!currentRecordFound) {
            model.setData(talk.data);
            tracklistStore.add(model);
        }
        tracklistStore.sync();
        OfflineScheduleStore.load();

        this.updateTalkDetail(!currentRecordFound);

        if (currentRecordFound) {
            Ext.Msg.alert('My Tracklist', 'Removed the session from your tracklist');
            return true;
        }
        Ext.Msg.alert('My Tracklist', 'Added the session to your tracklist');
    },

    /**
     * onAddTap:
     *
     * When adding a session to your personal schedule from the sessionDetail screen we first create the Tracklist
     * model with the data found in the view. Than we remove all conflicting talks from your personal schedule.
     * Finally we add the new talk to your schedule and inform the user of the change.
     */
    onAddTap: function() {
        var record = Ext.getCmp('sessionDetail').getData(),
            tracklistStore = Ext.getStore('Tracklist'),
            model = Ext.create('Dmpc.model.Tracklist'),
            store = Ext.getStore('OfflineSchedule');

        // Create model with record data.
        model.setData(record);

        // Perform actual remove.
        tracklistStore.remove(this.getRemoveFromPersonalSchedule(tracklistStore, model));

        // Add data and sync store.
        tracklistStore.add(model);
        tracklistStore.sync();
        store.load();

        this.updateTalkDetail(true);

        Ext.Msg.alert('My Tracklist', 'Added the session to your tracklist');
    },

    /**
     * Update the talk Detail page fav star so it reflects the talks new status.
     *
     * @param boolean added  - Was the talk just added or not?
     */
    updateTalkDetail: function(added) {
        var elements = Ext.DomQuery.select('div.talkDetail a#selectedBtn');

        Ext.each(elements, function(element) {
            if (added) {
                // Add class
                element.setAttribute('class', 'selectedButton selected');
            }
            else {
                // Remove class
                element.setAttribute('class', 'selectedButton');
            }
        });
    },

    /**
     * getRemoveFromPersonalSchedule checks which talks need to be removed from your personal schedule when
     * adding a new talk.
     *
     * @param Object store - The store holding all of your currently selected talks.
     * @param Object talk  - The talk which you want to add.
     * @return Array       - The conflicting tracks.
     */
    getRemoveFromPersonalSchedule: function(store, talk) {
        var remove = [];

        // Check for existing record on this day/timeslot, if found add to remove array.
        store.each(function (record) {
            if (record.data.day == talk.data.day &&
                (record.data.time == talk.data.time ||
                    record.data.talk_type == 'tutorial 6h' ||
                    talk.data.talk_type == 'tutorial 6h')) {

                remove.push(record);
            }
        });

        return remove;
    },

    /**
     * isTrackSelected checks whether or not a talk is present on your current schedule.
     *
     * @param Object store - The store holding all of your currently selected talks.
     * @param Object talk  - The talk which you want to check for presence on the personal schedule.
     * @return Boolean     - Is the talk selected or not?
     */
    isTrackSelected: function(store, talk) {
        var selected = false;

        store.each(function (record) {
            if (record.data.title == talk.data.title && record.data.day == talk.data.day) {
                selected = true;
            }
        });

        return selected;
    },

    /**
     * isTriggeredByFavorite takes the event that's been triggered
     * and checks if this is the favorite button
     *
     * @param Object event  - The event that's been triggered
     * @return Boolean      - Wether this is the favorite button or not
     */
    isTriggeredByFavorite: function(event) {
        if (!event.target || event.target.innerText.trim().length != 0) {
            return false;
        }

        return true;
    }
});