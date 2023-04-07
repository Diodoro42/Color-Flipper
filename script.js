const colors = [0 , 1, 2, 3, 4, 5, 6, 7, 8, 9 ,'A' , 'B', 'C', 'D', 'E', 'F']
const btn = document.querySelector('#btn')
const spanConteudo = document.querySelector('#corTexto')

btn.addEventListener('click', function(){
    let hex = '#'
    const randomNumber = getRandomNumber()
    for (let i = 0; i < 6 ; i++){
        hex += colors[getRandomNumber()]

   }
    console.log(randomNumber)
    console.log(hex)
    spanConteudo.innerHTML = hex
    document.body.style.backgroundColor = hex
})




function getRandomNumber (){
    return Math.floor(Math.random() * colors.length)
}