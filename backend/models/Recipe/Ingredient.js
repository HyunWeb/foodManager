/**
 * ingredient 모델 정의
 * @param {import('sequelize').Sequelize} Sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */

const Ingredient = (Sequelize, DataTypes) => {
    return Sequelize.define(
        "ingredient", 
        {
            recipeID: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            ingredientID: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            ingreName: {
                type: DataTypes.STRING(10),
                allowNull: false,
            },
            amount: {
                type: DataTypes.STRING(10),
                allowNull: false,
            }
        },
        {
            tableName: "ingredient",
            freezeTableName: true,
            timestamps: true,  // Sequelize will automatically manage createdAt, updatedAt
        }
    );
};

module.exports = Ingredient;
