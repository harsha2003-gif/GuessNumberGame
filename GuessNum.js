var input1 = document.querySelector("#input1");
var button =document.querySelector("#button");
var value = document.querySelector("#value");
button.onclick=guess;
var guessNum = Math.floor((Math.random()*10)+1);
var attempt = 7;//7
function guess()
{
    var userguess = parseInt(input1.value)//converting string into the value int
    if(userguess===guessNum)//guessing number
    {
        document.body.style.backgroundColor='lightgreen';
        setTimeout(function(){
          alert("won...!YESS you were right the correct guess is "+guessNum);
        },200);
        
        button.disabled = true;//disabled button
       
    }
    else{
          attempt -=1;//if the guessed number is not true reduce the attempt one by one 
          value.textContent=attempt;//assign value to attempt
          document.body.style.backgroundColor='salmon';

          if(attempt===0)
          {
            document.body.style.backgroundColor='grey';
            button.disabled = true;
            setTimeout(function(){
              alert("The chance is over...!!!!! The correct Answer is "+guessNum);

            },200);
            

            
           

          }
              
    }
}