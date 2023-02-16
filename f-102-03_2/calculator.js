let x = prompt("Podaj pierwszą liczbę");
let operator = prompt("Podaj operator arytmetyczny (+,-,*,/ lub %)");
let y = prompt("Podaj drugą liczbę");

if (operator == "+") {
  alert(+x + +y);
} else if (operator == "-") {
  alert(x - y);
} else if (operator == "*") {
  alert(x * y);
} else if (operator == "/" && y == 0) {
  alert("Nie dziel przez 0!");
}
if (operator == "/" && y != 0) {
  alert(x / y);
} else if (operator == "%") {
  alert(x % y);
}
