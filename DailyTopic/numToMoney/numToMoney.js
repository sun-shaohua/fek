function numToMoney(num) {
    const regExpInfo = /(\d{1,3})(?=(\d{3})+(?:($|\.)))/g
    return num.toString().replace(regExpInfo, '$1,')
}

 function toThousandFilter(num) {
    return (+num || 0).toString().replace(/^-?\d+/g, m => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','))
}
console.log(toThousandFilter(1000000000.000000))
