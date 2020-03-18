console.log(`
########################################################################################################################

TASK 2

########################################################################################################################
`);

function printRow(row, padding) {
    console.log(' '.repeat(padding) + row.join(' '))
}

function drawPascalTriangle(n) {
    if (n < 1) {
        return;
    }

    let prev = [1];
    printRow(prev, n)

    if (n === 1) {
        return;
    }

    for (let i = 2; i <= n; i++) {
        const current = Array(i).fill(0);

        for (let j = 0; j < i; j++) {
            if (j === 0 || j === i - 1) {
                current[j] = 1;
                continue;
            }

            current[j] = prev[j - 1] + prev[j]
        }

        printRow(current, n - i)

        prev = current
    }
}

drawPascalTriangle(6)
