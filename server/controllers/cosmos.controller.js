const Expense = require( '../models/expense.model.js' );

// Create and Save a new Expense
exports.create = ( req, res ) => {
	// Validate request
	if ( !req.body.amount ) {
		return res.status( 400 ).send( {
			message: "Expense Amount can not be empty"
		} );
	}

	// Create a Expense
	const expense = new Expense( {
		title: req.body.title || "Untitled Expense",
		amount: req.body.amount,
		category: req.body.category
	} );

	// Save Expense in the database
	expense.save()
		.then( data => {
			res.send( data );
		} ).catch( err => {
			res.status( 500 ).send( {
				message: err.message || "Some error occurred while creating the Expense."
			} );
		} );
};

// Retrieve and return all expenses from the database.
exports.findAll = ( req, res ) => {
	let queryObj = {};
	if ( req.query ) {
		queryObj = {
			category: req.query.category
		};
	}
	Expense.find( queryObj )
		.then( expenses => {
			res.send( expenses );
		} ).catch( err => {
			res.status( 500 ).send( {
				message: err.message || "Some error occurred while retrieving expenses."
			} );
		} );
};

// Find a single expense with a expenseId
exports.findOne = ( req, res ) => {
	Expense.findById( req.params.expenseId )
		.then( expense => {
			if ( !expense ) {
				return res.status( 404 ).send( {
					message: "Expense not found with id " + req.params.expenseId
				} );
			}
			res.send( expense );
		} ).catch( err => {
			if ( err.kind === 'ObjectId' ) {
				return res.status( 404 ).send( {
					message: "Expense not found with id " + req.params.expenseId
				} );
			}
			return res.status( 500 ).send( {
				message: "Error retrieving expense with id " + req.params.expenseId
			} );
		} );
};

// Update a expense identified by the expenseId in the request
exports.update = ( req, res ) => {
	// Validate Request
	if ( !req.body.amount ) {
		return res.status( 400 ).send( {
			message: "Expense amount can not be empty"
		} );
	}
	// Find expense and update it with the request body
	Expense.findByIdAndUpdate( req.params.expenseId, {
			title: req.body.title || "Untitled Expense",
			amount: req.body.amount,
			category: req.body.category
		}, {
			new: true
		} )
		.then( expense => {
			if ( !expense ) {
				return res.status( 404 ).send( {
					message: "Expense not found with id " + req.params.expenseId
				} );
			}
			res.send( expense );
		} ).catch( err => {
			if ( err.kind === 'ObjectId' ) {
				return res.status( 404 ).send( {
					message: "Expense not found with id " + req.params.expenseId
				} );
			}
			return res.status( 500 ).send( {
				message: "Error updating expense with id " + req.params.expenseId
			} );
		} );
};

// Delete a expense with the specified expenseId in the request
exports.delete = ( req, res ) => {
	Expense.findByIdAndRemove( req.params.expenseId )
		.then( expense => {
			if ( !expense ) {
				return res.status( 404 ).send( {
					message: "Expense not found with id " + req.params.expenseId
				} );
			}
			res.send( {
				message: "Expense deleted successfully!"
			} );
		} ).catch( err => {
			if ( err.kind === 'ObjectId' || err.name === 'NotFound' ) {
				return res.status( 404 ).send( {
					message: "Expense not found with id " + req.params.expenseId
				} );
			}
			return res.status( 500 ).send( {
				message: "Could not delete expense with id " + req.params.expenseId
			} );
		} );
};