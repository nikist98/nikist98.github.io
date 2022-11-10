let n = Number(document.getElementById("input"))
 
function square() {
    let row = "x".repeat(n);
    document.getElementById.innerHTML("square") = row
    for (let j = 1; j <= n - 2; j++) {
        if (j === Math.ceil((n - 2) / 2)) {
            let row3 = "x" + " ".repeat((n - 3) / 2) + "x" + " ".repeat((n - 3) / 2) + "x";
            document.getElementById.innerHTML("square") = row3
        } else {
            let row2 = "x" + " ".repeat(n - 2) + "x";
            document.getElementById.innerHTML("square") = row2
        }
    }
    document.getElementById.innerHTML("square") = row
}
square()