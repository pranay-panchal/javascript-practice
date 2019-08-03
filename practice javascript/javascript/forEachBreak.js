
var input = [-1, -2, 3, -4, -5, 4, 6, -7];
var output = [];
// expected output => -1, 3, -2, 4, -4, 6, -5, -7

for (item of input) {
    if(Math.sign(item) === -1) {
        output.push(item);
    }
}

console.log(output);