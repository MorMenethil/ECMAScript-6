// 1.导入 http核心模块
const http = require('http')

// 2. 调用 http.createServer 方法，创建一个web服务器对象
//通过 第二步 创建的 server 服务器，并不能监听任何客户端的请求；同时它也没有启动
const server = http.createServer()

// 3. 为 server 服务器 绑定监听函数，通过on方法，绑定request事件，来监听客户端的请求

server.on('request',(req,res) => {
    // 可以通过request 事件，来监听并处理客户端的请求
    // req表示客户端，相关的参数
    // res表示和服务器相关的参数和方法
    // 解决中文乱码
    res.writeHeader(200,{
        'Content-type':'text/html; charset=utf-8'
    })
    res.end('你好，世界')
})

// 4. server.listen 来启动服务器
server.listen(3000,()=>{
    console.log('server running at http://127.0.0.1:3000')
})