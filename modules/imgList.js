// const bcrypt = require('bcryptjs')
const { sequelize } = require('../core/db')

const { Sequelize, Model } = require('sequelize')

class ImgList extends Model {

}
ImgList.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: Sequelize.TEXT,
  lists: Sequelize.TEXT,
}, {
    sequelize,
    tableName: 'img_list'
  })

module.exports = {
  ImgList
}
