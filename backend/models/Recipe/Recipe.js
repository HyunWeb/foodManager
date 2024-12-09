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
                type: DataTypes.INTEGER,  // NUMBER -> INTEGER로 수정
                primaryKey: true,
                autoIncrement: true,
            },
            userID: {
                type: DataTypes.STRING(20),
                allowNull: false,
                references: {
                    model: 'user',  // 외래 키 설정: 'user' 테이블을 참조
                    key: 'userID',  // 참조할 칼럼
                },
                onDelete: 'CASCADE',  // 사용자가 삭제되면 이 게시물도 삭제
                onUpdate: 'CASCADE',  // 사용자가 업데이트되면 게시물도 업데이트
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
            }
        },
        {
            tableName: "recipe",
            freezeTableName: true,
            timestamps: true,  // createdAt, updatedAt 자동 생성
        }
    );
};

module.exports = Recipe;  // module.export -> module.exports
