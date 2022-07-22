//Rewrite the function using generics and rest parameters syntax
function countAverage(x: number, y: number, z: number): string {
    var together = x + y + z;
    var avr = together / 3;
    return 'The average is ' + avr;
}
console.log(countAverage(3, 2, 10));
