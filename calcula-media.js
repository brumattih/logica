var calculaMedia = function (arr) {
    this.arr = []
    soma = 0

    for (var index = 0; index < arr.length; index++) {
        var soma = soma + arr[index]
    }
    
    return soma / arr.length
}

module.exports = { calculaMedia }