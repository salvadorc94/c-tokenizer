var tokenize = require('../')
const fs = require('fs');
var t = tokenize(function (src, token) {
  const {_readableState} = t
  const {length} = _readableState
  if(token.type != "whitespace"){
    console.log('Position '+(length+1)+' '+token.type + ' => ' + JSON.stringify(src))

    const content = 'Position '+(length+1)+' '+token.type + ' => ' + JSON.stringify(src) +'\n'
    try {
      const data = fs.writeFileSync('test.txt', content, { flag: 'a+' })
      //file written successfully
    } catch (err) {
    console.error(err)
    }
  }
})
process.stdin.pipe(t)
