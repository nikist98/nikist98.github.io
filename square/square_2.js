function square(n) {
    let row = "x".repeat(n);
    console.log(row)
    for (let j = 1; j <= n - 2; j++) {
        if (j === Math.ceil((n - 2) / 2)) {
            let row3 = "x" + " ".repeat((n - 3) / 2) + "x" + " ".repeat((n - 3) / 2) + "x";
            document.getElementById("square").innerHTML = row3;
        } else {
            let row2 = "x" + " ".repeat(n - 2) + "x";
            document.getElementById("square").innerHTML = row2;
        }
    }
    console.log(row)
}
square(9)