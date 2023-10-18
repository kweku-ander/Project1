import likesModel from "../models/likesModel.js";

// Getting Likes
const getPostLike = async (req, res) => {
    try {
        const addNewlike = req.body.id;
        if (addNewlike) {
            const newLike = await likesModel.create(addNewlike);
            return res.status(201).json({ message: "successful..." })
        }

    } catch (error) {
        return res.status(500).json({ message: "failed", error })
    }};


// Getting All Likes
const getAllLikes = async (req, res) => {
    try {
        const likes = await likesModel.find({ where: { id } })
        if (likes) {
            return res.status(200).json({ message: "Successful" });
        }
    } catch (error) {
        return res.status(500).json({ message: "Failed...", error })
    }
}

// Deleting
const deleteLike = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedPostLike = await likesModel.destroy(id);
        return res.status(200).json({ message: "Deleted successfully" });
    } catch (error) {
        return res.status(500).json({ massage: "Error Unliking", error })
    }
};

export default { getPostLike, getAllLikes, deleteLike };