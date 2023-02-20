/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 4 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator(numOne, numTwo) {
  this.num1 = numOne;
  this.num2 = numTwo;
  this.sum = function () {
    console.log(this.num1 + this.num2);
  };
}

const Sum = new Calculator(4, 5);
Sum.sum();
