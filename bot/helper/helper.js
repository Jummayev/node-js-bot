const db = require('../../db');
const user = require('./query/user');
const menu = require('./query/menu');

module.exports = {
    user,
    menu,
}