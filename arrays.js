const colors=[ "orange", "blue", "green", "black"];
//  for (const color of colors){
//      console.log(color);
//  }

// colors.forEach(item => console.log(item));

// let number = 3;
// function rotateRight(number, colors){
//     for(i=0; i<number; i++){
//         let last = colors.pop();
//         colors.unshift(last);
//     }
// }
// rotateRight(number, colors);
// console.log(colors);

// const numbers= [2,3,5,7,21,64];
// const initalValue = 50;
// const sumAll = numbers.reduce((accumulator, currentValue) => accumulator + currentValue,initalValue);
// console.log(sumAll);

// const number=10;
// const array = [];
// function countPiramide(number, array){   
//     for (i=0; i<number; i++)
//         {array.push(i)}
//         const array2 = [...array];
//         const reve = array2.reverse();
//     return resolt = array.concat(reve)
// }
// countPiramide(number, array);
// console.log(resolt);

var myZoo = [
    ["King Kong", ["gorilla", 42]],
    ["Nemo", ["fish", 5]],
    ["Punxsutawney Phil", ["groundhog", 11]]
  ];

  function zooInventory(array) {
    var output = [];
    for (var i = 0; i < array.length; i++) {
      output.push(array[i][0] + ' the ' + array[i][1][0] + ' is ' + array[i][1][1]);
    }
    console.log(output);
    return output;
  }
  
  zooInventory(myZoo);
