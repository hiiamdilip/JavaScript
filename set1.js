//timeout
console.log('1');
let timmy = setTimeout(function () {
    console.log('2');
}, 1);
let timothy = setTimeout(function () {
    console.log('3');
}, 10);
let timer = setTimeout(function () {
    console.log('4');
}, 0);
console.log('5');

//Output:
// 1
// 5
// 2
// 4
// 3

//async
let num = 0;
async function increment() {
    num += await 2;
    console.log(num);
}
increment();
num += 1;
console.log(num);

//Output:
//1
//2

// Differences between dot notation and square bracket syntax
let sam = {
    castiel: "mary"
}
let dean = {
    john: "crowley",
    mary: "chuck"
}

//which, if any, of these three log statements will work?
//console.log(dean[sam.castiel]);
//console.log(dean.sam.castiel);
//console.log(dean[sam['castiel']]);
//console.log(dean[sam[castiel]]);

//Output:
// chuck
// exception 
// chuck
// exception 

