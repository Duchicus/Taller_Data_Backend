
const Data = require('../models/Data.js');
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
        const { page = 1, limit = 10 } = req.query;
        const data = await Data.find()
        res.send({msg: 'All data', data});
    } catch (error) {
        console.error(error);
    }
},

}

module.exports = DataController;