module.exports = function toReadable(number) {
    if (number === 0) {
        return "zero";
    }
    //единицы + 11-20
    let units = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
        "twenty",
    ];
    //десятки
    let tens = [
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    let result = "";
    let tmp = number;
    let str = String(tmp);

    //по разрядам последовательно строко-численно, -сотни, -десятки, -остаток)
    if (tmp > 99) {
        result = result + units[Number(str[0])] + " hundred ";
        tmp = Number(str[1] + str[2]);
        str = String(tmp);
    }

    if (tmp > 19) {
        result = result + tens[Number(str[0]) - 2] + " ";
        tmp = Number(str[1]);
        str = String(tmp);
    }

    if (tmp > 0) {
        result = result + units[tmp];
    }

    return result.trim();
};
