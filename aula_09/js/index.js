function saudacao_externo(){
    alert('Olá mundo em JS!')
    console.log('Arquivo index.js sendo chamado')
 }

 //melhor prática: separando o js do html
 //arquivo html só pode ter html, nao podemos misturar js
 //sempre mantendo o padrão e possibilita manutenção fácil
 document.getElementById('teste').addEventListener('click', function(){
    alert('Olá mundo com Event Listener')
 })

 document.getElementById('campo').addEventListener('keydown', function(event){
    console.log('Tecla pressionda:'+ event.key)
 })

 document.getElementById('teste').addEventListener('mouseover', function(){
    console.log('Você está em cima do botão?')
 })

 document.getElementById('campo').addEventListener('mouseout', function(){
    console.log('Você saiu do campo?')
 })