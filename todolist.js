
import {validation,add_task} from "./modules/functionstodolist.js";

window.addEventListener("load",function ()
{
 ///////////selections/////////////////////
let table = document.querySelector("table");
let Add = document.querySelector("button");
let textbox = document.querySelector("input[type=textbox]");
  

    //add new tr 
Add.onclick = function()
{
    if (!validation(textbox.value))
    {
        alert("Enter valid task");
    }
    else 
    {
        add_task(textbox.value,table);
    }
    textbox.value="";
    

}
});//end of load 
