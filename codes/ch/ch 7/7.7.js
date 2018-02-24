let {users, boards} = require('./models')

let datas = [
    {
        name: '정태',
        age: '26'
    },{
        name: '정보문화사',
        age: '26'
    }
]

users.bulkCreate(datas).then((result) => {
    console.log(result)
})
