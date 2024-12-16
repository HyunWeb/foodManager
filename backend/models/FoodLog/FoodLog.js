/**
 * foodlog 모델 정의
 * @param {import('sequelize').Sequelize} Sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */

const FoodLog = (Sequelize, DataTypes) => {
  return Sequelize.define(
    "foodLog",
    {
      logID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      userID: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      category: {
        type: DataTypes.ENUM(
          "Chicken",
          "Chinese Food",
          "Japanese Food",
          "Fast Food",
          "Stews & Boiled Dishes",
          "Meat",
          "Korean Fast Food",
          "Café & Desserts",
          "Korean Food",
          "Western Food",
          "Asian Food",
          "Lunch Box",
          "Salad",
          "Snacks",
          "etc"
        ),
        allowNull: false,
      },
      foodname: {
        type: DataTypes.STRING(20),
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
      kcal: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      mealtype: {
        type: DataTypes.ENUM("Breakfast", "Lunch", "Dinner", "Snack", "Night"),
        allowNull: false,
      },
      when: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
    },
    {
      tableName: "foodLog",
      freezeTableName: true,
      timestamps: false,
    }
  );
};

module.exports = FoodLog;
