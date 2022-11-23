const logo = document.querySelectorAll("#logo path");
let i = 0;
for (i; i < logo.length; i++) {
  console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
}
