/**
 * userposting 모델 정의
 * @param {import('sequelize').Sequelize} Sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */



const UserPosting = (Sequelize, DataTypes) => {
    return Sequelize.define(
        "userPosting",
        {},
        {
            tableName: "userPosting",
            freezeTableName: true,
            timestamps: false,
        }
    );
};

module.exports = UserPosting;