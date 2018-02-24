let {users, boards} = require('./models')

users.findAll({
    include: [
        {
            model: boards
        }
    ],
    raw: true
}).then((result) => {
    console.log(result)
})
