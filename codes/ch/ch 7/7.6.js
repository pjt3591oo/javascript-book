let {users, boards} = require('./models')

let name = '철수'
let age = 26

users.findOrCreate({
    where: {name: name},
    defaults: {
        name: name,
        age: age
    }
}).spread((user, created) => {
    console.log(user)
    console.log(created)
})
