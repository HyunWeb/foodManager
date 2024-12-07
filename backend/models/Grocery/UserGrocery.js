/**
 * usergrocery 모델 정의
 * @param {import('sequelize').Sequelize} Sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */



const UserGrocery = (Sequelize, DataTypes) => {
    return Sequelize.define(
        "userLog",
        {
            groceryID: {
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
            tableName: "userGrocery",
            freezeTableName: true,
            timestamps: false,
        }
    );
};

module.exports = UserGrocery;