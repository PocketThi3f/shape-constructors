var Shape = require('./Shape.js');

function Triangle(side1, side2, side3) {

	this.side1 = side1;
	this.side2 = side2;
	this.side3 = side3;
};

Triangle.prototype = Object.create(Shape.prototype);

Triangle.prototype.constructor = Triangle;

module.exports = Triangle;
