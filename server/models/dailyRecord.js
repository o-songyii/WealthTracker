const lib = require("../utils/mysql")

exports.findAll = async() => {
    const query = "SELECT * FROM user_daily_record;"
    rows = await lib.execute(query)
    return rows
}