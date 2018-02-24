let {users, boards} = require('./models')

users.find({raw: true}).then((result) => {
    console.log(result)
})
