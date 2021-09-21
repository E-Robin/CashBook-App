billAmount=document.querySelector("#bill-amount");
cashGiven=document.querySelector("#cash-given");
btn=document.querySelector("#btn1");
NumberOfNotes=document.querySelectorAll(".no-of-notes")
const Notes=[2000,500,100,20,10,5,1]


btn.addEventListener("click",result);
 



function result() {
    var bill=billAmount.value;
var cash=cashGiven.value;
    if(bill && cash){
        NoteReturn(bill,cash);
    } 
    else{
        showOutput("Please enter the amount first")
    }
}

function NoteReturn(bill,cash)
{
    if (cash>bill){
        var cashReturn=cash-bill;
        calculateChange(cashReturn);
        showOutput(cashReturn + " Rs to return to customer");


    }
    else if(cash===bill){

        showOutput("Your bill is clear no due")
    }
    else 
    {
        var due=bill-cash;
        showOutput("Bill is not clear you have to pay " + due + " rupees more to clear the due")
    }

}


function calculateChange(cashReturn){
 for (let i=0;i<Notes.length;i++  ){
   var numberOfNotes=Math.trunc(
       cashReturn/Notes[i]);
       cashReturn %=Notes[i];
       NumberOfNotes[i].innerText=numberOfNotes;

    
   } 

 }




function showOutput(message){
    return1.innerHTML=message;
}
