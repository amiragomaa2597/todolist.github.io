
///////////validation function ///////////
export const validation=function (value)
{
    let returnvalue = 1 ;
if (value == "")
{
    returnvalue = 0 ;
}
return returnvalue;
}

/////////add row function ///////////////
export const add_task=function(value,table)
{
    let trelm = document.createElement("tr");
/////////////////////////Done///////////////////////////////////
    let tdelm = document.createElement("td");
    tdelm.classList.add("DONE");
    let done =  document.createElement("INPUT");
    done .setAttribute("type", "checkbox");
    tdelm.append(done);
    done.onclick=function(){
       
            
            if (this.checked == true){
              this.parentElement.parentElement.cells[1].classList.add ("donetask") ;
            } 
            else 
            {
                this.parentElement.parentElement.cells[1].classList.remove ("donetask") ;
   
            }
          }
   
    trelm.append(tdelm);
/////////////////////////task///////////////////////////////////
    tdelm = document.createElement("td");
    tdelm.classList.add("TASK");
    tdelm.innerText=value;
    trelm.append(tdelm);
/////////////////////////Delete//////////////////////////////////
    tdelm = document.createElement("td");
   let delelteButton = document.createElement("img");
   delelteButton.src="delete.png";
   delelteButton.onclick=function(){
    this.parentElement.parentElement.remove();
   }
   tdelm.append(delelteButton);
   trelm.append(tdelm);
///////////////////////Adding raw in Table/////////////////////
   table.append(trelm);
}


///////////////////////pascal function //////////////////////////
const toPascalCase = str => 
{
    const array = str.split(" ");
    for (var i = 0; i < array.length; i++) {
        array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1).toLowerCase();
    } 
    return array.join(" ");
}
///////////////////////task validation //////////////////////////