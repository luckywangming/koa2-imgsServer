class HttpException extends Error {
  constructor(msg = "服务器异常", code = 400, errorCode = 10000) {
    super()
    this.errorCode = errorCode
    this.code = code
    this.msg = msg
  }
}

class ParameterException extends HttpException {
  constructor(msg, errorCode) {
    super()
    this.errorCode = errorCode || 10001
    this.code = 400
    this.msg = msg || "参数错误"
  }
}

class Success extends HttpException {
  constructor(msg, errorCode) {
    super()
    this.code = 201
    this.msg = 'ok'
    this.errorCode = errorCode || 0
  }
}

module.exports = {
  HttpException,
  ParameterException,
  Success
}
