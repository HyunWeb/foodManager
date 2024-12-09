/**
 * userposting 모델 정의
 * @param {import('sequelize').Sequelize} Sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */



const UserPosting = (Sequelize, DataTypes) => {
    return Sequelize.define(
        "userPosting",
        {
            postingID: {
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
            tableName: "userPosting",
            freezeTableName: true,
            timestamps: false,
        }
    );
};

module.exports = UserPosting;