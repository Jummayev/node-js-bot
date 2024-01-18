const db = require('../../../db');
const find = async (chatId) => {
    const [rows, fields] = await db.query('SELECT * FROM `users` WHERE `chat_id` = ? limit 1', [chatId]);
    if (!rows || !rows.length) {
        return false;
    }
    return rows[0] ?? {};
}
const findOrCreate = async (chatId, msg) => {
    let user = await find(chatId);
    if (!user) {
        const [result, fields] = await db.query('INSERT INTO `users` (`chat_id`, `first_name`, `last_name`, `username`) VALUES (?, ?, ?, ?)',
            [
                chatId,
                msg?.from?.first_name,
                msg?.from?.last_name,
                msg?.from?.username
            ]);
        const id = result.insertId;
        user = find(id)
    }
    return user;
}
const update = async (chatId, updatedData = {}) => {
    const params = [];
    const setFields = Object.keys(updatedData).map(key => {
        params.push(updatedData[key])
        return `${key} = ?`
    });

    if (setFields.length === 0) {
        // No valid fields to update
        console.log('No valid fields to update');
        return null;
    }

    const setClause = setFields.join(', ');
    // Construct the SQL query
    const sql = `
        UPDATE users
        SET ${setClause}
        WHERE chat_id = ?
    `;
    params.push(chatId);

    // Execute the query
    const result = await db.query(sql, params);
}
const updateAction = async (chatId, action) => {
    await update(chatId, {
        action
    });
}

module.exports = {
    find,
    findOrCreate,
    update,
    updateAction,
}