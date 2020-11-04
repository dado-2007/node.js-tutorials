const fs = require('fs')

// const file = fs.readFileSync('file.txt', 'utf-8')

// console.log(file)

// fs.writeFileSync('created-by-node.txt', file)

fs.readFile('file.txt', 'utf8', function(err, data) {
  fs.writeFile('written-by-app.txt', data, (e, r) => {
    if(e) {
      console.log('error', e)
    }
  })
})