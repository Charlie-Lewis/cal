// let age = +prompt('Сколько тебе лет ?')

// if (age < 18) {
//    console.log('Доступ закрыт')
// } else {
//    console.log('Доступ открыт')
// }

let input1 = document.querySelector('#input1')
let input2 = document.querySelector('#input2')
let output = document.querySelector('#output')
 
const add = () =>{
   output.innerHTML = +input1.value +  +input2.value;
};

const min = () =>{
   output.innerHTML = +input1.value -  +input2.value;
};

const umn = () =>{
   output.innerHTML = +input1.value *  +input2.value;
};

const del = () =>{
   output.innerHTML = +input1.value /  +input2.value;
};

const reset = () => {
output.innerHTML = '00';
input1.value = '';
input2.value = '';

};