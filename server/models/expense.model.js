const mongoose = require( 'mongoose' );

const ExpenseSchema = mongoose.Schema( {
	title: String,
	amount: mongoose.Types.Decimal128,
	category: String
} );

module.exports = mongoose.model( 'Expense', ExpenseSchema );