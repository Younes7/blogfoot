// Model admin.js
const query = require('./../model/admin');

//Controller page /admin

//Selectionne les commentaires envoyés par les utilisateurs en attente de validation
function admin(req,res){
  if (!req.session.admin === true) {
    res.send('ERROR404')
}
  query.getAdmin().then(function(resultat,err){
    if(err) throw err;
    res.render('admin', {rows:resultat});
  });
}

// Supprime le commentaire selectionne par ID
function deleteComment(req,res){
  query.deleteComment(req).then(function(resultat,err){
    if(err) throw err;
  });
  res.redirect('/admin');
}

// Permet de poster le commentaire une fois validé par l'adminstrateur
function afficherComment(req,res){
  query.afficherComment(req).then(function(resultat,err){
    if(err) throw err;
  });
  res.redirect('/admin');
}
//Permet d'afficher la page modérateur
function moderateur(req, res) {
    res.render('moderateur');
}

module.exports = {
  admin: admin,
  deleteComment : deleteComment,
  afficherComment : afficherComment,
  moderateur : moderateur,
};
