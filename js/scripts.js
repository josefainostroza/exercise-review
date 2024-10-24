//Escribe una función que reciba un número y lo devuelva sumando 2.

const additionTwo = (numero) => {
  if (numero) {
    return numero + 2;
  }
  return 'Debes escribir un número';
};

console.log(additionTwo(3));

//- Escribe una función que reciba un número y devuelva el doble de ese número.
const theDoubleOf = (numero) => {
  if (numero) {
    return numero * 2;
  }
  return 'Debes escribir un número';
};
console.log(theDoubleOf(2));

//- Escribe una función que reciba una palabra y devuelva su longitud.
const Length = (word) => {
  if (word) {
    return word.length;
  }
  return 'Debes escribir una palabra';
};
console.log(Length('Televisor'));

//- Escribe una función que reciba una palabra y la imprima en mayúsculas.
const Uppercase = (word) => {
  if (word) {
    return word.toUpperCase();
  }
  return 'Debes escribir una palabra';
};
console.log(Uppercase('televisor'));

//- Escribe una función que reciba dos palabras e imprima si son iguales o no

const equal = (word1, word2) => {
  if (word1 && word2) {
    if (word1 === word2) {
      return `${word1} es igual a ${word2}`;
    }
    return `${word1} no es igual a ${word2}`;
  }
  return 'Debes escribir dos palabras';
};
console.log(equal('Josefa', 'Josefa'));

//- Crea una función que tome dos números como parámetro y devuelva su multiplicación.

const multiplication = (number1, number2) => {
  if (number1 && number2) {
    return number1 * number2;
  }
  return 'Debes escribir dos números';
};
console.log(multiplication(2, 5));

//Crea una función llamada sumDigits que tome un número de 3 cifras como parámetro y devuelva la suma de sus dígitos.

const sumDigits = (number) => {
  const string = String(number);
  if (string && string.length === 3) {
    return (
      Number(string.charAt(0)) +
      Number(string.charAt(1)) +
      Number(string.charAt(2))
    );
  }
  return 'Debes escribir un número de 3 cifras';
};
console.log(sumDigits(596));

//- Crea una función llamada longestWord que reciba 2 palabras como parámetro y devuelva la palabra más larga.

const longestWord = (word1, word2) => {
  if (word1 && word2) {
    const length1 = word1.length;
    const length2 = word2.length;
    if (length1 > word2) {
      return `La palabra ${word1} es más larga que ${word2}`;
    }
    return `La palabra ${word2} es más larga que ${word1}`;
  }
  return `Debes escribir dos palabras`;
};
console.log(longestWord('Teatro', 'Escenario'));

//Escribe una función llamada getfirstElement que reciba un array y devuelva la primera posición del array.

const getfirstElement = (array) => {
  if (array) {
    return array[0];
  }
  return 'Debes escribir un array';
};
console.log(getfirstElement(['teatro', 'tv', 'cine']));

//- Escribe una función llamada getArrayElement que reciba un array y una posición y devuelva el valor de esa posición en el array, por ejemplo, si recibe (['a', 'b', 'c'], 2) devolverá 'c'

const getArrayElement = (array, position) => {
  if (array && position) {
    return array[position];
  }
  return 'Debes escribir un array y una posición';
};
console.log(getArrayElement(['a', 'b', 'c'], 2));

//- Crea una función llamada shortestWord que reciba 2 palabras como parámetro y devuelva la palabra más corta.

const shortestWord = (word1, word2) => {
  if (word1 && word2) {
    const length1 = word1.length;
    const length2 = word2.length;
    if (length1 > length2) {
      return `la palabra ${word2} es más corta que la palabra ${word1}`;
    }
    return `la palabra ${word1} es más corta que la palabra ${word2}`;
  }
  return `Debes escribir las dos palabras`;
};
console.log(shortestWord('Nadar', 'Competir'));

//- Crea una función llamada onlyEven que reciba 3 números e imprima sólo los números pares.

const onlyEven = (number1, number2, number3) => {
  if (number1 && number2 && number3) {
    const even1 = number1 % 2 === 0;
    const even2 = number2 % 2 === 0;
    const even3 = number3 % 2 === 0;

    if (even1 || even2 || even3) {
      if (even1) {
        console.log(`${number1} es par`);
      }
      if (even2) {
        console.log(`${number2} es par`);
      }
      if (even3) {
        console.log(`${number3} es par`);
      }
    } else {
      console.log('ninguno es par');
    }
  } else {
    console.log('Debes escribir 3 números');
  }
};

