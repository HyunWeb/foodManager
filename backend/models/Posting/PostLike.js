/**
 * postlike 모델 정의
 * @param {import('sequelize').Sequelize} Sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */


const PostLike = (Sequelize, DataTypes) => {
    return Sequelie.define(
        "postLike",
        {
            userid: {
                type: DataTypes.NUMBER,
                primaryKey: true,
                allowNull: false,
            },
            postingID: {
                type: DataTypes.NUMBER,
                primaryKey: true,
                allowNull: false,
            }
        },
        {
            tableName: "postLike",
            freezeTableName: true,
            timestamps: false,
        }                                                                                                                                                                                                                                                                                                                                                                                                                     
    );
};

module.exports = PostLike;