const events = require('events')
const util = require('util')

const emitter = new events.EventEmitter()

// emitter.on('random-event', function(msg) {
//   console.log(msg)
// })

class Person {
  constructor(name) {
    this.name = name
  }
}

util.inherits(Person, events.EventEmitter) // Person class/objects inherit(s) events.EventEmitter.

const james = new Person('james')
const mary = new Person('mary')
const people = [james, mary]

people.forEach((individual) => {
  individual.on('speak', (msg) => {
    console.log(individual.name + ' said: ' + msg)
  })
})

james.emit('speak', 'hey dude')
mary.emit('speak', 'hello')