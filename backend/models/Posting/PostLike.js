/**
 * postlike 모델 정의
 * @param {import('sequelize').Sequelize} Sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */


const PostLike = (Sequelize, DataTypes) => {
    return Sequelie.define(
        "postLike",
        {},
        {
            tableName: "postLike",
            freezeTableName: true,
            timestamps: false,
        }                                                                                                                                                                                                                                                                                                                                                                                                                     
    );
};

module.exports = PostLike;