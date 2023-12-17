let a = Math.random()*100;
a = Number.parseInt(a);
let inp;

while(inp != a){
    inp = prompt("Enter the number : ");
    if(inp < a && inp > 0 ){
        console.log("Smaller number");
    }
    else if (inp > a && inp < 100){
        console.log("Greater Number");
    }
    else if (inp == a){
        console.log("Match");
    }
    else{
        console.log("OOPS!!, Enter Correct Number");
    }
}