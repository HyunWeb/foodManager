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
            stepNo: {
                type: DataTypes.NUMBER,
                primaryKey: true,
                autoIncrement: true,
            },
            content: {
                type: DataTypes.TEXT,
                allowNull: false,
            }
        }
    )
}