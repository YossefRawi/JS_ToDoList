import './style.css';


let list_content = document.querySelector('div');


    export const createListItem = (header) =>{
    //create list Item
    let list_item = document.createElement('div');
    list_item.classList.add('listItem');
    console.log(list_item)
    list_content.append(list_item);


    //create item header
    let item_header = document.createElement('h3');
    item_header.classList.add('itemHeader');
    item_header.innerText = header;
    list_item.appendChild(item_header);


    //create button Div
    let button_content = document.createElement('div');
    button_content.classList.add('Btns');
    list_item.appendChild(button_content);

    //Complete button
    let complete_btn = document.createElement('button');
    complete_btn.classList.add('completeBtn');
    complete_btn.innerText = '✖';
    complete_btn.style.backgroundColor = 'red';
    button_content.appendChild(complete_btn);
    
    //
    complete_btn.addEventListener('click',() =>{
        console.log(complete_btn.innerText);
        complete_btn.innerText = complete_btn.innerText =='✖' ? '✔' : '✖';
        if( complete_btn.innerText == '✔'){
            complete_btn.style.backgroundColor = 'green';
        } else if ( complete_btn.innerText == '✖'){
            complete_btn.style.backgroundColor = 'red';
        }
    })
    //

    //create button
    let delete_btn = document.createElement('button');
    delete_btn.classList.add('deleteBtn');
    delete_btn.innerText = 'D';
    button_content.appendChild(delete_btn);

    //create button
    let edit_button = document.createElement('button');
    edit_button.classList.add('editBtn');
    edit_button.innerText = 'E';
    button_content.appendChild(edit_button);


        return {header}

    };


let newitem = createListItem('jjj')





    
    

