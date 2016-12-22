var num= prompt("Entrez un chiffre entier positif max 9");


var numrom = ["I","II","III", "IV", "V","VI","VII","VIII", "IX","X"];

var slicedU=num.slice(-1);
if(num<=10){
  console.log(numrom[slicedU-1]);

}
else if(num <= 10){
console.log("tomate");
}