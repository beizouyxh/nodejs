// function getSomething(){
//     return 'something'
// }

// async function testAsync(){
//     return 'js'
// }

// async function test(){
//     // await 必须在async 下使用  可以调用普通和 async 两种方式的函数
//     const v1= await getSomething();
//     const v2 =await testAsync()
//     console.log(v1,v2)
// }

// test()

function takeLongTime(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve("longtime");
        },3000)
    })
}

async function test(){
    const v =await takeLongTime();
    console.log(v)
}

test()