const express = require('express');
let router = express.Router();

const {clothes} = require('../models')

router.get('/',(req, res, next)=>{
    let page = req.query.page || 0
    let category = req.query.category
    let limit = 3

    if(category){
        category = {category: category}
    }else{ category = {} }

    clothes.findAndCountAll({
        raw: true,
        limit: limit,
        offset: page * limit,
        where: category
    }).then((result) => {
        res.json({
            totalCount: result.count,
            cloth: result.rows,
            limit: limit,
            currentPage: page
        })
    })
})

router.get('/detail', (req, res) => {
    let id = req.query.clothId

    clothes.findById(id, {
        raw: true
    }).then((result) => {
        console.log(result)
        res.json(result)
    })
})

module.exports = router;