onlyEven(10, 9, 6);

//- Crea una función que reciba un número y devuelva su cuadrado y su cubo. El objeto Math tiene el método pow que sirve para calcular potencias, Math.pow(base, exponente)

const math = (number) => {
  if (number) {
    const result2 = Math.pow(2, 2);
    const result3 = Math.pow(2, 3);
    return `${number} al cuadrado es ${result2} y al cubo es ${result3}`;
  }
  return 'Debes escribir un número';
};
console.log(math(2));

//- Crea una función que reciba una palabra de 5 letras e imprima por consola las 5 letras separadas por comas.

const letterFive = (word) => {
  if (word && word.length === 5) {
    return `${word.charAt(0)},${word.charAt(1)},${word.charAt(2)},${word.charAt(
      3
    )},${word.charAt(4)}`;
  }
  console.log('Debes escribir una palabra de 5 letras');
};
console.log(letterFive('ADIOS'));

//- Crea una función que reciba un array de 3 números y lo imprima con los números duplicados, por ejemplo, si recibe [1,2,3] deberá imprimir [1,2,3,1,2,3]

const duplicates = (number) => {
  if (number) {
    number.push(number[0]);
    number.push(number[1]);
    number.push(number[2]);

    return number;
  }
};
console.log(duplicates([2, 5, 8]));

//Crea una función que reciba un array de 5 números y que lo imprima sin el primer y el último valor, por ejemplo, si recibe [1,2,3,4,5] deberá imprimir [2,3,4]

const numberFive = (array) => {
  if (array && array.length === 5) {
    array.pop();
    array.shift();
    return array;
  }
};
console.log(numberFive([1, 2, 3, 4, 5]));

//Crea una función llamada longestWordArray que reciba un array con 3 palabras y devuelva la palabra más larga del array.

const longestWordArray = (array) => {
  const cant = array[0].length;
  const cant1 = array[1].length;
  const cant2 = array[2].length;

  if (cant > cant1 && cant > cant2) {
    return array[0];
  } else if (cant1 > cant && cant1 > cant2) {
    return array[1];
  } else if (cant2 > cant && cant2 > cant1) {
    return array[2];
  }
  return 'Debes escribir un array';
};
console.log(longestWordArray(['hola', 'adios', 'bye']));

//Crea una función que reciba un array con 3 números y un array con 3 letras e imprima los números y las letras intercaladas, por ejemplo, si recibe ([1,2,3],['a','b','c']) deberá imprimir 1,a,2,b,3,c

const numberAndLetter = (array1, array2) => {
  const array0 = [];
  array0.push(array1[0]);
  array0.push(array2[0]);
  array0.push(array1[1]);
  array0.push(array2[1]);
  array0.push(array1[2]);
  array0.push(array2[2]);
  return array0;
};
console.log(numberAndLetter([1, 2, 3], ['a', 'b', 'c']));

//Crea una función que reciba un array con un número impar de elementos e imprima por consola el valor de la posición central, por ejemplo, si recibe [1,2,3,4,5] deberá imprimir 3, pero si recibe [1,2,3] deberá imprimir 2, si el número de elementos no es impar deberá imprimir "el array no es válido"

const odd = (array) => {
  const array0 = Math.floor(array.length / 2);
  return array[array0];
};
console.log(odd([1, 2, 3, 4, 5]));

//- Crea una función que reciba una palabra de 5 letras e imprima sólo las vocales, por ejemplo, si recibe "hola" deberá imprimir "oa"

const vowel = (word) => {
  if (word && word.length === 5) {
    const vowel0 = 'aeiouAEIOU';
    let x1 = '';
    let x2 = '';
    let x3 = '';
    let x4 = '';
    let x5 = '';

    if (vowel0.includes(word.charAt(0))) {
      x1 = word.charAt(0);
    }
    if (vowel0.includes(word.charAt(1))) {
      x2 = word.charAt(1);
    }
    if (vowel0.includes(word.charAt(2))) {
      x3 = word.charAt(2);
    }
    if (vowel0.includes(word.charAt(3))) {
      x4 = word.charAt(3);
    }
    if (vowel0.includes(word.charAt(4))) {
      x5 = word.charAt(4);
    }
    return x1 + x2 + x3 + x4 + x5;
  }
};
console.log(vowel('holas'));
