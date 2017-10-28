//Model home.js
const query = require('./../model/home');

//Afficher les articles dans la page d'accueil
function home(req,res){
  query.getAll().then(function(resultat,err){
    if(err) throw err;
    res.render('home', {home:resultat});
  });
}
module.exports = {
  home : home,
};
