Ext.define('Dmpc.controller.tablet.Travel', {
    extend: 'Dmpc.controller.Travel',

    setSegmentedButtons: function() {
        this.travelButtonsSet = true;
        var buttons = Ext.ComponentQuery.query('travelbuttons');
        Ext.each(buttons, function(button) {
            if (button.getCls() == 'phone') {
                button.hide();
            }
        });
    }

});