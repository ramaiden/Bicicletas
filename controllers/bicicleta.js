var Bicicleta = requiere('../models/Bicicleta');

exports.bicicleta_list = function(req,res){
    res.render('Bicicletas/index',{bicis: Bicicleta.allBicis});
}
