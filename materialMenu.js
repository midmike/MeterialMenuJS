 "use strict";
(function ( jQuery ) {
    var menuItemsHTML;
    jQuery.fn.popupMenu = function(options) {

        var defaults = {
            onClick : function () { },
            onMouseLeave : function() {}
        };

        var options = jQuery.extend(defaults, options);

        //Get html of menuItems
        var menuItems = jQuery('items',this);
        menuItemsHTML = jQuery('items',this)[0].innerHTML;
        var icon = jQuery('icon',this);
        var bubble;

        var widthIconExtend = icon[0].clientWidth*0.4;
        var heightIconExtend = icon[0].clientHeight*0.4;
        var bubbleWidth = icon[0].clientWidth + widthIconExtend;;
        var bubbleHeight = icon[0].clientHeight  + heightIconExtend;
        var bubbleLeft =  - widthIconExtend/2;
        var bubbleTop =  - heightIconExtend/2;

        //search bubble exist
        if(jQuery('.bubble',icon).length > 0) {
            bubble = jQuery('.bubble',icon);
        } else {
            icon.append('<div class="bubble"></div>');
            bubble = jQuery('.bubble',icon);
        }

        bubble.css('width',bubbleWidth+'px');
        bubble.css('height',bubbleHeight+'px');
        bubble.css('left',bubbleLeft+'px');
        bubble.css('top',bubbleTop+'px');

        icon.on('click', function(event) {
            TweenLite.set(bubble, {scaleX: 0, scaleY: 0, opacity: 1});
            TweenLite.to(bubble, 1.5, {scaleX: 1, scaleY: 1, opacity: 0, ease: Expo.easeOut});
            menuItems.addClass('display');

            options.onClick(event);
        });

        this.mouseleave( function(event) {
            menuItems.removeClass('display');
            options.onMouseLeave(event);
        });
        
        return this;

    };
}( jQuery ));