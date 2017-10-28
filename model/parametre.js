//Déclaration de notre connexion SQL
const connSql = require('../configuration/mysqlConf');

//requete SQL qui permet d'afficher les données de la table admins
function getAllAdmin() {
  return connSql.then(function(conn){
    let resultat = conn.query('SELECT * FROM admins');
    return resultat
  });
}

//requete SQL qui permet de supprimer un modérateur par ID
function deleteModo(req) {
   return connSql.then(function (conn) {
   let resultat = conn.query("DELETE FROM `admins` WHERE `admins`.`id` = ?  ", [req.params.id]);
   return resultat
   });
}

//requete SQL qui permet d'ajouter un modérateur dans la table admins de la BDD
function ajouterModerateur(hash, req) {
  return connSql.then(function (conn) {
    let resultat = conn.query("INSERT INTO`admins`(`name`, `password`) VALUES (?, ?);", [req.body.name,hash]);
    return resultat
  });
}

module.exports = {
  getAllAdmin : getAllAdmin,
  deleteModo: deleteModo,
  ajouterModerateur : ajouterModerateur
};
