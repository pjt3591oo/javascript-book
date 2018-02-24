let {users, boards} = require('./models')

users.findAll({
    attributes: ['id', 'name'],
    raw: true,
    // limit: 1,
    // offset: 3,
    order: [
        ['id', 'DESC']
    ],
    where: {
        id: {
            $between: [1,3]
        }
    }
}).then((result) => {
    console.log(result)
})
