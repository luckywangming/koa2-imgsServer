const Router = require('koa-router')
const requireDirectory = require('require-directory')

class InitManger {
  static initCore(app) {
    //入口方法
    InitManger.app = app
    InitManger.initLoadRouters()
  }

  static initLoadRouters() {
    const apiDirectory = `${process.cwd()}/api`
    requireDirectory(module, apiDirectory, { visit: whenLoadModule })

    function whenLoadModule(obj) {
      if (obj instanceof Router) {
        InitManger.app.use(obj.routes())
      }
    }
  }
}

module.exports = InitManger
