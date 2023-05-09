label = "keyincollege"
tld = "ca"
domainName = label + "." + tld

isKeyin = domainName === "keyincollege.ca";

isNotKeyin = !isKeyin;

byte1 = 198;
byte2 = 110;
byte3 = 1;
byte4 = 255;

ipAddress = byte1 + "." + byte2 + "." + byte3 + "." + byte4;

var table = 15;

for (var i = 1; i <= 10; i++) {
  console.log(table + " X " + i + " = " + (table * i));
}

for (var i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
      console.log(i + " is even.");
    } else {
      console.log(i + " is odd.");
    }
  }

  var sum = 0;

for (var i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    sum += i;
  }
}

console.log("The sum of all even numbers from 1 to 100 is: " + sum);

var num = 28; 

var sum = 0;

for (var i = 1; i < num; i++) {
  if (num % i === 0) {
    sum += i;
  }
}

var num = 28;

var sum = 0;

for (var i = 1; i < num; i++) {
  if (num % i === 0) {
    sum += i;
  }
}

if (sum === num) {
  console.log(num + " is a perfect number.");
} else {
  console.log(num + " is not a perfect number.");
}

var num = 17; 

var isPrime = true;

if (num <= 1) {
  isPrime = false;
} else {
  for (var i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
}

if (isPrime) {
  console.log(num + " is a prime number.");
} else {
  console.log(num + " is not a prime number.");
}