

let final = "";
let string = ("hello everybody! have a great amazing wonderful day")

for (let i = 0; i < string.length; i++) {
    
    
    if (i === 0 || string[i - 1] === " ") {
      
        final += string[i].toUpperCase();
     
    } else
         {
        final += string[i];
    }
}
console.log(final);  