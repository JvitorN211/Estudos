//Início do Método Map com o this
const maca = {
    value: 2,
}

const laranja = {
    value: 3,
}

function mapComThis(arr, thisArg) {
    return arr.map(function(item){
        return item * this.value;
    }, thisArg);
}

const nums = [1, 2];

console.log('Método Map com This:');
console.log('this -> maçã', mapComThis(nums, maca));

console.log('this -> laranja', mapComThis(nums, laranja));
//Fim do Método Map com o this

//Início do Método Map sem o this
function mapSemThis(arr) {
    return arr.map(function(item) {
        return item * 2;
    })
}

const nums2 = [2, 4, 6, 8, 10];

console.log('Método Map sem This:');
console.log(mapSemThis(nums2));

console.log(nums2);
//Fim do Método Map sem o this

//Início do Método Filter
function filtraPares(arr) {
    return arr.filter(callback);
}

function filtraImpares(arr) {
    return arr.filter(function(item) {
        return item % 2 !== 0;
    });
}

function callback(item) {
    return item % 2 === 0;
}

const meuArray = [1, 23, 55, 67, 30, 2, 4];

console.log('Método This:');

console.log('Filtra Pares');
console.log(filtraPares(meuArray));

console.log('Filtra Impares');
console.log(filtraImpares(meuArray));
//Fim do Método Filter

//Início do Método Reduce 1
function somaNumeros(arr) {
    console.log('Método Reduce (soma):');
    return arr.reduce(function(prev, current) {
        console.log({ prev });
        console.log({ current });
        return prev + current;
    }, 0);
}

const arr = [1, 2];

console.log(somaNumeros(arr));
//Fim do Método Reduce 1

const lista = [
    {
        name: 'sabao em po',
        preco: 30,
    },
    {
        name: 'cereal',
        preco: 12,
    },
    {
        name: 'toalha',
        preco: 30,
    },
];

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista) {
    return lista.reduce(function(prev, current, index) {
        console.log("rodada ", index + 1);
        console.log({prev});
        console.log({current});
        return prev - current.preco;
    }, saldoDisponivel)
}

console.log(calculaSaldo(saldoDisponivel, lista));