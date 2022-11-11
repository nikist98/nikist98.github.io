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
