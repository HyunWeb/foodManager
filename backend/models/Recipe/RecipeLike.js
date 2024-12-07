/**
 * recipelike 모델 정의
 * @param {import('sequelize').Sequelize} Sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */


const RecipeLike = (Sequelize, DataTypes) => {
    return Sequelie.define(
        "recipeLike",
        {},
        {
            tableName: "recipeLike",
            freezeTableName: true,
            timestamps: false,
        }                                                                                                                                                                                                                                                                                                                                                                                                                     
    );
};

module.exports = RecipeLike;