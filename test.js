const maxProduct = (data) => {
    data = data.sort()
    const n = data.length;

    let a = data[n - 1];
    let b = data[n - 2];
    for (let ix = n - 3; ix >= 0; ix--) {
        let digit = data[ix];
        // append d to either a or b depending on where it makes the greater product
        let candidate1 = (a * 10 + digit) * b;
        let candidate2 = a * (b * 10 + digit);
        if (candidate1 > candidate2) {
            a = a * 10 + digit;
        } else {
            b = b * 10 + digit;
        }
    }
    console.log(`${a} * ${b} = ${a * b}`);
    return a * b;
};

maxProduct([4, 5, 6, 7]);
