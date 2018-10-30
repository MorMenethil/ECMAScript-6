let user = {
    name: 'zs',
    age: '18',
    gender: '男'
}

// const { name, age, gender } = user

// username = 'ls'

// console.log(name)
// console.log(age)
// console.log(gender)

const { name: username, age: userage, gender } = user

console.log(username)
console.log(userage)
console.log(gender)

let {n:rr, m} = {n: "张三", m: 18}
console.log(rr)
console.log(m)




