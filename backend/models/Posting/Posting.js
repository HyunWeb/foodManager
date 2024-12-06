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
                type: DataTypes.NUMBER,
                primaryKey: true,
                autoIncrement: true,
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
            timestamps: true,
        }
    );
};

module.export = Posting;