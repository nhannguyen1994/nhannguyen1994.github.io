/**
 * type = 1: thing
 * type = 2: animal
 */
class Thing {
  constructor(name, photo, type) {
    this.name = name
    this.photo = photo
	  this.type = type
  }
}
//TODO: Tung hãy điền hết các thing và animal vào đây
let allthings = []

allthings.push(new Thing('Bird', 'bird.png', 2))
allthings.push(new Thing('Bus', 'bus.png', 1))
allthings.push(new Thing('Car', 'car.png', 1))
allthings.push(new Thing('Cat', 'cat.png', 2))
allthings.push(new Thing('Seahorse', 'seahorse.png', 2))
allthings.push(new Thing('Turtle', 'turtle.png', 2))
allthings.push(new Thing('TV', 'Tv.png', 1))

console.log(allthings)
//TODO: hãy hoàn một function sau đây. Giao cho đội Vue.js
/**
 *
 * @param type = 0 lấy tất cả
 * type = 1, trả về thing, không phải animal
 * type = 2, trả về animal only
 */
function getThing(type) {

}

exports.getThing = getThing