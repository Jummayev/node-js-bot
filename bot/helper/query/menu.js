const db = require('../../../db');
const {senError} = require("../sendError");
const findByType = async (type) => {
    const [rows, fields] = await db.query('SELECT * FROM `menus` WHERE `type` = ? limit 1', [type]);
    if (!rows || !rows.length) {
        senError('Menu not found')
    }
    return rows[0] ?? {};
}

module.exports = {
    findByType
}