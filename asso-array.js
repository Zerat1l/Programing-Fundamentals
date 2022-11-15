let propName = 'Stamat stamatov';

let phoneBook = {
    ivaylo: '215815215',
    'Pesho Ivanov': '022846954',
    [propName]: '181815463',//dynamic prop name
}



console.log(phoneBook.ivaylo);
console.log(phoneBook['Pesho Ivanov']);
console.log(phoneBook[propName]);