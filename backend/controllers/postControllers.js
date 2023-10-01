const PostModel = require('../models/postModel.js');

module.exports.getPosts = async (req,res) => {
    try {
    const posts = await PostModel.find()
    if(!posts){
        res.status(400).json({
            message:"erreur de posts !"
        });
    }
    res.status(200).json(posts);
    } catch (e) {
        res.status(400).json(e);
    }
}
module.exports.setPost = async (req,res) => {
    try {
        if(!req.body.message || !req.body.author){
            res.status(400).json({
                message:"Ajouter une contenu à votre message !"
            });
        }
        console.log("envoi d'un post",req.body.message , req.body.author)
        
        const post = await PostModel.create({
            message: req.body.message,
            author: req.body.author,
            stars: 0,
        });
        console.log("ok")
        res.status(200).json(post);
    } catch (err) {
        console.log("pas ok")
        res.status(400).json(err);
    }
}
module.exports.editPost = async (req,res) => {
    try {
        console.log("Édition d'un post byId:",req.params.id)
        const post = await PostModel.findById(req.params.id);

        if(!post){
            console.log("ce Post n'existe pas !")
            res.status(400).json({message:"ce Post n'existe pas !"});
        }
        const updatePost = await PostModel.findByIdAndUpdate(
            post,
            req.body,
            {new:true}
        )
        console.log("Édition réussie !")
        res.status(200).json(updatePost);
    } catch (e) {
        res.status(400).json(e);
    }
}
module.exports.deletePost = async (req,res) => {
    try {
        const post = await PostModel.findById(req.params.id);
        
        if(!post){
            res.status(400).json({message:"ce Post n'existe pas !"});
        }
        else {

            const postToDElete = await PostModel.findByIdAndDelete(
                { _id:req.params.id}
            );
            if(!postToDElete){
                res.status(400).json({message:"ce Post n'existe pas !"});
            }
            res.status(200).json({message:"Post de "+post.author+" effacer."});
        }
    } catch (e) {
        res.status(400).json(e);
    }
}
module.exports.likePost = async (req, res) => {
    try {
        await PostModel.findByIdAndUpdate(
            req.params.id,
            { $addToSet: { likers: req.body.userId } },
            { new: true }
        )
        .then((data) => {
            console.log(res.params)
            console.log(req.body)

            res.status(200).send(data)
        });
    } catch (e) {
        res.status(400).json(e);
    }
};

module.exports.dislikePost = async (req, res) => {
    try {
        await PostModel.findByIdAndUpdate(
            req.params.id,
            { $pull: { likers: req.body.userId } },
            { new: true }
        )
        .then((data) => res.status(200).send(data));
    } catch (e) {
        res.status(400).json(e);
    }
};