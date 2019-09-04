const mongoose = require( 'mongoose' );

const ExpenseSchema = mongoose.Schema( {
	title: String,
	amount: Number,
	category: String
} );

module.exports = mongoose.model( 'Expense', ExpenseSchema );