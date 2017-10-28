// Model comment.js
const query = require('./../model/comment');

// Controller pour les commentaires

//Permet d'ajouter un commentaire 
function comment(req,res){
  query.ajouterCommentaire(req).then(function(resultat,err){
   if (err) throw err;
    });
  res.redirect('/post/voir/:view');
}

module.exports = {
    comment: comment,
  };
