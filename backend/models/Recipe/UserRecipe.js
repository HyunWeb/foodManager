/**
 * userrecipe 모델 정의
 * @param {import('sequelize').Sequelize} Sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */



const UserRecipe = (Sequelize, DataTypes) => {
    return Sequelize.define(
        "userRecipe",
        {},
        {
            tableName: "userRecipe",
            freezeTableName: true,
            timestamps: false,
        }
    );
};

module.exports = UserRecipe;