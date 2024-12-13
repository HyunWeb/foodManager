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
          type: DataTypes.ENUM("한식", "중식", "양식"),
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
          allowNull: false
        },
        mealtype: {
          type: DataTypes.ENUM("아침", "점심", "저녁", "간식"),
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