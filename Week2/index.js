// console.log(window);
// // window.alert('hello');

// //Single element
// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('.container'));

// //Multiple elements
// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByClassName('item'));

// //Loop through elements with same class
// const items = document.querySelectorAll('.item');
// items.forEach((item) => console.log(item));

// //Modifying elements
// const ul = document.querySelector('.items');
// // ul.remove();
// // ul.lastElementChild.remove();
// ul.firstElementChild.textContent = 'HELLO';
// ul.children[1].innerText = 'WORLD';
// ul.lastElementChild.innerHTML = '<em>Item 3</em>'

// const btn = document.querySelector('.btn');
// // btn.style.background = 'red';

// btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     console.log('click');
// });
// btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     console.log(e.target);
//     console.log(e.target.className);
// });
// btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     document.querySelector('#my-form').style.background = '#ccc'; //changes bg of form on clicking
//     document.querySelector('body').classList.add('bg-dark'); //css class added
// });
// btn.addEventListener('mouseover', (e) => {
//     e.preventDefault();
//     document.querySelector('.items').lastElementChild.innerHTML = '<h1>HELLO</h1>'; //changes text on mouse hover over submit
// })


const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);
function onSubmit(e){
    e.preventDefault();
    if (nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        setTimeout(() => msg.remove(), 3000);
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        userList.appendChild(li);
        nameInput.value = '';
        emailInput.value = '';
    }
}

