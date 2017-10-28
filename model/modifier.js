//Déclaration de notre connexion SQL
const connSql = require('../configuration/mysqlConf');

//requete SQL qui permet de selectionné un article par ID
function getarticle(req) {
  return connSql.then(function(conn){
    let resultat = conn.query("SELECT * FROM posts WHERE id = ?",[req.params.view]);
    return resultat
  });
}

//requete SQL qui permet de modifer l'article dans la BDD
function updateArticle(req) {
  return connSql.then(function(conn){
    let requete = "UPDATE `posts` SET `title`=?, `content`=?, `writer`=? WHERE `id`=?;";
    let resultat = conn.query(requete, [req.body.title, req.body.content,req.body.writer,req.params.view]);
    return resultat
    });
  }

module.exports = {
  getarticle : getarticle,
  updateArticle : updateArticle
};
