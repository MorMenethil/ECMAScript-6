// 1.导入 fs 文件操作模块
let fs = require('fs')

fs.readFile(__dirname + '/成绩.txt', 'utf8',(err,datastr)=>{
    if(err) return console.log('读取文件失败' + err.message)
    // console.log(datastr)
    let arr = datastr.split(' ');
    // console.log(arr)

    let newArr = []
    arr.forEach(item => {
        if(item.length > 0) {
            let newScore = item.replace('=',':')
            // console.log(newScore)
            newArr.push(newScore)
            // console.log(newArr)
        }
    })
    fs.writeFile(__dirname + '/成绩 - ok.txt', newArr.join('\n'),(err)=>{
        if(err) return console.log('写入文件失败' + err.message)
        console.log('处理成绩成功')
    })
})