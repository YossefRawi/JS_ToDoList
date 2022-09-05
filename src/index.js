import './style.css';
import {logToDoList} from './log'
import {createListItem} from './listUI'


export default (function page_UI() {
    //
    const header_main = document.createElement('div');
    header_main.className = 'mainHeader';
    //
    const header = document.createElement('h1');
    header.classList.add('header');
    header.innerText = 'ToDoList';
    //
    const addBtn = document.createElement('button');
    addBtn.classList.add('add');
    addBtn.innerText = '+';
    //
    header_main.append(header,addBtn);
    //
    //create list
    let list_content = document.querySelector('div');
    list_content.classList.add('list');
    
    //
    document.body.append(header_main,list_content);
    //
    addBtn.addEventListener('click',() => {
        createListItem('h')
    })
})()




    


    
    



    




    

