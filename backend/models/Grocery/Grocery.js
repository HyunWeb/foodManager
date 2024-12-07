/**
 * grocery 모델 정의
 * @param {import('sequelize').Sequelize} Sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */

const Grocery = (Sequelize, DataTypes) => {
    return Sequelize.define(
        "grocery", 
        {
            groceryID: {
                type: DataTypes.NUMBER,
                primaryKey: true,
                autoIncrement: true,
            },
            category: {
                type: DataTypes.ENUM("채소", "육류/가공육", "유제품"), // 카테고리 더 추가하기
                allowNull: false,
            },
            groceryname: {
                type: DataTypes.STRING(10),
                allowNull: false,
            },
            expiration: {
                type: DataTypes.DATEONLY,
                allowNull: false
            }
        },
        {
            tableName: "user",
            freezeTableName: true,
            timestamps: false,
        }
    );
};

module.export = Grocery;