let prevButton = document.getElementById('prev')
let prevButton = document.getElementById('next')
let conteiner = document.querySelector('.conteiner')
let items = conteiner.querySelectorAll('a.list .item')
let indicator = document.querySelector('.indicators')
let dots = indicator.querySelectorAll('ul li')

let active = 0
let firsPosition = 0
let lastPosition = itens.Length - 1

nextButton.onclick = () => {
    let itemOld = conteiner.querySelector('.list .item.active')
    itemOld.classList.remove('active')

    active = active + 1 > lastPosition ? 0 : active + 1
    items[active].classList.add('active')

}

prevButton.onclick = () => {
    console.log("Botão nest")

}

prevButton.onclick = () => { 
    let itemOld = conteiner.querySelector('.list .item.active')
    itemOld.classList.remove('active')

    active = active - 1 < firsPosition ? lastPosition : active - 1
    items[active].classList.add('active')




}

