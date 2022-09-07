import  {createListItem} from './listUI'
import{goToLists} from './projectListShuffle'
import {SetFormUi} from './ProjectUI'
import { format} from 'date-fns'








function logToDoList(){
    let title_Logger = SetFormUi.form_title.value;
    let desc_Logger = SetFormUi.form_desc.value;
    let date_Logger = SetFormUi.form_date.value; 
    if(title_Logger == null || title_Logger == '' || desc_Logger == null || desc_Logger == '')return alert('Title, date and description must not be empty!') ;
    if(date_Logger == null || date_Logger == '') return alert('Invalid time value');
    //
    let new_todo = createListItem(title_Logger,desc_Logger,format(new Date(date_Logger), 'dd / MMM / yyyy'))
    //
    let new_todo_serial = JSON.stringify(new_todo)
    localStorage.setItem("newTodo",new_todo_serial)
    goToLists();
    let new_todo_deserial =
    localStorage.getItem()
    console.log(title_Logger,desc_Logger,date_Logger);



};

export {logToDoList}


