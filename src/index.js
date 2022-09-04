import './style.css';

const header_main = document.createElement('div');
header_main.className = 'mainHeader';
const header = document.createElement('h1');
header.classList.add('header');
header.innerText = 'ToDoList';
const addBtn = document.createElement('button');
addBtn.classList.add('add');
addBtn.innerText = '+';
header_main.append(header,addBtn);
document.body.appendChild(header_main)