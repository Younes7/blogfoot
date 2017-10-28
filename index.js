//Déclaration de connexion à la base de donnée SQL
const connSql = require('./configuration/mysqlConf');

//configuration express JS
const express = require('express');
const app = express();

//Déclaration file-upload pour les images
const fileUpload = require('express-fileupload');
app.use(fileUpload());

//configuration bodyParser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//Déclaration de method-override
const methodOverride = require('method-override');
app.use(methodOverride('_method'));
app.use(methodOverride(function (req, res) {
   if (req.body && typeof req.body === 'object' && '_method' in req.body) {
       var method = req.body._method;
       delete req.body._method;
       return method
   }
}));

//Déclaration de bcrypt
var bcrypt = require('bcrypt');
const saltRounds = 10;

//express-session
const session = require('express-session');
app.use(session({
    secret: 'kfgudrydrh',
    resave: true,
    saveUninitialized: true,
}));


// middleware maison
const middleware = require('./middleware/middleware');

app.use(function (req, res, next) {
    middleware.ifLogin(req, res, next);
});

app.use(function (req, res, next) {
    middleware.ifAdmin(req, res, next);
});


//Fichier public
app.use('/public',express.static('public'));

//configuration EJS
app.set('views', './views');
app.set('view engine','ejs');

//controllers
const home = require('./controllers/homeController');
const admin = require('./controllers/adminController');
const commentaire = require('./controllers/commentController');
const liste = require('./controllers/listeController');
const modifier = require('./controllers/modifierController');
const connexion = require('./controllers/connexionController');
const edit = require('./controllers/editController');
const parametre = require('./controllers/parametreController');
const afficherComment = require('./controllers/adminController');
const post = require('./controllers/postController');

//routes page d'accueil
app.get('/',home.home);

//routes article et commentaire
app.get('/post/voir/:view',post.post);
app.post('/post/voir/:view',commentaire.comment);

//edit
app.get('/edit',edit.edit);
app.post('/edit',edit.write);

//login
app.get('/login',connexion.connexionGet);
app.post('/login',connexion.connexionPost);
app.get('/deconnexion',connexion.deconnexion);
//

//Admin tableau de bord
app.get('/admin',admin.admin);
app.get('/moderateur',admin.moderateur);
app.delete('/admin/suppr/:id',admin.deleteComment);
app.get('/parametre',parametre.parametre);
app.post('/parametre',parametre.modo);
app.delete('/parametre/suppr/:id',parametre.deleteModo);
app.post('/admin/comment/:id',admin.afficherComment);

//Crud Articles
app.get('/liste',liste.liste);
app.get('/liste/modifier/:view',modifier.article);
app.put('/liste/modifier/:view',modifier.upArt);
app.delete('/liste/suppr/:id',liste.supprimeListe);
app.post('/liste/visible/:id',liste.postV);
app.post('/liste/invisible/:id',liste.postI);

//création serveur
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Ecoute sur le port ${PORT}`)
});
