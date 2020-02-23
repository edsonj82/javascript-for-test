//loops (laços de repetição)

//for é movido por declaração
// for(var a = 0; a < 10 ; a++){
//     console.log("Repetindo porque " + a + " é menor que 10");
// }

//while é movido por uma condição, e fica no laço enquanto for verdadeira
// var a = 0;
// while(a <= 10){
//     console.log("Repetindo porque " + a + " é menor que 10");
//     a++;
// }

var avengers = ['iroman','spiderman','thor','mulher maravilhosa', 'capitã marvelosa','capitão gemada'];

avengers.forEach(function(value,key){
    console.log(`${value} na posição ${key + 1}`)
});