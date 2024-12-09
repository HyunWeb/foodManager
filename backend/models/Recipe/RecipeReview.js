/**
 * recipecomment 모델 정의
 * @param {import('sequelize').Sequelize} Sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */


const RecipeReview = (Sequelize, DataTypes) => {
    return Sequelize.define(
        "recipeReview",
        {
            recipeID: {
                type: DataTypes.INTEGER, // 레시피 ID (외래 키)
                allowNull: false,
                primaryKey: true, // 복합키의 일부로 사용
            },
            userID: {
                type: DataTypes.STRING(20), // 사용자 ID
                allowNull: false,
                primaryKey: true, // 복합키의 일부로 사용
            },
            rating: {
                type: DataTypes.INTEGER, // 리뷰 점수
                allowNull: false,
            },
        },
        {
            tableName: "recipeReview",
            freezeTableName: true,
            timestamps: true, // createdAt, updatedAt 자동 생성
            indexes: [
                {
                    unique: true,
                    fields: ['userID', 'recipeID'], // userID와 recipeID를 복합키로 설정
                }
            ]
        }
    );
};

module.exports = RecipeReview;
