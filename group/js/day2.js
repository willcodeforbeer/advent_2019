let input = [1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,13,1,19,1,6,19,23,2,23,6,27,1,5,27,31,1,10,31,35,2,6,35,39,1,39,13,43,1,43,9,47,2,47,10,51,1,5,51,55,1,55,10,59,2,59,6,63,2,6,63,67,1,5,67,71,2,9,71,75,1,75,6,79,1,6,79,83,2,83,9,87,2,87,13,91,1,10,91,95,1,95,13,99,2,13,99,103,1,103,10,107,2,107,10,111,1,111,9,115,1,115,2,119,1,9,119,0,99,2,0,14,0];

function computer(input){
    var index = 0;
    var done = false;
    while (!done) {
        var opcode = input[ index ];
        if (opcode == 1) {
            var ref1 = input[ index + 1];
            var ref2 = input[ index + 2];
            var ref3 = input[ index + 3];
            var num1 = input[ ref1 ];
            var num2 = input[ ref2 ];
            input[ref3] = num1 + num2;
        } else if (opcode == 2) {
            var ref1 = input[ index + 1];
            var ref2 = input[ index + 2];
            var ref3 = input[ index + 3];
            var num1 = input[ ref1 ];
            var num2 = input[ ref2 ];
            input[ref3] = num1 * num2;
        } else if (opcode == 99) {
            done = true;
        } else {
            1/0;
        }
        index += 4;
    }

    return input[0];
}
input[1] = 12;
input[2] = 2;
console.log("Result: " + computer(input));