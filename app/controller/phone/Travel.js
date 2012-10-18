Ext.define('Dmpc.controller.phone.Travel', {
    extend: 'Dmpc.controller.Travel',

    setSegmentedButtons: function() {
        this.travelButtonsSet = true;
        var buttons = Ext.ComponentQuery.query('travelbuttons');
        Ext.each(buttons, function(button) {
            if (button.getCls() == 'tablet') {
                button.hide();
            }
        });
    }

});