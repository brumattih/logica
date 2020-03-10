var moduloArbyte = function () {
    console.log("Ola meu modulo")
}

var moduloArbyte2 = function () {
    console.log("Ola meu segundo modulo")
}
// exports.moduloArbyte = moduloArbyte, moduloArbyte2
module.exports = {moduloArbyte, moduloArbyte2}