// 1.引入http
const http = require('http')

// 2.创建服务器
const server = http.createServer()

// 3.监听请求
server.on('request',(req, res) => {
    res.writeHeader(200, {
        'Content-Type': 'text/html; charset=utf-8'
    })
    res.end('清明节快乐')
})

// 4.启动服务器
server.listen(3000,() => {
    console.log('http://127.0.0.1:3000 启动了')
})