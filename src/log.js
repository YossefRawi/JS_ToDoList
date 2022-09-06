import  {createListItem} from './listUI'


function logToDoList(){
    
    let promptLogger = prompt("What's to be done?");
    if(promptLogger == null || promptLogger == '' )return
    createListItem(promptLogger)
    
    console.log(promptLogger);



};

export {logToDoList}


