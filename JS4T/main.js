var welcome = ".::Hello Javascript - Automação Full Stack from QA Ninja::."
document.getElementById("welcome").append(welcome);
console.log(welcome);

//var arangers = new Array();
var avangers = ['homem de ferro', 'capitão america', 'homem aranha'];
console.log(avangers);

avangers.push('huck');
console.log(avangers);

avangers.push('capitão cueca');
console.log(avangers);

// avangers.pop()//pop remove o ultimo registro do meu array
// console.log(avangers);

// avangers.shift()//shift remove o meu primeiro registro do meu array
// console.log(avangers);

var indice = avangers.indexOf('capitão cueca');
avangers.splice(indice)
console.log(avangers)

avangers.push('Viuva Negra');
avangers.push('Gavião Arqueiro');
console.log(avangers)

var newAvangers = ['homem aranha3', 'Capitã marvel', 'miss marvel'];

var result = avangers.concat(newAvangers);
console.log(result);