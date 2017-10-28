//Middleware utilisé pour la nav bar afin d'avoir un nav bar différentes pour l'admin et les modérateurs

module.exports = {
    ifLogin: function (req, res, next) {
        if (req.session.moderateur == null) {
            res.locals.moderateur = false;
        } else {
            res.locals.moderateur = req.session.moderateur;
        }
        next();
    },  ifAdmin: function (req, res, next) {
        if (req.session.admin == null) {
            res.locals.admin = false;
        } else {
            res.locals.admin = req.session.admin;
        }
        next();
    },
};
