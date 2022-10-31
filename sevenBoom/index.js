let total = 0;

function countNumbers() {
  total = total + 1;
  if (total % 7 === 0) {
    return console.log('Boom');
  } else {
    return console.log(total);
  }
}
