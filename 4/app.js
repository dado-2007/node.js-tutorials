console.log('hey')

setTimeout(() => {
  console.log('this program started 3 seconds ago...')
}, 3000)

let time = 0
setInterval(() => {
  time += 1
  console.log(`this is the ${time}° time this loop happens...`)
  console.log(`and ${time * 5} seconds passsed...`)
}, 5000)

setTimeout(() => {
  console.log(__dirname)
  console.log(__filename)
}, 10000)