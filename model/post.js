//Déclaration de notre connexion SQL
const connSql = require('../configuration/mysqlConf');


//Requete SQL qui permet de selectionne un article par ID
function getPostarticle(req) {
  return connSql.then(function(conn){
    let resultat = conn.query("SELECT * FROM posts WHERE id = ?",[req.params.view]);
      return resultat
  });
}

module.exports = {
  getPostarticle : getPostarticle,
};
