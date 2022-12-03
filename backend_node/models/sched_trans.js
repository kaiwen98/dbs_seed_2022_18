module.exports = (sequelize, DataTypes) => {
    const sched_trans = sequelize.define("sched_trans", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        accountId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        receivingAccountId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        date: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        amount: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        comment: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    return sched_trans;
};