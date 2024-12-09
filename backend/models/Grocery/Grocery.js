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
                type: DataTypes.ENUM("채소", "육류/가공육", "유제품", "과일", "곡물", "음료"), // 카테고리 확장
                allowNull: false,
            },
            groceryname: {
                type: DataTypes.STRING(10),
                allowNull: false,
            },
            expiration: {
                type: DataTypes.DATEONLY,
                allowNull: false,
            },
        },
        {
            tableName: "grocery", // 테이블 이름 수정
            freezeTableName: true,
            timestamps: false,
        }
    );
};

module.exports = Grocery;
