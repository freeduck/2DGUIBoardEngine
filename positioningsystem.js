var WH40K = WH40K||{}
WH40K.PositioningSystem = function (){
		var self=this;
		self.canMove = true;
		self.initialize = function(){
				jQuery(document).bind('ACTIVATE_UNIT', function(e, originalEvent, unit){
            self.activeUnit = unit;
						self.recordOriginalPositionOfActiveUnit(originalEvent);
        });

				jQuery(document).bind('UNIT_MOVE', function(e, originalEvent, unit){
						if(unit === self.activeUnit){
								self.moveActiveUnit(originalEvent);
						}
        });
		}

		self.recordOriginalPositionOfActiveUnit = function(){
				var offset = self.activeUnit.getElement().offset();
				self.origianlPosition = {x: offset.left + 25, y: offset.top + 25};
		}

		self.moveActiveUnit = function(moveEvent){
				if(!self.canMove){
						return;
				}
				self.canMove = false;
        var element = self.activeUnit.getElement();
        var offset = element.offset();
				
				var width =  moveEvent.pageY - self.origianlPosition.y;

				var height = moveEvent.pageX - self.origianlPosition.x;
				var distance = parseInt(Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2)));
				if(distance > 300){
						self.canMove = true;
						return;
				}
				var units = self.unitRepository.getAll();
				var unitDist = 0;
				for(i = 0; i < units.length; i++){
						if(self.activeUnit !== units[i]){
								curUnit = units[i];
								unitDist = self.calculateDistance({left: moveEvent.pageX, top: moveEvent.pageY}, units[i]);
								if(unitDist <= 0){
										self.canMove = true;
										return;
								}
						}
				}

				
        element.offset({
            top: moveEvent.pageY - parseInt(element.height() / 2),
            left: moveEvent.pageX - parseInt(element.width() / 2)
            });
				self.canMove = true;
    }

		self.injectUnitRepository = function(repo){
				self.unitRepository = repo;
		}

		self.calculateDistance = function(activeOffset, targetUnit){
				//activeOffset = activeUnit.getElement().offset();
				targetOffset = targetUnit.getElement().offset();
				var x = (activeOffset.left) - (targetOffset.left + 25);
				var y = (activeOffset.top) - (targetOffset.top + 25);
				var distance = parseInt(Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2))) - 50;
				return distance;
		}
}