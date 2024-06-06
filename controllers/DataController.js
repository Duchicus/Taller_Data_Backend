
const Data = require('../models/Data.js');
require('dotenv').config();
//const { JWT_SECRET, API_URL } = process.env;


const DataController = {
	async test(req, res) {
        res.status(200).send({
            msg: "test working"
        });
},
}

module.exports = DataController;