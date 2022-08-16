function capitalize(string) {
  if(typeof string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  } else {
    throw 'the input is not string';
  }
}

module.exports = capitalize;