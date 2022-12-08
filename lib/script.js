const catURL = 'https://api.thecatapi.com/v1/images'
const form = document.querySelector('form')
const random = document.querySelector(".randomButton")
const randomBox = document.querySelector(".randomCat")
const categoryBox = document.querySelector(".categoryCat")
const categoryInput = document.querySelector('.input')

addEventListener('click', randomCat)
addEventListener('submit', categoryCat)

function randomCat() {
fetch(`${catURL}/search`) 
    .then(res => {
        console.log(res)
        return res.json()
    })
    .then(data => {
        printCatImg(data[0].url)
    })
}
function categoryCat() {
    fetch(`${catURL}/search`) 
    .then(res => {
        console.log(res)
        return res.json()
    })
    .then(data => {
        printCatImg(data[0].url)
    })
}

function printCatImg(img) {
    randomBox.innerHTML = `<img src="${img}" class="randomCatImage"></img>`
}
function categoryCatImg(img) {
    categoryBox.innerHTML = `<img src="${img}" class="categoryCatImage">`
}