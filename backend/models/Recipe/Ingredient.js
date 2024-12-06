/**
 * ingredient 모델 정의
 * @param {import('sequelize').Sequelize} Sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */

const Ingredient = (Sequelize, DataTypes) => {
    return Sequelize.define(
        "ingredient", 
        {
            ingredientID: {
                type: DataTypes.NUMBER,
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
            timestamps: true,
        }
    );
};

module.export = Ingredient;