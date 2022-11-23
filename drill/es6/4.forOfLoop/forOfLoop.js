// forOfLoops for arrays
let incomes = [1000, 2000, 3000];
let total = 0;
for (const x of incomes) {
  //total = total + x;
  console.log(`Arrray Item = ${x}`);
  total += x;
}
console.log(`Total = ${total}`);

// forOfLoops for String Literal
let fullName = "adfdsafdsafdsafdsa adsfdsa";

for (const char of fullName) {
  console.log(char);
}
