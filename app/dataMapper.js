const client = require('./database');

const dataMapper = {
    getAllFigurines: (callback) => {
        const sql = `SELECT * FROM "figurine" ORDER BY "name" ASC`;

        client.query(sql, callback);
    },
    getOneFigurine: (id, callback) => {
        const sql = `SELECT * FROM "figurine" WHERE "id" = $1`;

        client.query(sql, [id], callback);
    },
    getAllReviewsByFigurine: (figurineId, callback) => {
        const sql = `SELECT * FROM "review" WHERE "figurine_id" = $1`;
        client.query(sql, [figurineId], callback);
    }
};

module.exports = dataMapper;