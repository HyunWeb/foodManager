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
            }
        },
        {
            tableName: "userLog",
            freezeTableName: true,
            timestamps: false,
        }
    );
};

Child.removeAttribute("id");
Child.primaryKeyAttributes = ['userID', 'logID']; // 복합키 설정

module.exports = UserLog;