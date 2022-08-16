function reverseString(string)  {
  let reverseThe = string.split('');
  reverseThe = reverseThe.reverse();
  reverseThe = reverseThe.join('');
  if (typeof reverseThe === typeof string) {
    return 'string';
  } else {
    throw 'Your input is not a string';
  }
}

module.exports = reverseString;
