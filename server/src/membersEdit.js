const express = require('express');
const moment = require('moment-timezone');
const upload = require(__dirname + '/upload-module');
const db = require(__dirname + '/db_connect');

const router = express.Router();
const sql = "INSERT INTO `users`(`username`, `pwd`, `name`) VALUES (?, ?, ?)";

router.get('/', (req, res)=>{
    res.send('會員修改 api')
});

// 會員修改
// http://localhost:3009/membersEdit/edit
router.post('/edit', (req, res)=>{ 
// router.post('/edit', upload.none(), (req, res)=>{ // upload.none() 回傳的是 表單欄位 每一個的值，并包裝成對象
    const output = {
        success: false,
    }
    let name = req.body.name;
    let phoneNumber = req.body.phoneNumber;
    let address = req.body.address;
    let id = req.body.id;

    const sql = "UPDATE `users` SET `name`=?, `phoneNumber`=?, `address`=? WHERE `id`=?"; 
    // console.log(id);
    db.query(sql, [name, phoneNumber, address, id])                   
        .then(([results])=>{
            output.results = results;
            if(results.affectedRows && results.changedRows){
                output.success = true;
            }
            // console.log(output);
            res.json(output);
        })

})


module.exports = router;
