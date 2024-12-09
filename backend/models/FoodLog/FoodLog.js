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
            category: {
                type: DataTypes.ENUM("한식", "중식", "양식"),
                allowNull: false,
            },
            foodname: {
                type: DataTypes.STRING(20),
                allowNull: false,
            }, 
            mealtype: {
                type: DataTypes.ENUM("아침", "점심", "저녁", "간식"),
                allowNull: false,
            },
            when: {
                type: DataTypes.DATEONLY,
                allowNull: false,
            }
        },
        {
            tableName: "foodLog",
            freezeTableName: true,
            timestamps: true,
        }
    );
};

module.exports = FoodLog;