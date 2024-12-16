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
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      userID: {
        type: DataTypes.STRING(20),
        allowNull: false,
        references: {
          model: "user",
          key: "userID",
        },
      },
      category: {
        type: DataTypes.ENUM(
          "Vegetables & Fruits",
          "Meat, Seafood & Eggs",
          // dairy product가 더 좋을 것 같음
          "milk Products",
          "Seafood",
          "Rice, Grains & Nuts",
          "Frozen Foods",
          "Seasonings",
          "Bread, Rice Cakes & Jam",
          "Kimchi",
          "etc"
        ),
        allowNull: false,
      },
      groceryname: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      unit: {
        type: DataTypes.STRING(10),
        allowNull: false,
        defaultValue: "g",
      },
      expiration: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      tableName: "grocery",
      freezeTableName: true,
      timestamps: false,
    }
  );
};

module.exports = Grocery;
