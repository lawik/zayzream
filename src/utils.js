function upper(s) {
  return String(s).toUpperCase();
}

function lower(s) {
  return String(s).toLowerCase();
}

function greet(name) {
  return `hello, ${name}!`;
}

function shout(name) {
  return upper(greet(name));
}

module.exports = { upper, lower, greet, shout };
