var WH40K = WH40K||{}
WH40K.Character = function(element){
    var self = this;
    self.element = jQuery(element);
    jQuery(self.element).click(function(){
        self.engine.showMoveRadius(self);
    });

		jQuery(self.element).mousedown(function (){
				return false;
		});

    self.injectEngine = function(engine){
        self.engine = engine;
    }

    self.getElement = function(){
        return self.element;
    }
}



