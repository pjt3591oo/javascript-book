let {users, boards} = require('./models')

users.update({
    name: 'pjt'
}, {
    where: { id: 2 }
}).then(( ) => {
    console.log('end')
})
