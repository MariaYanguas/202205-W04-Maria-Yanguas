export function strictEquals(a, b) {
  if (isNaN(a) && isNaN(b)) {
    return console.log(false);
  }
  if ((a === 0 && Object.is(a, -0)) || (Object.is(-0, b) && b === 0)) {
    return console.log(true);
  }
  return console.log(Object.is(a, b));
}
