/**
 * recipecomment 모델 정의
 * @param {import('sequelize').Sequelize} Sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */


const RecipeReview = (Sequelize, DataTypes) => {
    return Sequelize.define(
      "recipeReview",
      {
        userID: {
          type: DataTypes.STRING(20),
          allowNull: false,
          references: {
            model: "user",
            key: "userID",
          },
        },
        recipeID: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: "recipe",
            key: "recipeID",
          },
        },
        rating: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
      },
      {
        tableName: "recipeReview",
        freezeTableName: true,
        timestamps: false,
      }
    );
  };

module.exports = RecipeReview;
