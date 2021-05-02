/**
 * Helper file for Wind Degrees
 * @licence MIT
 * @copyright 2021 T.H. Case
 * @author thcase <thcase@outlook.com>
 */

const directions = [
  {direction: "N", start: 348.75, end: 11.25},
  {direction: "NNE", start: 11.25, end: 33.75},
  {direction: "NE", start: 33.75, end: 56.25},
  {direction: "ENE", start: 56.25, end: 78.75},
  {direction: "E", start: 78.75, end: 101.25},
  {direction: "ESE", start: 101.25, end: 123.75},
  {direction: "SE", start: 123.75, end: 146.25},
  {direction: "SSE", start: 146.25, end: 168.75},
  {direction: "S", start: 168.75, end: 191.25},
  {direction: "SSW", start: 191.25, end: 213.75},
  {direction: "SW", start: 213.75, end: 236.25},
  {direction: "WSW", start: 236.25, end: 258.75},
  {direction: "W", start: 258.75, end: 281.25},
  {direction: "WNW", start: 281.25, end: 303.75},
  {direction: "NW", start: 303.75, end: 326.25},
  {direction: "NNW", start: 326.25, end: 348.75}
]

const degreesToDirection = (degrees) => {
  // Default to North, since it doesn't fit the for loop comparisons
  let foundDirection = "N"
  for(let direction of directions) {
    // Find if not North
    if(degrees >= direction.start && degrees <= direction.end) {
      foundDirection = direction.direction
      break
    }
  }
  return foundDirection
}

const WindDegreesHelper = {
  degreesToDirection
}

export default WindDegreesHelper
