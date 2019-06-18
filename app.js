const Koa = require('koa')
const parse = require('koa-bodyparser')

const catchError = require('./middlewares/exception')
const InitManager = require('./core/init')

const app = new Koa()
app.use(catchError)
app.use(parse())
InitManager.initCore(app)


app.listen(4000)

