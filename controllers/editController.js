//Model edit.js
const query = require('./../model/edit');

//Controller /edit

//Affiche page edit
function edit(req,res){
  query.getAllPost().then(function(resultat,err){
    if(err) throw err;
    res.render('edit', {edit:resultat});
  });
}

//Permet d'ajouter un article
function write(req,res){
  if(req.files){
    let monImage = req.files.image;
    let filename = monImage.name;
    monImage.mv("./public/img/upload/img_"+ filename, function(err){
      if(err) {
        return res.status(500).send(err);
      }
      query.ajouterArticle(req,filename).then(function(resultat,err){
             if (err) throw err;

        });
        res.redirect('/edit');
    });
  }
}

module.exports = {
  edit : edit,
  write : write
};
