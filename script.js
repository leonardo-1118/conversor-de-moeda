const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencySelect = document.querySelector(".currency-select")
    console.log(currencySelect.value)

    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") //Valor à ser convertido
    const currencyValueConverted = document.querySelector(".currency-value") //Outras moedas

    const dollarToday = 5 //valor do dolar
    const euroToday = 5.20 //valor do euro
    const poundToday = 6.08 //valor da libra

    if (currencySelect.value == "dollar") { //se o valor do select for igual à dolar
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD" //simbolo do dolar
        }).format(inputCurrencyValue / dollarToday)
    }

    if (currencySelect.value == "euro") { //Se o valor do select for igual à euro
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR" //simbolo do euro
        }).format(inputCurrencyValue / euroToday)
    }

    if(currencySelect.value == "pound") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / poundToday)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"   //Para deixar o R$ certo
    }).format(inputCurrencyValue) //De onde ele vai pegar o valor

}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.querySelector(".currency-img")

    if (currencySelect.value == "dollar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImg.src = "./assets/dollar-coin.png.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/euro-coin.png.png"
    }

    if (currencySelect.value == "pound") {
        currencyName.innerHTML = ">£ Libra"
        currencyImg.src = "./assets/libra-coin.png"
    }
    convertValues()
}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)