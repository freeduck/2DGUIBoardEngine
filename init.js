jQuery(document).ready( function(){
    var engine = new WH40K.Engine();
    var characters = new Array();
    
    jQuery('.character').each(function(){
        engine.initialize();
        var character = new WH40K.Character(this);
        character.injectEngine(engine);
    });
});