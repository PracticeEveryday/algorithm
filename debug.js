function incrementX() {
  const obj = {}

  for(let i = 0; i < 32; i++) {
    obj[i] = i;
  }
  return obj[1] + obj[2];
}
console.log(incrementX());