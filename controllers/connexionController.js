// Model connexion.js
const query = require('./../model/connexion');

//bcrypt
const bcrypt = require('bcrypt');
const saltRounds = 10;

//Controller connexion page /login

// fonction login
function connexionGet(req, res) {
    res.render('login');
}

//Authentification
function connexionPost(req, res) {
    let name = req.body.name;
    let password = req.body.password;
    query.connexionPost(req).then(function (resultat, err) {
        if (err) throw err;
        if (resultat.length === 1) {
            bcrypt.compare(password, resultat[0].password, function (err, resCompare) {
                if (resCompare === true) {
                    if (resultat[0].role === 1) {
                        req.session.admin = true;
                        req.session.moderateur = true;
                        res.redirect('/admin');
                    } else {
                        req.session.moderateur = true;
                        res.redirect('/moderateur');
                    }
                } else {
                    req.session.moderateur = false;
                    res.redirect('/login')
                }
            });
        } else {
            res.redirect('/login');
        }
    });
}

//Permet la déconnexion de la session active
function deconnexion(req, res) {
    req.session.destroy(function (err) {
        if (err) {
            console.log(err);
        } else {
          res.redirect('/');
        }
    });
}

module.exports = {
    connexionGet: connexionGet,
    connexionPost: connexionPost,
    deconnexion : deconnexion
};
