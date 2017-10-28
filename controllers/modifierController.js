const query = require('./../model/modifier');

//affiche article à modifier
function article(req,res,next){
  query.getarticle(req).then(function(resultat,err){
      if(err) throw err;
    res.render('modifier_post', {home:resultat});
  })
}

//modifie article
function upArt(req,res){
  query.updateArticle(req).then(function(resultat,err){
         if (err) throw err;
         res.redirect('/liste');
    });
}

module.exports = {
  article :article,
  upArt : upArt
};
