//Déclaration de notre connexion SQL
const connSql = require('../configuration/mysqlConf');

//requete SQL qui permet de séléctionné les commentaires en attente de validation.
function getAdmin() {
  return connSql.then(function(conn){
    let resultat = conn.query("SELECT * FROM comments JOIN posts ON comments.post_id = posts.id WHERE comments.seen = '0' ORDER BY comments.date ASC");
    return resultat
  });
}

//requete SQL qui permet de supprimer par ID les commentaires en attente de validation.
function deleteComment(req) {
  return connSql.then(function(conn){
    let resultat = conn.query("DELETE FROM `comments` WHERE `comments`.`comment_id` = ?  ",[req.params.id]);
    return resultat
  });
}

//requete SQL qui permet de modifier la colonne seen pour validé le commentaire et l'afficher dans l'article.
function afficherComment(req) {
  return connSql.then(function(conn){
    let resultat = conn.query("UPDATE `comments` SET `seen`='1' WHERE `comment_id`= ? ",[req.params.id]);
    return resultat
  });
}

module.exports = {
  getAdmin : getAdmin,
    deleteComment : deleteComment,
    afficherComment : afficherComment
};
