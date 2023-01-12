const person = {
    firstName: "Mile",
    lastName: "Disko",
    age: 20  
}
const personJSON = '{"firstName": "Mile", "lastName": "Disko", "age": 20}';

const obje = JSON.parse(personJSON);
const objeJSON = JSON.stringify(person);

console.log(obje,objeJSON);

const JSONarrayNum = '[1,2,5,75,4]';

function loop(JSONarrayNum){
    const array = JSON.parse(JSONarrayNum);
    array.forEach(element => {
        console.log(element);    
    });
}
loop(JSONarrayNum);