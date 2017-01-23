function Point(x, y) {
  this.x = x
  this.y = y
}

Point.prototype.toString = function () {
  return `(${this.x}, ${this.y})`
}

function Side(length) {
  this.length = length
}

function Shape() {
}

Shape.prototype.addToPlane = function (x, y) {
  this.position =  new Point(x, y)
}

Shape.prototype.move = function (x, y) {
  this.position = new Point(x, y)
}

//Circle

function Circle(radius) {
  Shape.call(this)
  this.radius = radius
}

Circle.prototype = Object.create(Shape.prototype)
Circle.prototype.constructor = Circle

Circle.prototype.area = function() {
  return Math.PI * this.radius^2
}

Circle.prototype.circumference = function() {
  return 2 * Math.PI *  this.radius
}

Circle.prototype.diameter = function() {
  return this.radius * 2
}

//Polygon

function Polygon(sides) {
  Shape.call(this)
  this.sides = sides
}

Polygon.prototype = Object.create(Shape.prototype)
Polygon.prototype.constructor = Polygon

Polygon.prototype.perimeter = function() {
  var sum = 0
  this.sides.forEach(function (side) {
    sum += side.length
  })
  return sum
}

Polygon.prototype.numberOfSides = function() {
  return this.sides.length
}

//Quadrilateral

function Quadrilateral(side1, side2, side3, side4) {
  Polygon.call(this, 4)
  this.sides = [new Side (side1), new Side (side2), new Side (side3), new Side (side4)]
}

Quadrilateral.prototype = Object.create(Polygon.prototype)
Quadrilateral.prototype.constructor = Quadrilateral

//Triangle

function Triangle(side1, side2, side3) {
  Polygon.call(this, 3)
  this.sides = [new Side (side1), new Side (side2), new Side (side3)]
}

Triangle.prototype = Object.create(Polygon.prototype)
Triangle.prototype.constructor = Triangle

//Rectangle

function Rectangle(width, height) {
  Quadrilateral.call(this, width, width, height, height)
  this.width = width
  this.height = height
}

Rectangle.prototype = Object.create(Quadrilateral.prototype)
Rectangle.prototype.constructor = Rectangle

Rectangle.prototype.area = function() {
  return this.width * this.height
}

//Square

function Square(length) {
  Rectangle.call(this, length, length)
  this.length = length
}

Square.prototype = Object.create(Rectangle.prototype)
Square.prototype.constructor = Square

Square.prototype.listProperties = function() {
  var uniqueString = ""
  for (var uniqueProperty in this) {
    if(this.hasOwnProperty(uniqueProperty)) {
      uniqueString += uniqueProperty
    }
  }
  return uniqueString
}
