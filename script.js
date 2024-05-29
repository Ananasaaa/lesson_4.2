let num = Number(prompt());
let numStr = num.toString();

if (numStr >= 100 && numStr <= 999) {
    if (numStr[0] === numStr[1] && numStr[1] === numStr[2]) {
        console.log("All digits are the same");
    } else if (numStr[0] === numStr[1] || numStr[1] === numStr[2] || numStr[0] === numStr[2]) {
        console.log("The number has identical digits");
    } else {
        console.log("All digits are different");
    }
}
