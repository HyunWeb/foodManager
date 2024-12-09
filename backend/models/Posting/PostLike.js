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
                primaryKey: true,  // 복합 기본키의 일부로 사용
            },
            postingID: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,  // 복합 기본키의 일부로 사용
            }
        },
        {
            tableName: "postLike",
            freezeTableName: true,
            timestamps: false,  // createdAt, updatedAt을 사용하지 않음
        }
    );
};

module.exports = PostLike;
