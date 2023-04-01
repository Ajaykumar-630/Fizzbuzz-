var s = 6305507526, sum = 0;
while (s) {
    sum += s % 10;
    s = Math.floor(s / 10);
}
for (var i = 1; i <= 39; i++) {
    if (i % 12 == 0) {
        console.log("FizzBuzz");
    }
    else if (i % 3 == 0) {
        console.log("Fizz")
    }
    else if (i % 4 == 0) {
        console.log("Buzz")
    }
    else {
        console.log(i);
    }
}