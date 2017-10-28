//Déclaration de notre connexion SQL
const connSql = require('../configuration/mysqlConf');

// Requete SQL qui permet la visualisation des commentaires dans la page article
function getComment(req) {
    return connSql.then(function(conn){
        let resultat = conn.query("SELECT * FROM comments WHERE seen = 1 AND post_id = ?",[req.params.view]);
        return resultat
    });
}

//Requete SQL pour insérer un commentaire dans la BDD
function ajouterCommentaire(req) {
  return connSql.then(function(conn){
    var comment = {name:req.body.name,email:req.body.email,comment:req.body.comment,post_id:req.params.view}
    let resultat = conn.query('INSERT INTO comments SET ?', comment);
    return resultat
  });
}

module.exports = {
  getComment : getComment,
  ajouterCommentaire : ajouterCommentaire,
};
