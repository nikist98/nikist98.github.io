function square() {
    let input = document.getElementById('input-number').value;
    let result = document.getElementById('result');
    // let secondsSpan = document.getElementById('seconds');

    let row = "x".repeat(input);
    let res = '';

    res = row + '\n' // xxxxx + \n
    for (let j = 1; j <= input - 2; j++) {
        if (j === Math.ceil((input - 2) / 2)) {
            let row3 = "x" + " ".repeat((input - 3) / 2) + "x" + " ".repeat((input - 3) / 2) + "x";
            console.log('ROW 3', row3);
            res += row3 + '\n' // xx + \n
        } else {
            let row2 = "x" + " ".repeat(input - 2) + "x";
            res += row2 + '\n' // xx + \n
        }
    }
    res += row
    result.textContent = res
}