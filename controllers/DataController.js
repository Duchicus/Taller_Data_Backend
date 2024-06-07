
const Invoice = require('../models/Invoice.js');
require('dotenv').config();
//const { JWT_SECRET, API_URL } = process.env;


const DataController = {
	async test(req, res) {
        res.status(200).send({
            msg: "test working"
        });
},
    async getAll(req, res) {
    try {
        const { page = 1, limit = 100 } = req.query;
        const totalRows= await Invoice.countDocuments()
        const data = await Invoice.find()
        .limit(limit)
        .skip((page - 1) * limit);
        res.send({msg: 'All data',
        total:totalRows,
        data});
    } catch (error) {
        console.error(error);
    }
},

}

module.exports = DataController;