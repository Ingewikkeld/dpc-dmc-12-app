Ext.define('Dmpc.controller.Travel', {
    extend: 'Ext.app.Controller',

    config: {
        control: {
            'travelmap' : {
                activate: 'onTravelcardShow'
            },
            'travelcard': {
                show: 'onTravelcardShow'
            },
            'locationselector': {
                check: 'onLocationSelected'
            },
            'hometravel' : {
                check: 'onHometravelTap'
            },
            'travelbuttons': {
                toggle: 'onTravelbuttonToggle'
            }
        },

        refs: {
            hometravel: '#hometravel > radiofield',
            locations: 'travellocations',
            travelcard: 'travel',
            travelmap: 'travelmap',
            locationselector: 'radiofield',
            travelbuttons: 'travelbuttons',
            mainview: 'mainview'
        },

        views: [
            'CmpTransport',
            'CmpTravelLocations',
            'CmpTravelMap',
            'CmpTravelDirections'
        ]
    },

    /** Google maps starting position **/
    startPos: (new google.maps.LatLng(52.22, 4.53)),

    /** Google maps map object **/
    map: null,

    /** Google maps directions render object  **/
    directionsDisplay: null,

    /** Destination location for rendering **/
    location: 'Europaplein 1 Amsterdam',

    /** Google Maps Travel method (DRIVING/WALKING) **/
    travelmethod: google.maps.DirectionsTravelMode.DRIVING,

    /** Travel locations synchronisation state **/
    syncInProgress: false,

    /** Indicator if the travel buttons have been set for the profile **/
    travelButtonsSet: false,

    /**
     * Synchronise travel location radio fields
     */
    syncTravelLocations: function() {
        if (this.syncInProgress == true) {
            return true;
        }
        this.syncInProgress = true;

        var location = this.location,
            radiofields = Ext.ComponentQuery.query('radiofield');

        Ext.each(radiofields, function(radiofield){
            if (radiofield._value == location) {
                radiofield.setChecked(true);
            } else {
                radiofield.setChecked(false);
            }
        });

        this.syncInProgress = false;
    },

    /**
     * show the travel card
     */
    onHometravelTap: function(cmp) {
        this.location = cmp._value;
        this.getMainview().setActiveItem(2);
    },

    /**
     * set the destination and reload the travelcard
     * @param cmp Component that fired the event
     */
    onLocationSelected: function(cmp) {
        this.location = cmp._value;
        this.onTravelcardShow();
    },

    /**
     * Set the TravelMode in Google Maps, and update other
     * travelbuttons selected value.
     *
     * @param cmp  The component toggled.
     * @param button The button pressed
     * @param isPressed Boolean if the button is in a pressed state
     */
    onTravelbuttonToggle: function(cmp, button, isPressed) {
        var index = 0;

        if (!isPressed) {
            return true;
        }

        switch(button.getText())
        {
            case 'Walk':
                index = 1;
                this.travelmethod = google.maps.DirectionsTravelMode.WALKING;
                break;
            case 'Car':
            default:
                index = 0;
                this.travelmethod = google.maps.DirectionsTravelMode.DRIVING;
                break;
        }

        var travelButtonsArray = Ext.ComponentQuery.query('travel travelbuttons');
        Ext.each(travelButtonsArray, function(buttons){
            buttons.setPressedButtons(index);
        });
        this.onTravelcardShow();
    },

    /**
     * Create the map and call the directions service
     */
    onTravelcardShow : function () {
        var me = this;

        this.syncTravelLocations();

        if (!this.travelButtonsSet) {
            this.setSegmentedButtons();
        }

        if (!this.map) {
            this.map = Ext.getCmp('mapPanel').getMap();
        }

        if (!this.directionsDisplay) {
            this.directionsDisplay = new google.maps.DirectionsRenderer();
        }

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(pos) {
                if (pos) {
                    me.startPos = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
                    me.directionsDisplay.setMap(null);
                    me.scrollMap();
                }
            }, this.scrollMap, {timeOut: 3000});
        } else {
            Ext.Msg.alert('No geolocation', "Geolocation is not supported by your device.");
        }

    },

    /**
     * Set the state of the segmented buttons per profile
     */
    setSegmentedButtons: function() {

    },

    /**
     * Create the directions to the venus
     */
    scrollMap: function() {
        var me = this,
            start = me.startPos,
            end = me.location,
            directionsPanel = document.getElementById('directionsPanel'),
            directionService = new google.maps.DirectionsService(),
            request = {
                origin: start,
                destination: end,
                travelMode: me.travelmethod
            };
        directionsPanel.innerHTML = '';

        me.directionsDisplay.setMap(me.map);
        me.directionsDisplay.setPanel(directionsPanel);

        directionService.route(request, function(response, status) {
            if (status == google.maps.DirectionsStatus.OK) {
                me.directionsDisplay.setDirections(response);
            }
        });
    }
});