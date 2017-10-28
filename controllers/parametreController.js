const query = require('./../model/parametre');
const bcrypt = require('bcrypt');
const saltRounds = 10;

//Affiche la liste des modérateurs
function parametre(req,res){
  if (!req.session.admin === true) {
    res.send('ERROR404')
}
  query.getAllAdmin().then(function(resultat,err){
    if(err) throw err;
    res.render('parametre', {parametre:resultat});
  });
}
//permet de supprimer les modérateurs
function deleteModo(req, res) {
   query.deleteModo(req).then(function (resultat, err) {
       if (err) throw err;
       res.redirect('/parametre')
   });
 }
//permet d'ajouter des modérateurs
function modo(req, res) {
    bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
        query.ajouterModerateur(hash, req).then(function (resultat, err) {
            if (err) throw err;

            res.redirect('/parametre')
        });
    });
}

module.exports = {
  parametre : parametre,
  deleteModo : deleteModo,
  modo : modo
};
