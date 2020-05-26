const Koa=require('koa');
const app=new Koa();
const bodyparser=require('koa-bodyparser');   //引入中间件

app.use(bodyparser());

app.use(async(ctx)=>{
    if(ctx.url==='/' && ctx.method==='GET'){
       //显示表单页面
       let html=
           ` <h1>koa2 请求POST</h1>
            <form method="POST" action='/'>
                <p>username</p>
                <input type="text"/> <br/>
                <p>age</p>
                <input type="text"/><br/>
                <p>website</p>
                <input type="text"/><br/>
                <button type="submit">submit</button>
            </form>`;
        ctx.body=html;    
    }else if(ctx.url==='/' && ctx.method==='POST'){
        console.log(ctx.request.body)
        let postData=ctx.request.body;
        
        ctx.body=postData
       
    }else{
       ctx.body=`<h1>404</h1>`
    }
})

app.listen(3030,()=>{
    console.log('port is 3030')
})