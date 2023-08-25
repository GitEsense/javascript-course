const addressLat = 5;
const addressLong = 25;
const positionLat = 33;
const positionLong = 18;

function distance(x1, y1, x2, y2) {
  return ((x2 - x1) ** 2 + (y2 - y1) ** 2) ** 0.5;
}

const result = distance(positionLat, positionLong, addressLat, addressLong);
console.log(result.toFixed(4));
