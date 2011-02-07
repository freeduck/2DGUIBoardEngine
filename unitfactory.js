var WH40K = WH40K||{}
WH40K.UnitFactory = function (){
		var self = this;
		self.createUnit = function(x, y){
				unitElement = jQuery('<div class="character" style="top: ' + y + 'px; left: ' + x + 'px"><img id="50sprite" src="images/unit.png" class="character-sprite" /></div>');
				jQuery('body').append(unitElement);
				return new WH40K.Character(unitElement);
		}
}