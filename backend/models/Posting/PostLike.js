/**
 * postlike 모델 정의
 * @param {import('sequelize').Sequelize} Sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */

const PostLike = (Sequelize, DataTypes) => {
  return Sequelize.define(
    "postLike",
    {
      userID: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      postingID: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: "postLike",
      freezeTableName: true,
      timestamps: false,
    }
  );
};

module.exports = PostLike;
