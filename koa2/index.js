const Koa=require('koa');
const app=new Koa();
app.use(async(ctx)=>{
    ctx.body='hello beizou'
})

app.listen(3010)
console.log('app is staring at port 3000')