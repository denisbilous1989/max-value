let a = prompt('Enter the first value');

while(a === '' || a === null) {
      alert('You must enter the first value');
      a = prompt('Enter the first value');
}

let b = prompt('Enter the second value');

while(b === '' || b === null) {
      alert('You must enter the second value');
      b = prompt('Enter the second value');
}

let c = prompt('Enter the third value');

while(c === '' || c === null) {
      alert('You must enter the third value');
      c = prompt('Enter the third value');
}

while (a === b && b === c && c === a) {
      alert('Вы ввели три одинаковых числа. Одно из чисел должно отличаться!');
      a = prompt('Enter the first value');
      while(a === '' || a === null) {
            alert('You must enter the first value');
            a = prompt('Enter the first value');
      }
      b = prompt('Enter the second value');
      while(b === '' || b === null) {
            alert('You must enter the second value');
            b = prompt('Enter the second value');
      }
      c = prompt('Enter the third value');
      while(c === '' || c === null) {
            alert('You must enter the third value');
            c = prompt('Enter the third value');
      }
}

if(a >= b && a >= c) {
  alert('Самое большое число - это: ' + a);
}

if(b >= a && b >= c) {
  alert('Самое большое число - это: ' + b);
}

if(c >= a && c >= b) {
  alert('Самое большое число - это: ' + c);
}
