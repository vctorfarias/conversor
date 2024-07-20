const binary = document.getElementById("binary");
const decimal = document.getElementById("decimal");
  
function bin2dec(binary) {
  let decimal = 0
  console.log(binary.split().reverse())
  binary.split('').reverse().forEach((element, index) => {
    console.log(Math.pow(2, index))
    decimal += element * Math.pow(2, index);
    console.log(decimal)
  });
  return decimal
}

function dec2bin(decimal) {
  let binary = []
  while (decimal >= 1) {
    binary.push(decimal % 2)
    decimal = Math.floor(decimal / 2)
  }
  return binary.reverse().join('')
}

function isBinary(bin) {
  return !bin.split('').some(num => num !== '0' && num !== '1')
}

binary.addEventListener("input", () => {
  if (!isBinary(binary.value)) {
    decimal.value = '';
    return;
  }

  decimal.value = bin2dec(binary.value);
})

decimal.addEventListener("input", () => {
  if (!Number(decimal.value)) {
    binary.value = '';
    return;
  }
  binary.value = dec2bin(decimal.value);
})
