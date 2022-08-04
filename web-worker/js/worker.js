onmessage = function(e) {
  if (e.data === 'total') {
    let total = 1;
    const sum = require('./compute.js') ;
    total =sum(1);
    console.log('Worker: Posting message back to main script');
    postMessage(total);
  }
}