
const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('datatype',{
        // id: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        // },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        }

    })
}