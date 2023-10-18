import postsmodel from '../models/postsModel.js'

// Create a post

 const createPost = async (req, res) =>{
try{
const newPost= req.body;
const createdPost = await postsmodel.create(newPost);
return res.status(201).json({"message": "post uploaded", createdPost})
}
 catch (error){
    res.status(500).json({error: 'An error occourred  while creating the post', error});
}};


//  get post by id
 const getPost = async (req, res) => {
try {
    const postId = req.params.id;
    const post = await post.findById(postId);
if(!post){
    return res.status(404).json({error: 'post not found'});
}
res.json(posts);
    
} catch (error) { res.status(500).json({error: 'An error occured while fetching post.'})  
}
 };


//  get all posts
const getAllPosts = async(req,res)=>{
try {
    const posts = await posts.findAll();
    res.json(posts);
} catch (error) {
    res.status(500).json({error: 'An error occured while fetching posts.'});
}
};

// update post by id

const updatePost = async (req,res) =>{
    try {
        const postId = req.params.id;
        const updatedPost = await post.findByIdAndUpdate(postId, req.body,{new:true});
        res.json(updatedPost);
    } catch (error) {
       res.status(500).json({error: 'an error occurred while updating the post'});
    }
};


// delete post

const deletePost = async(req,res)=>{
    try {
        const postId = req.params.id;
        await post.findByIdAndDelete(postId);
        res.json({message: 'Post deleted successfully'});
    } catch (error) {
        res.status(500).json({error: 'An error occurred, could not delete post'});
    }
}


 export default {createPost, getPost, getAllPosts, updatePost, deletePost};
