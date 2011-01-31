var WH40K = WH40K||{}
WH40K.Character = function(element){
    var self = this;
    self.element = jQuery(element);
    jQuery(self.element).click(function(){
        
    });

    jQuery(self.element).mousedown(function (event){
        
        jQuery(document).trigger('ACTIVATE_UNIT', [event, self]);
        return false;
    });

    self.injectEngine = function(engine){
        self.engine = engine;
    }

    self.getElement = function(){
        return self.element;
    }
}



