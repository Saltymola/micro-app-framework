import sum from './compute.js' ;

onmessage = function(e) {
  if (e.data === 'total') {
    let total = 1;
    total =sum(1);
    console.log('Worker: Posting message back to main script');
    postMessage(total);
  }
}