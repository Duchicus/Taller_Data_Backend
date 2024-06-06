const mongoose = require('mongoose');
const ObjectId = mongoose.SchemaTypes.ObjectId;

const DataSchema = new mongoose.Schema(
	{
	    customer_id: String,
        gender: String,
        age:String,
        category:String,
        quantity:String,
        price:String,
        payment_method:String,
        invoice_date:String,
        shopping_mall:String,
        n_visits:Number,
	},
	{ timestamps: true }
);

DataSchema.index({ customer_id: 'text' });

DataSchema.methods.toJSON = function () {
	const data = this._doc;
	delete data.__v;
	return data;
};

const data = mongoose.model('data', DataSchema);

module.exports = data;
