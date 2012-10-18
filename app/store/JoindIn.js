Ext.define('Dmpc.store.JoindIn', {
    extend: 'Ext.data.Store',
    requires: [
        'Dmpc.model.JoindInComment',
        'Ext.data.proxy.JsonP'
    ],

    config: {
        model: 'Dmpc.model.JoindInComment',
        proxy: {
            type: 'jsonp',
            noCache: false,
            url: 'http://api.joind.in/v2/talks/0/comments?format=json',
            reader: {
                type: 'nestedjson',
                rootProperty: 'comments',
                depth: 0,
                blackList: ['meta']
            }
        }
    },

    dpcIds: [
        6217,
        6218,
        6219,
        6220,
        6221,
        6222,
        6223,
        6224,
        6225,
        6226,
        6227,
        6228,
        6229,
        6230,
        6231,
        6232,
        6233,
        6236,
        6237,
        6239,
        6240,
        6241,
        6242,
        6243,
        6244,
        6245,
        6246,
        6247,
        6248,
        6249,
        6250,
        6251,
        6252,
        6253,
        6254,
        6255,
        6256,
        6257,
        6258,
        6259,
        6260,
        6261
    ],
    dmcIds: [
    ],

    /**
     * Load both DPC/DMC comments.
     */
    loadAll: function() {
        this.loadDMC();
        this.loadDPC();
    },

    /**
     * Load all DPC comments.
     */
    loadDPC: function() {
        for (var i = 0; i < this.dpcIds.length; i++) {
            this.loadComments(this.dpcIds[i]);
        }
    },

    /**
     * Load all DMC comments.
     */
    loadDMC: function() {
        for (var i = 0; i < this.dmcIds.length; i++) {
            this.loadComments(this.dmcIds[i]);
        }
    },

    /**
     * Load Comments: Set the JoinedIn Proxy URL using the provided id and load the comments with 'addRecords' set to
     * true. This will prevent records previously loaded to be overwritten.
     *
     * @private
     * @param Integer id  - The ID of the talk for which to load comments.
     */
    loadComments: function(id) {
        this.getProxy().setUrl('http://api.joind.in/v2.1/talks/'+id+'/comments?format=json');
        this.load({'addRecords': true});
    }
});