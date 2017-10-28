//Déclaration de notre connexion SQL
const connSql = require('../configuration/mysqlConf');

//Requete SQL qui permet d'afficher les articles par ordre descendant
function getAll() {
  return connSql.then(function(conn){
    let resultat = conn.query('SELECT * FROM posts WHERE posted = "1" ORDER BY posts.date DESC');
    return resultat
  });
}

module.exports = {
  getAll : getAll
};











