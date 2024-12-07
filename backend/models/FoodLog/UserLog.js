/**
 * userlog 모델 정의
 * @param {import('sequelize').Sequelize} Sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */



const UserLog = (Sequelize, DataTypes) => {
    return Sequelize.define(
        "userLog",
        {},
        {
            tableName: "userLog",
            freezeTableName: true,
            timestamps: false,
        }
    );
};

module.exports = UserLog;