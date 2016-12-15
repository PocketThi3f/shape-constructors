var Shape = require('./Shape.js');

function Square(side1) {

	this.side1 = side1;
	this.side2 = side1;
	this.side3 = side1;
	this.side4 = side1;
};

Square.prototype = new Shape();

Square.prototype.constructor = Square;

module.exports = Square;
