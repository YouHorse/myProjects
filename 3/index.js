let arr = 
["Yazın gölge hoş, kışın ambar boş",
"Davulun Sesi Uzaktan Hoş Gelir",
"Boş yapma",
"İşin gücün yok mu?"];

function randomPicker() {
    document.getElementById("output").innerHTML = arr[(Math.round(Math.random()* arr.length))]
     
 }