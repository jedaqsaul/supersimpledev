function greet(name) {
  if (name) {
    console.log(`Hello ${name}`);
  } else {
    console.log("Hi there!");
  }
}

greet("Aquila");
greet();
greet();

function convertToFahrenheit(celsius) {
  const fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}

console.log(convertToFahrenheit(25));

function convertToCelsius(fahrenheit) {
  const celsius = ((fahrenheit - 32) * 5) / 9;
  return celsius;
}

console.log(convertToCelsius(86));

// function convertTemperature(degrees, unit) {
//   if (unit === "C") {
//     return (degrees * 9) / 5 + 32 + "F";
//   } else if (unit === "F") {
//     return ((degrees - 32) * 5) / 9 + "C";
//   }
// }

function convertTemperature(degrees, unit) {
  let temp = 0;
  if (unit === "C") {
    temp = convertToFahrenheit(degrees);
    return `${temp} F`;
  } else if (unit === "F") {
    temp = convertToCelsius(degrees);
    return `${temp} C`;
  }
}

console.log(convertTemperature(25, "C"));
console.log(convertTemperature(86, "F"));

function convertLength(length, from, to) {
  if ((from !== "km") & (from !== "miles") & (from !== "ft")) {
    return `invalid input: ${from}`;
  } else if ((to !== "km") & (to !== "miles") & (to !== "ft")) {
    return `invalid input: ${to}`;
  } else {
    if (from === "km" && to === "miles") {
      return `${length / 1.6} miles`;
    } else if (from === "km" && to === "ft") {
      return `${length * 3281} ft`;
    } else if (from === "miles" && to === "km") {
      return `${length * 1.6} km`;
    } else if (from === "miles" && to === "ft") {
      return `${length * 5280} ft`;
    } else if (from === "ft" && to === "km") {
      return `${length / 3281} km`;
    } else if (from === "ft" && to === "miles") {
      return `${length / 5280} miles`;
    } else if (from === to) {
      return `${length} ${from}`;
    }
  }
}

console.log(convertLength(50, "miles", "km"));
console.log(convertLength(32, "km", "miles"));
console.log(convertLength(50, "km", "km"));

console.log("With feet");

console.log(convertLength(5, "miles", "km"));
console.log(convertLength(5, "miles", "ft"));
console.log(convertLength(5, "km", "ft"));
console.log(convertLength(5, "lbs", "lbs"));
