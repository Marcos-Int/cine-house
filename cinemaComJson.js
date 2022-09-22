const Filme = require('./filme');
const funcoes = require('./funcoes');
const fs = require('fs');

const cinema = 'DH - Movies';

console.log(cinema);


console.log(new Filme(1, 'De volta para o Futuro', 90, [], 1985, false));

const catalogo = [];

funcoes.adicionarFilme(new Filme(1, 'De volta para o Futuro', 90, ['Cristopher Loid'], 1985, false), catalogo);
funcoes.adicionarFilme(new Filme(2, 'Cadê', 120, ['Daniel Redcliff'], 1990, true), catalogo);
funcoes.adicionarFilme(new Filme(3, 'Harry Potter', 139, ['Daiane Finn'], 1995, true), catalogo);
funcoes.adicionarFilme(new Filme(4, 'Velozes e furiosos', 120, ['Vin Diesel'], 2008, false), catalogo);

fs.writeFileSync('./database/catalogo.json', JSON.stringify(catalogo, null, 2));

console.log(catalogo)
console.log('O nome do filme é ' + funcoes.buscarFilme(3, catalogo).titulo);

funcoes.alterarStatusEmCartaz(4, catalogo);
console.log(catalogo)
