let {users, boards} = require('./models')

users.findAndCountAll({raw: true}).then((result) => {
    console.log(result.count)
    console.log(result.rows)
})
