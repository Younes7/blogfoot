const queryPost = require('./../model/post');
const queryComment = require('./../model/comment');

//Affiche les articles et les commentaires
function post(req,res){
  queryPost.getPostarticle(req).then(function(resultat,err){
    if (err) throw err;
    var post = resultat;
    queryComment.getComment(req).then(function(comments,err){
      if(err) throw err;
      post[0].comments = comments;
      res.render('post',{post:post})
    });
  });
}

module.exports = {
  post:post,
};
