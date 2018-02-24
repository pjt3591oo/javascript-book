let {users, boards} = require('./models')

users.findById(1, {raw: true}).then((result) => {
    console.log(result)
})
