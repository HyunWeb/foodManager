/**
 * step 모델 정의
 * @param {import('sequelize').Sequelize} Sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */

const Step = (Sequelize, DataTypes) => {
    return Sequelize.define(
        "step",
        {
            recipeID: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,  // 복합키의 일부
            },
            stepNo: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,  // 복합키의 일부
            },
            content: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
        },
        {
            tableName: "step",
            freezeTableName: true,
            timestamps: false,
            indexes: [
                {
                    unique: true,
                    fields: ['recipeID', 'stepNo'], // recipeID와 stepNo를 복합키로 설정
                },
            ],
        }
    );
};

module.exports = Step;
