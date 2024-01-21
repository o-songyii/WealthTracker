const pool = require('../utils/mysql')

exports.findAll = (req,res) => {
    pool.getConnectionPool((conn)=>{
        const sql = "SELECT * FROM user_daily_record;"
        conn.query(sql, (err,doc)=> {
            if(err) console.log(err)
            else {
                console.log(doc)
                res.json(doc);
            }
            conn.release();
        })
    })
}