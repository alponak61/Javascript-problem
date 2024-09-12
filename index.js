
function calculateTax(income, expenses) {
          let z = income - expenses;
          let tax = z * .20;
         
          if( (income > 0 && expenses > 0)|| expenses > income){
            return "Invalid Input";
          }
          return tax;

}
let p = calculateTax(-5000, 2000);
console.log(p);

