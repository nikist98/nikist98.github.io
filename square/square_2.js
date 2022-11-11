<<<<<<< HEAD
function square(n) {
    let row = "x".repeat(n);
    console.log(row)
    for (let j = 1; j <= n - 2; j++) {
        if (j === Math.ceil((n - 2) / 2)) {
            let row3 = "x" + " ".repeat((n - 3) / 2) + "x" + " ".repeat((n - 3) / 2) + "x";
            console.log(row3)
        } else {
            let row2 = "x" + " ".repeat(n - 2) + "x";
            console.log(row2)
        }
    }
    console.log(row)
}
square(9)
=======
let n = Number(document.getElementByID("input(n)"))
 
function square() {
    let row = "x".repeat(n);
    document.getElementByID.innerHTML("square") = row
    for (let j = 1; j <= n - 2; j++) {
        if (j === Math.ceil((n - 2) / 2)) {
            let row3 = "x" + " ".repeat((n - 3) / 2) + "x" + " ".repeat((n - 3) / 2) + "x";
            document.getElementByID.innerHTML("square") = row3
        } else {
            let row2 = "x" + " ".repeat(n - 2) + "x";
            document.getElementByID.innerHTML("square") = row2
        }
    }
    document.getElementByID.innerHTML("square") = row
}
square()
>>>>>>> 8d2bb1042d3ea33c6d6a113a36037cc0d62eb1fc
