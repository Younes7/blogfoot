//Déclaration de notre connexion SQL
const connSql = require('../configuration/mysqlConf');

//Requete SQL pour selectionné les articles
function getAllPost() {
  return connSql.then(function(conn){
    let resultat = conn.query('SELECT * FROM posts');
    return resultat
  });
}

//Requete SQL pour insérer un article dans la BDD
function ajouterArticle(req,filename) {
  return connSql.then(function(conn){
    var nouveauArticle = {title:req.body.title, description:req.body.description, content:req.body.content, writer:req.body.writer,image:filename};
    let resultat = conn.query('INSERT INTO posts SET ?',nouveauArticle);
    return resultat
  });
}

module.exports = {
  getAllPost : getAllPost,
  ajouterArticle : ajouterArticle

};
