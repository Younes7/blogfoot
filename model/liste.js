//Déclaration de notre connexion SQL
const connSql = require('../configuration/mysqlConf');

//requete SQL qui permet d'afficher tout les articles
function getAll() {
  return connSql.then(function(conn){
    let resultat = conn.query('SELECT * FROM posts');
    return resultat
  });
}

//requete SQL qui permet de supprimer les articles par id
function deleteId(req) {
   return connSql.then(function (conn) {
   let resultat = conn.query("DELETE FROM posts WHERE id  = ?", [req.params.id]);
   return resultat
   });
}

// requete SQL qui modifie la colonne posted par ID pour afficher les articles
function articleVisible(req) {
    return connSql.then(function(conn){
        let resultat = conn.query("UPDATE posts SET posted = 1 WHERE id=?",[req.params.id]);
        return resultat
    });
}

// requete SQL qui modifie la colonne posted par ID pour ne pas afficher les articles
function articleInvisible(req) {
    return connSql.then(function(conn){
        let resultat = conn.query("UPDATE posts SET posted = 0 WHERE id =?",[req.params.id]);
        return resultat
    });
}

module.exports = {
  getAll : getAll,
  deleteId : deleteId,
  articleVisible : articleVisible,
  articleInvisible : articleInvisible
};
