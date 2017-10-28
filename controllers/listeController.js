const query = require('./../model/liste');

//Permet d'afficher la liste des articles
function liste(req,res){
  if (!req.session.admin === true) {
    res.send('ERROR404')
}
  query.getAll().then(function(resultat,err){
    if(err) throw err;
    res.render('liste', {home:resultat});
  })
}
//Permet de supprimer un article par ID
function supprimeListe(req, res) {
   query.deleteId(req).then(function (resultat, err) {
       if (err) throw err;
       res.redirect('/liste')
   })
 }
//Permet de publier un article par ID
function postV (req, res) {
    query.articleVisible(req).then(function(resultat, err){
        if (err) throw err;
        res.redirect('/liste');
    })
}
//Permet de retirer un article de la publication par ID
function postI(req, res) {
    query.articleInvisible(req).then(function(resultat, err){
        if (err) throw err;
        res.redirect('/liste');
    })
}

module.exports = {
  liste : liste,
  supprimeListe : supprimeListe,
  postV : postV,
  postI : postI
};
