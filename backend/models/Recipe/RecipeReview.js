/**
 * recipecomment 모델 정의
 * @param {import('sequelize').Sequelize} Sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */


const RecipeReview = (Sequelize, DataTypes) => {
    return Sequelie.define(
        "recipeReview",
        {
            review: {
                type: DataTypes.NUMBER,
                allowNull: false,
            }
        },
        {
            tableName: "recipeReview",
            freezeTableName: true,
            timestamps: false  ,
        }                                                                                                                                                                                                                                                                                                                                                                                                                     
    );
};

module.exports = RecipeReview;