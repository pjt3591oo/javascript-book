let {users, boards} = require('./models')

users.create({
    name: '박정태',
    age: '26'
}).then((result) => {
    console.log(result)
})
