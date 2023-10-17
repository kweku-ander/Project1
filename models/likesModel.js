import sequelize from "../db/dbConfig.js";
import Datatypes from "sequelize";

const postLikes = sequelize.define("likes", {
    id: {
        type: Datatypes.UUIDV4,
        defaultValue: Datatypes.UUIDV4,
        primarykey: true,
    },
    user_id: {
        type: Datatypes.UUIDV4,
        References: {
            model: "users",
            key: "id"
        }
    },
    post_id: {
        type: Datatypes.UUIDV4,
        References: {
            model: "posts",
            key: "id"
        }
    }
});

(async () => {
    await sequelize.sync()
})();

export default postLikes;