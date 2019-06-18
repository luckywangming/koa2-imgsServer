const Router = require('koa-router')
const router = new Router()

const { ImgList } = require('../../modules/imgList')

router.post('/v1/imgList', async (ctx, next) => {
  console.log(ctx.request.body)
  let { currentPage = 1, count = 10 } = ctx.request.body
  let offset = (currentPage - 1) * count
  let lists = await ImgList.findAndCountAll({
    offset,
    limit:count
  }).then(res => {
    console.log(res)
    return res
  }).catch(err => {
    // console.log(err)
  })
  ctx.body = lists
})

module.exports = router
