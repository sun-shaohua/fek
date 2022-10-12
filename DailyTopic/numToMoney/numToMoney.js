function numToMoney(num) {
    const regExpInfo = /(\d{1,3})(?=(\d{3})+(?:($|\.)))/g
    return num.toString().replace(regExpInfo, '$1,')
}
console.log(numToMoney(111111111111));
console.log(numToMoney(11111, 1111))

