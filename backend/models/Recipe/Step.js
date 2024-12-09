/**
 * step 모델 정의
 * @param {import('sequelize').Sequelize} Sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */

const Step = (Sequelize, DataTypes) => {
    return Sequelize.define(
        "step",
        {
            // recipeID: Foreign Key
            recipeID: {
                type: DataTypes.NUMBER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },
            stepNo: {
                type: DataTypes.NUMBER,
                primaryKey: true,
                allowNull: false
            },
            content: {
                type: DataTypes.TEXT,
                allowNull: false,
            }
        }
    )
}