/**
 * recipe 모델 정의
 * @param {import('sequelize').Sequelize} Sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */

const Recipe = (Sequelize, DataTypes) => {
    return Sequelize.define(
      "recipe",
      {
        recipeID: {
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
        title: {
          type: DataTypes.STRING(20),
          allowNull: false,
        },
        describe: {
          type: DataTypes.STRING(50),
          allowNull: false,
        },
        category: {
          type: DataTypes.ENUM("한식", "중식", "양식"),
          allowNull: false,
        },
        level: {
          type: DataTypes.ENUM("상", "중", "하"),
          allowNull: false,
        },
        time: {
          type: DataTypes.ENUM("15min", "30min", "60min", "etc"),
          allowNull: false,
        },
        createdAt: {
          type: DataTypes.DATE,
          defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
          allowNull: false,
        },
        updatedAt: {
          type: DataTypes.DATE,
          defaultValue: Sequelize.literal("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"),
          allowNull: false,
        },
      },
      {
        tableName: "recipe",
        freezeTableName: true,
        timestamps: false,
      }
    );
  };

module.exports = Recipe;  // module.export -> module.exports
