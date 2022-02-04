const Post = require("./../models/post");

exports.getPost = (req, res) => {
    Post.find()
        .select("_id title body")
        .then(posts => res.json({ posts }))
        .catch(err => res.json({ error: err }));
}

exports.createPost = (req, res) => {
    const post = new Post(req.body);
    post.save().then( result => {
        res.status(201).json({ post: result });
    });
}