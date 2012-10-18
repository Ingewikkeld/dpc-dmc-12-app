Ext.define('Dmpc.lib.reader.NestedJson', {
    extend: 'Ext.data.reader.Json',
    alias : 'reader.nestedjson',

    config: {
        /**
         * @cfg {Integer} [depth=0]
         * The depth at which the objects are in the nested JSON feed. If the Depth you would like to use is 0; you
         * probably don't need the NestedJson Reader. Instead you should use the general Json reader.
         */
        depth: 0,

        /**
         * @cfg {Array} [blackList=[]]
         * It is possible to provide the NestedJson reader with a blacklist. The blacklist will skip items when the item
         * key matches an entry in the blacklist.
         */
        blackList: []
    },

    /**
     * @private
     * We're just preparing the data for the superclass by pulling out the record objects we want. If a {@link #record}
     * was specified we have to pull those out of the larger JSON object, which is most of what this function is doing
     * @param {Object} root The JSON root node
     * @return {Ext.data.Model[]} The records
     */
    extractData: function(root) {
        var data = [];

        if (this.getDepth() > 0) {
            if (Ext.isObject(root)) {
                data = this.getSubObjects(root, data);
            }
        } else {
            data = root;
        }

        return this.callParent([data]);
    },

    /**
     * @private
     * Get the sub objects of the given object.
     * By specifying a depth greater than 1 you can get nested sub objects.
     *
     * @param Object  obj       - The object of which you want the subobjects.
     * @param Array   data      - The resulting data array which eventually gets returned by this function.
     * @param Integer depth     - The depth of the subobjects you are searching for. [OPTIONAL]
     * @return Array            - The resulting array of subobjects.
     */
    getSubObjects: function(obj, data, depth) {
        var me = this;

        // Handle optional parameter.
        if (depth === undefined) {
            depth =  this.getDepth();
        }

        // Visit non-inherited enumerable keys
        Object.keys(obj).forEach(function(key) {

            // Skip blacklisted items.
            if (me.getBlackList().indexOf(key) == '-1') {
                if (depth > 1) {
                    // We need to go a level deeper.
                    var newDepth = depth - 1;
                    me.getSubObjects(obj[key], data, newDepth);
                }
                else {
                    // Yay, required depth reached, add to data array.
                    data.push(obj[key]);
                }
            }
        });

        return data;
    }
});