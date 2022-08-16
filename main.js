function stringLength(string)  {
  if (string.length >= 0 && string.length <= 10) {
    return string.length;
  } else {
    throw 'Your input is greather than 10 or less than 1';
  }
}

module.exports = stringLength;
