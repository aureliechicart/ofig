const client = require('./database');

const dataMapper = {
    getAllFigurines : (callback) => {
        const sql = `SELECT * FROM "figurine" ORDER BY "name" ASC`;

        client.query(sql, callback);
    },
    getOneFigurine : (id, callback) => {
        const sql = `SELECT * FROM "figurine" WHERE "id" = ${id}`;

        client.query(sql, callback);
    }
};

module.exports = dataMapper;