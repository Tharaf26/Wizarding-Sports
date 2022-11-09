function findLargest(num1,num2){
    if(num1>num2) {
        console.log("num1 is larger than num2")
     } else if(num1<num2) {
       console.log("num1 is less than num2")
     } else if(num1==num2){
        console.log("num1 is equal to num2")
     }   

} 
 findLargest(2,5)

 Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age).
outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
Call that function three times, passing in different values each time.


function calculationSupply(age,amountperday){
let ageindays = (age*365)
let oldage=(65)
console.log("You will need ageindays to last you until the ripe old age of oldage")
} 
calculationSupply(25,2)

