/**
 * postcomment 모델 정의
 * @param {import('sequelize').Sequelize} Sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */


const PostComment = (Sequelize, DataTypes) => {
    return Sequelie.define(
        "postComment",
        {
            userid: {
                type: DataTypes.NUMBER,
                primaryKey: true,
                allowNull: false,
            },
            postingID: {
                type: DataTypes.TEXT,
                primaryKey: true,
                allowNull: false,
            },
            content: {
                type: DataTypes.TEXT,
                allowNull: false,
            }
        },
        {
            tableName: "postComment",
            freezeTableName: true,
            timestamps: true,
        }                                                                                                                                                                                                                                                                                                                                                                                                                     
    );
};

module.exports = PostComment;