var WH40K = WH40K||{}
WH40K.Engine = function (){
    var self = this;
    self.activeUnit = null;
    self.initialize = function(){
        jQuery(document).bind('ACTIVATE_UNIT', function(e, originalEvent, unit){
            self.activeUnit = unit;
            self.showMoveRadius(unit);
        });


    }

    self.showMoveRadius = function(unit){
        var element = jQuery('img', unit.getElement());
        var offset = unit.getElement().offset();
        if(typeof self.moveRadiusElement !== 'undefined'){
            self.moveRadiusElement.remove();
        }
        self.moveRadiusElement = jQuery('<div class="circle"></div>');
        unit.getElement().after(self.moveRadiusElement);
        var width = parseInt(element.width() * 13);
        var height = parseInt(element.height()  * 13);
        self.moveRadiusElement.width(width);
        self.moveRadiusElement.height(height);
        self.moveRadiusElement.offset({
            top:
            (- parseInt(height / 2)) + parseInt(element.height() / 2) + offset.top,
            left:
            (- parseInt(width / 2)) + parseInt(element.width() / 2) + offset.left
        });
    }

    
}