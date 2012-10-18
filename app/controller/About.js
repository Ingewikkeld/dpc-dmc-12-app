Ext.define('Dmpc.controller.About', {
    extend: 'Ext.app.Controller',

    config: {
        control: {
            'aboutcard': {
                initialize: 'onAboutCardInit'
            },
            'aboutright': {
                initialize: 'onAboutCardRightInit'
            },
            'aboutleft': {
                initialize: 'onAboutCardLeftInit'
            }
        },

        refs: {
            aboutcard: 'about',
            aboutright: 'aboutright',
            aboutleft: 'aboutleft'
        }
    },

    onAboutCardInit: function(cmp) {
        var variant = Dmpc.app.variant;
        if (variant == 'dpc') {
            aboutText = Dmpc.view.templates.AboutTextDPC;
        } else {
            aboutText = Dmpc.view.templates.AboutTextDMC;
        }

        cmp.setHtml(aboutText);
    },

    onAboutCardRightInit: function(cmp) {
        var variant = Dmpc.app.variant;
        if (variant == 'dpc') {
            aboutRightText = Dmpc.view.templates.AboutRightDPC;
        } else {
            aboutRightText = Dmpc.view.templates.AboutRightDMC;
        }

        cmp.setHtml(aboutRightText);
    },

    onAboutCardLeftInit: function(cmp) {
        var variant = Dmpc.app.variant;
        if (variant == 'dpc') {
            aboutLeftText = Dmpc.view.templates.AboutLeftDPC;
        } else {
            aboutLeftText = Dmpc.view.templates.AboutLeftDMC;
        }

        cmp.setHtml(aboutLeftText);
    }
});