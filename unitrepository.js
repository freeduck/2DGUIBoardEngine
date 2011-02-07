var WH40K = WH40K||{}
WH40K.UnitRepository = function (){
		var self = this;
		self.units = new Array();
		self.add = function(unit){
				for(i = 0; i < self.units.length; i++){
						currentUnit = self.units[i];
						if(currentUnit === unit){
								return;
						}
				}
				id = self.units.length;
				self.units[id] = unit;
				unit.getElement().attr('id', 'character' + id);
		}

		self.getAll = function(){
				return self.units;
		}
}