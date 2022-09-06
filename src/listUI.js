import './style.css';
import {logToDoList} from './log'
import { format} from 'date-fns'




let newDate = format(new Date(), 'dd / MMM / yyyy');

let list_content = document.getElementById('list');









    export const createListItem = (header) =>{
    //create list Item
    let list_item = document.createElement('div');
    list_item.classList.add('listItem');
    console.log(list_item)
    list_content.append(list_item);


    //create item header
    let item_header = document.createElement('h3');
    item_header.classList.add('itemHeader');
    item_header.innerText = "• " + header;
    list_item.appendChild(item_header);


    //create button Div
    let button_content = document.createElement('div');
    button_content.classList.add('Btns');
    list_item.appendChild(button_content);


    //Complete button
    let complete_btn = document.createElement('button');
    complete_btn.classList.add('completeBtn');
    complete_btn.innerText = 'Low';
    complete_btn.style.backgroundColor = 'green';
    
    //
    
    //

    //delete button
    let delete_btn = document.createElement('button');
    delete_btn.classList.add('deleteBtn');
    delete_btn.innerText = 'Del';
    //
    
    //


    //edit button
    let edit_btn = document.createElement('button');
    edit_btn.classList.add('editBtn');
    edit_btn.innerText = 'Edt';
    button_content.append(edit_btn,delete_btn,complete_btn);
    //
    //
    //

    let dateSetter = document.createElement('div')
    dateSetter.classList.add('dates')
    dateSetter.innerText = "Due : " + newDate ;
    list_item.appendChild(dateSetter);


    const btns_event = (() => {
        //
        edit_btn.addEventListener('click' ,() =>{
            let promptLogger = prompt("What do you want to change?");
            if(promptLogger == null || promptLogger == '' )return;
            item_header.innerText = "• " + promptLogger 
        });
        //
        delete_btn.addEventListener('click',() =>{
            item_header.parentElement.remove()
        });
        //
        complete_btn.addEventListener('click',() =>{
            complete_btn.innerText = complete_btn.innerText =='Low' ? 'High' : 'Low';
            if( complete_btn.innerText == 'Low'){
                complete_btn.style.backgroundColor = 'green';
            } else if ( complete_btn.innerText == 'High'){
                complete_btn.style.backgroundColor = 'red';
            }
        })
    
    })()
    //
    //
    //
    

        return {list_item};

    };


createListItem('w')




    






