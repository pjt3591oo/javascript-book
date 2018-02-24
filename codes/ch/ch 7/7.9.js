let {users, boards} = require('./models')

users.destroy({
    where: { id: 2 }
}).then((r) => {
    console.log(r)
})
