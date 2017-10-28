//Déclaration de notre connexion SQL
const connSql = require('../configuration/mysqlConf');

//Requete SQL qui permet l'authentification 
function connexionPost(req) {
  return connSql.then(function (conn) {
    let resultat = conn.query("SELECT * FROM admins WHERE name = ?", [req.body.name]);
    return resultat
  });
}

module.exports = {
    connexionPost: connexionPost,
};
