let {users, boards} = require('./models')

users.findAll({raw: true}).then((result) => {
    console.log(result)
})
