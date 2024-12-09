/**
 * recipelike 모델 정의
 * @param {import('sequelize').Sequelize} Sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */


const RecipeLike = (Sequelize, DataTypes) => {
    return Sequelie.define(
        "recipeLike",
        {
            userid: {
                type: DataTypes.NUMBER,
                primaryKey: true,
                allowNull: false,
            },
            recipeID: {
                type: DataTypes.NUMBER,
                primaryKey: true,
                allowNull: false,
            }
        },
        {
            tableName: "recipeLike",
            freezeTableName: true,
            timestamps: false,
        }                                                                                                                                                                                                                                                                                                                                                                                                                     
    );
};

module.exports = RecipeLike;