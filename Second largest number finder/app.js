let arr = [5, 3, 9, 1, 9, 7, 5];

// Pehle 2 numbers ko assume karo
let largest = arr[0];
let secondLargest = arr[0];

// Pehle array ko loop karo taake largest nikal lo
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > largest) {
    largest = arr[i];
    
}
console.log("arr[i] = " + arr[i]);
console.log("largest = " + largest);
}

// Ab dubara loop karo taake second largest nikal lo
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > secondLargest && arr[i] < largest) {
        secondLargest = arr[i];
    }
    console.log("arr[i] = " + arr[i]);
    console.log("secondLargest = " + secondLargest);
}

console.log("Second largest number is: " + secondLargest);
