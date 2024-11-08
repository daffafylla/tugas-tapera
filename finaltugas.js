function a() { 
    setTimeout(() => {
      document.getElementById("button").setAttribute ('src' , './asset/pic_bulboff.gif')

    } ,3000);
    document.getElementById("button").setAttribute ('src' , './asset/pic_bulbon.gif')

} 
function b() { 
    let imgDiv = document.getElementById("button1"); 
    imgDiv . setAttribute('src' , './asset/pic_bulbon.gif')
} 
function c() { 
    let imgDiv = document.getElementById("button1"); 
    imgDiv . setAttribute ('src' , './asset/pic_bulboff.gif') 
} 
function angka() {
  let value = document.getElementById("angka").value 
    if(value <= 12){ 
        document.getElementById("hasil_umur").innerHTML = "anak anak"; 
    } 
    else if (value > 12 && value <=19 ){ 
        document.getElementById("hasil_umur").innerHTML = "remaja"; 
    } 
    else{ 
        document.getElementById("hasil_umur").innerHTML = "dewasa"; 
    } 
    }

    function tebak() { 
    let guess = document.getElementById("guess").value; 
    let randomNumber = Math.floor(Math.random() * 10) + 1; 
 
    if(guess == randomNumber){ 
        document.getElementById("hasil_guess").innerHTML = "tebakan anda benar "; 
    } 
    else{ 
        document.getElementById("hasil_guess").innerHTML = "tebakan anda salah "; 
         
    }
  }

  function calculator() { 
    var num1 = parseFloat(document.getElementById('num1').value); 
    var num2 = parseFloat(document.getElementById('num2').value); 
    var operator = document.getElementById('operator').value; 
    var result; 
 
    if (isNaN(num1) || isNaN(num2)) { 
    document.getElementById('result').innerHTML = "Harap masukkan angka yang valid."; 
    return; 
    } 
 
    switch (operator) { 
 
        case "+": 
        result = num1 + num2; 
        break; 
        case "-": 
        result = num1 - num2; 
        break; 
        case "*": 
        result = num1 * num2; 
        break; 
        case "%": 
        result = num1 % num2; 
        break; 
        default: 
        result = "Operator tidak dikenali"; 
    } 
 
    document.getElementById('result').innerHTML = "Hasil: " + result; 
         
}

function convertTemperature() {  
  const value = parseFloat(document.getElementById("tempValue").value);  
  const unit = document.getElementById("tempUnit").value;  
  let result;  
  
  if (unit === "c") {  
    result = (value * 9) / 5 + 32 + " °f";  
  } else if (unit === "f") {  
    result = ((value - 32) * 5) / 9 + " °c";  
  } else if (unit === "r") {  
    result = (value * 4) / 5 + "°r";  
  } else if (unit === "rc") {  
    result = (value * 5) / 4 + "°c";  
  } else if (unit === "k") {  
    result = value + 273 + "°k";  
  } else if (unit === "kc") {  
    result = value - 273 + "°c";  
  } else {  
    result = "Invalid unit";  
  }  
  document.getElementById("tempResult").innerHTML = "Converted: " + result; 
}




let hewan = ["kucing", "anjing", "burung", "ikan", "kelenci"];
console.log(hewan)
console.log("Hewan pertama:"+hewan [0])
console.log("Hewan terakhir :" +hewan [4])


let anka = [10,20,30,40,50]

anka.shift()
anka.pop();
console.log ("array setelah penghapus"+anka);

let warna = ["merah","biru","hijau"]
console.log(warna)

warna.unshift("kuning")
warna.push("ungu");

console.log ("aray setelah penambahan: "+ warna);

let jumlah = [1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,10] 
let total = 0; 
jumlah.forEach(function(item){ 
  console.log("Angka : "+item); 
}); 
for (let i = 0; i < jumlah.length; i++) { 
  total += jumlah[i] 
} 
console.log("Total : "+ total); 
 
 
console.log("Angka Genap:"); 
 
let genap = [2 ,4 ,6 ,8 ,10] 
genap.forEach(function(item1){ 
  console.log(item1); 
}) 
 
 
console.log("Angka Ganjil: "); 
 
let ganjil = [1 ,3 ,5 ,7 ,9] 
ganjil.forEach(function(item2){ 
  console.log(item2); 
})



