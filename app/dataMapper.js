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
    },
    figurineCategoryCounter: (category, callback) => {
        const sql = `SELECT COUNT (*) FROM "figurine" WHERE "category" = $1`;

        client.query(sql, [category], callback);
    },
    getFigurinesByCategory: (category, callback) => {
        const sql = `SELECT * FROM "figurine" WHERE "category" ~~* $1`;
        client.query(sql, ["%" + category + "%"], callback);
    },
    getAllReviews: (callback) => {
        const sql = `SELECT * FROM "review"`;
        client.query(sql, callback);
    }
};

module.exports = dataMapper;