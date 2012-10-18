/**
 * Different helper functions wich can be used in views/templates
 */
Ext.define('Dmpc.view.HelperFunctions', {

    /**
     * Get Is Selected Class.
     * Returns whether or not a talk has been selected for the custom schedule.
     *
     * @param String title   - The title of the talk.
     * @param String day  - The day of the talk.
     */
    getIsSelectedClass: function(title, day) {
        var selectedCls = '',
            selected = false,
            store = Ext.getStore('Tracklist');

        store.each(function (record) {
            if (record.data.title == title && record.data.day == day) {
                selected = true;
            }
        });

        if (selected == true) {
            selectedCls = 'selected';
        }
        return selectedCls;
    },

    /**
     * Return the short title if available
     *
     * @param shortTitle string - The short title
     * @param longTitle string - normal title
     * @return string
     */
    getTitle: function(shortTitle, longTitle) {
        if (shortTitle && shortTitle != '') {
            return shortTitle;
        }

        return longTitle;
    }

});
