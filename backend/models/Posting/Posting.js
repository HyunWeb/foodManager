/**
 * posting 모델 정의
 * @param {import('sequelize').Sequelize} Sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */



const Posting = (Sequelize, DataTypes) => {
  return Sequelize.define(
    "posting",
    {
      postingID: {
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
      content: {
        type: DataTypes.TEXT,
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
      tableName: "posting",
      freezeTableName: true,
      timestamps: false,
    }
  );
};

module.exports = Posting;
