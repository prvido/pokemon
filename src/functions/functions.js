module.exports = (n, factor, max) => {
    const array = []
    let i = 0
    while (i < n) {
        const aux = Math.floor(Math.random() * factor)
        if (aux <= max && !array.includes(aux)) {
            array.push(aux)
            i++
        }
    }
    return array
}