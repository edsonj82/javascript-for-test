//controles de fluxo
var idade = prompt("Qual é a sua idade: ") 
if(idade >= 18){
    console.log("Posso ir no show do Rio Negro e Simões");
}
else if(idade >= 12) {
    console.log("Preciso de uma autorização dos meus pais para ir no show do Rio Negro e Simões");
}
else{
    console.log("Posso ir no show do Patati Patata");
}

var ingresso = prompt("Qual é o tipo de ingresso: ");
switch (ingresso) {
    case "VIP":
        console.log("Irei ficar no camarote");
        break;

    case "PREMIUM":
        console.log("Irei ficar na pista PREMIUM");
        break;

    case "COMUM":
        console.log("Irei ficar na arquibancada");
        break;
        
    default:
        console.log("Ingresso Invalido!");
        break;
}