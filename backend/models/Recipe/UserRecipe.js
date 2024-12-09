/**
 * userrecipe 모델 정의
 * @param {import('sequelize').Sequelize} Sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */



const UserRecipe = (Sequelize, DataTypes) => {
    return Sequelize.define(
        "userRecipe",
        {
            recipeID: {
                type: DataTypes.NUMBER,
                allowNull: false,
                primaryKey: true,
            },
            userID: {
                type: DataTypes.STRING(20),
                allowNull: false,
                primaryKey: true,
            }
        },
        {
            tableName: "userRecipe",
            freezeTableName: true,
            timestamps: false,
        }
    );
};

module.exports = UserRecipe;