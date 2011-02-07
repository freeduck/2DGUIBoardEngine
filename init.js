jQuery(document).ready( function(){
    var engine = new WH40K.Engine();
    var characters = new Array();
    var unitFactory = new WH40K.UnitFactory;
		var unitRepository = new WH40K.UnitRepository();
		var positioningSystem = new WH40K.PositioningSystem;
		positioningSystem.injectUnitRepository(unitRepository);
		engine.initialize();
		positioningSystem.initialize();
		var character = unitFactory.createUnit(100, 50);
		character.injectEngine(engine);
		unitRepository.add(character);
		character = unitFactory.createUnit(200, 200);
		character.injectEngine(engine);
		unitRepository.add(character);
});