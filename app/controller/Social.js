Ext.define('Dmpc.controller.Social', {
    extend: 'Ext.app.Controller',

    config: {
        control: {
            'socialcard': {
                initialize: 'onSocialCardInit'
            },
            'socialright': {
                initialize: 'onSocialCardRightInit'
            },
            'socialleft': {
                initialize: 'onSocialCardLeftInit'
            }
        },

        refs: {
            socialcard: 'social',
            socialright: 'socialright',
            socialleft: 'socialleft'
        }
    },

    onSocialCardInit: function(cmp) {
        var variant = Dmpc.app.variant,
            socialText = '';

        if (variant == 'dpc') {
            socialText = Dmpc.view.templates.SocialTextDPC;
        } else {
            socialText = Dmpc.view.templates.SocialTextDMC;
        }

        cmp.setHtml(socialText);
    },

    onSocialCardRightInit: function(cmp) {
        var variant = Dmpc.app.variant,
            socialRightText = '';

        if (variant == 'dpc') {
            socialRightText = Dmpc.view.templates.SocialRightDPC;
        } else {
            socialRightText = Dmpc.view.templates.SocialRightDMC;
        }

        cmp.setHtml(socialRightText);
    },

    onSocialCardLeftInit: function(cmp) {
        var variant = Dmpc.app.variant,
            socialLeftText = '';

        if (variant == 'dpc') {
            socialLeftText = Dmpc.view.templates.SocialLeftDPC;
        } else {
            socialLeftText = Dmpc.view.templates.SocialLeftDMC;
        }

        cmp.setHtml(socialLeftText);
    }
});