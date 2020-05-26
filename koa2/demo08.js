//koa-router 中间件

const Koa = require('koa');
const Router=require('koa-router')
const app = new Koa();

//子路由
let home = new Router();
home
    .get('/jspang',async(ctx)=>{
       ctx.body="Home jspang page"
    })
    .get('/todo',async(ctx)=>{
        ctx.body="Home todo page"
     })

let page=new Router();
page
    .get('/jspang',async(ctx)=>{
       ctx.body="Page jspang page"
    })
    .get('/todo',async(ctx)=>{
        ctx.body="Page todo page"
     })


//父级路由
let router=new Router()
//装载子路由
router.use('/home',home.routes(),home.allowedMethods());
router.use('/page',page.routes(),page.allowedMethods());

//父路由装载到中间件
app.use(router.routes()).use(router.allowedMethods())


app.listen(3001,()=>{
    console.log('part is 3001')
})