//koa-router 中间件

const Koa = require('koa');
const Router=require('koa-router')
const app = new Koa();
const router=new Router({
    // prefix:'beizou'    //添加层级
});

router
    .get('/',(ctx,next)=>{
        ctx.body='beizou'
    })
    .get('/index',(ctx,next)=>{
        ctx.body='index page'
    })

app.use(router.routes()).use(router.allowedMethods())


app.listen(3001,()=>{
    console.log('part is 3001')
})