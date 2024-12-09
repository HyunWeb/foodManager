/**
 * userlog 모델 정의
 * @param {import('sequelize').Sequelize} Sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */



const UserLog = (Sequelize, DataTypes) => {
    return Sequelize.define(
        "userLog",
        {
            logID: {
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
            tableName: "userLog",
            freezeTableName: true,
            timestamps: false,
        }
    );
};

module.exports = UserLog;