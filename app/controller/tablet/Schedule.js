Ext.define('Dmpc.controller.tablet.Schedule', {
    extend: 'Dmpc.controller.Schedule',

    onSessionTap: function(cmp, idx, dataitem, record, event) {
        var data = record.data,
            sessionPanel = Ext.getCmp('sessionpanel');

        if (data.conference === 'both') {
            return true;
        }

        if (this.isTriggeredByFavorite(event)) {
            return true;
        }

        if (!this.sessionView) {
            this.sessionView = Ext.create('Dmpc.view.Session');
            this.sessionView.query('titlebar')[0].hide();
        }

        Ext.getCmp('sessionDetail').setData(data);
        sessionPanel.setHtml('');
        this.sessionView.getScrollable().getScroller().scrollTo(0,0);
        sessionPanel.animateActiveItem(this.sessionView, {type: 'slide', direction: 'left'});
    },

    setToolbar: function() {
        Ext.getCmp('scheduletoolbar').hide();
    },

    onSessionPanelPainted: function(cmp) {
        var variant = Dmpc.app.variant;

        if (this.sessionPanelIsPainted === true) {
            return true;
        }
        this.sessionPanelIsPainted = true;

        if (variant == 'dpc') {
            initText = Dmpc.view.templates.InitialScheduleDPC;
        } else {
            initText = Dmpc.view.templates.InitialScheduleDMC;
        }

        cmp.setHtml(initText);
    }

});