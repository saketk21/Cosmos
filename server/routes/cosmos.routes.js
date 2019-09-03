module.exports = ( app ) => {
	const controller = require( '../controllers/cosmos.controller.js' );

	app.post( '/api/expenses', controller.create );
	app.get( '/api/expenses', controller.findAll );
	app.get( '/api/expenses/:expenseId', controller.findOne );
	app.put( '/api/expenses/:expenseId', controller.update );
	app.delete( '/api/expenses/:expenseId', controller.delete );

};