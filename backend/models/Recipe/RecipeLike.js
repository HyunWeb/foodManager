/**
 * recipelike 모델 정의
 * @param {import('sequelize').Sequelize} Sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */


/**
 * recipelike 모델 정의
 * @param {import('sequelize').Sequelize} Sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */

const RecipeLike = (Sequelize, DataTypes) => {
    return Sequelize.define(
        "recipeLike",
        {
            userID: {
                type: DataTypes.INTEGER,  // NUMBER -> INTEGER
                primaryKey: true,
                allowNull: false,
            },
            recipeID: {
                type: DataTypes.INTEGER,  // NUMBER -> INTEGER
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
