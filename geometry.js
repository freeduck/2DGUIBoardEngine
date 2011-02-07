var WH40K = WH40K||{}
WH40K.Geometry = function (){
		var self = this;
		self.getDistance = function(width, height){
				var distance = parseInt(Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2)));
				return distance;
		}
}