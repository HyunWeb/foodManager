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
            content: {
                type: DataTypes.TEXT,
                allowNull: false,
            }
        },
        {
            tableName: "posting",
            freezeTableName: true,
            timestamps: true,  // createdAt, updatedAt 자동 생성
        }
    );
};

module.exports = Posting;
