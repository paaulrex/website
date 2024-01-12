let lengthUnit = document.querySelector('.length-conv')
let volumeUnit = document.querySelector('.volume-conv')
let massUnit = document.querySelector('.mass-conv')

function convertUnit(enteredNumber) {
    enteredNumber = document.querySelector('input').value
    // Length variables & conversion
    feetValue = (Number(enteredNumber) * 3.28084).toFixed(3)
    meterValue = (Number(enteredNumber) / 3.28084).toFixed(3)
    lengthUnit.textContent = `${enteredNumber} meters = ${feetValue} feet | ${enteredNumber} feet = ${meterValue} meters`

    // Volume variables & conversion
    gallonValue = (Number(enteredNumber) * 0.264172).toFixed(3)
    literValue = (Number(enteredNumber) / 0.264172).toFixed(3)
    volumeUnit.textContent = `${enteredNumber} liters = ${gallonValue} gallons | ${enteredNumber} gallons = ${literValue} liters`

    // Mass variables & conversion
    lbsValue = (Number(enteredNumber) * 2.20462).toFixed(3)
    kiloValue = (Number(enteredNumber) / 2.20462).toFixed(3)
    massUnit.textContent = `${enteredNumber} kilos = ${lbsValue} pounds | ${enteredNumber} pounds = ${kiloValue} kilos`
}