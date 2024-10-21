var metinselIfade = "Gitti";
var sayisalIfade = 5;
var mantiksalIfade = true;
var ojbectIfade = {};
var arrayIfade = [];
var arrayIfade2 = new Array();
var bosBirSey;

// console.log(typeof metinselIfade);
// console.log(typeof sayisalIfade);
// console.log(typeof mantiksalIfade);
// console.log(typeof ojbectIfade);
// console.log(typeof arrayIfade);
// console.log(typeof arrayIfade2);
// console.log(typeof bosBirSey);
// console.log(typeof yokBirSey);

var mesaj = "Log Yazdım";
var mesaj = "test";
var sayi1 = 15;
const pi = 3.14;

{
  //   console.log(sayi1);

  //console.log(sayi); // Hata Uncaught ReferenceError

  let sayi = 10;

  {
    // console.log(sayi); // Bu çalışacak

    let sayi2 = 20;

    // console.log(sayi2); // Bu çalışacak
  }

  //   console.log(sayi); // Bu çalışacak
  //console.log(sayi2); // Bu Hata
}

//console.log(sayi); // Hata sayi is not defined
// console.log(sayi1);

function ClickMe() {
  //var mesaj = "Log Yazdım fonksiyon içinde";
  //alert('Tıklandım.');
  //   console.log(mesaj);
  //   console.log(sayi);
}

//console.log(sayi);

// console.log(pi);
// pi = 5;
// console.log(pi);

// Tek satır yorum
/*

çok satır yorum
*/
//! bu dikkat önemli !
//? bu information
//* önemli information
//TODO: yapılacaklar

function Topla(sayi1, sayi2) {
  return sayi1 + sayi2;
}

var sonuc = Topla(6, 8);
console.log(sonuc);

//* Uyarı mesajı
//alert("Kullanıcıya mesaj");

//* Kullanıcıdan onay
//var cevap = confirm("Bunu yapmak istiyor musun?");
//console.log(cevap);

//var yas = prompt("Lütfen yaşınızı giriniz", "0");

//console.log(yas);
//console.log(typeof yas);

// var yasNumber = parseInt(yas);
// console.log(yasNumber);
// console.log(typeof yasNumber);

// console.info("bu bir info");
// console.log("bu bir log");
// console.warn("bu bir uyarı");
// console.error("bu bir hata");

//Renkli uyarı vermek istersek

// console.log(
//   "%c bu bir log",
//   "color:orange; font-size:32px; background-color:black;"
// );

//Aritmatik işlemler

var sonuc1 = 5 + 6;
var sonuc2 = 5 - 6;
var sonuc3 = 5 * 6;
var sonuc4 = 5 / 6;
var sonuc5 = 5 % 6;

console.log(sonuc1 + " " + sonuc2 + " " + sonuc3 + " " + sonuc4 + " " + sonuc5);

var num1 = prompt("Lütfen 1. sayı giriniz:", "0");
var num2 = prompt("Lütfen 2. sayı giriniz:", "0");

var result = parseInt(num1) + parseInt(num2);

if (result % 2 == 0) {
  console.log("sonuç çift");
} else {
  console.log("sonuç tektir");
}

var adet = prompt("kaç adet T-shirt istiyorsunuz?", "0");

for (let index = 1; index <= adet; index++) {
  //   console.log(index + ".x değeriniz:");
  var tshirt = prompt(
    index + ". T-shirt için renk belirtiniz (Kırmızı, Mavi, Yeşil)",
    "Kırmızı"
  );
  if (tshirt == "Kırmızı") {
    alert(index + ". T-shirt" + tshirt + "renktir. Fiyatı : 100 TL");
    console.log(index + ". T-shirt" + tshirt + "renktir. Fiyatı : 100 TL");
  } else if (tshirt == "Mavi") {
    alert(index + ". T-shirt" + tshirt + "renktir. Fiyatı : 200 TL");
    console.log(index + ". T-shirt" + tshirt + "renktir. Fiyatı : 200 TL");
  } else if (tshirt == "Yeşil") {
    alert(index + ". T-shirt" + tshirt + "renktir. Fiyatı : 300 TL");
    console.log(index + ". T-shirt" + tshirt + "renktir. Fiyatı : 300 TL");
  } else {
    var varsayilanRenkOlsunMu = confirm(
      "seçmiş olduğunuz renk yoktur. Varsayılan renk olarak Kırımızı ister misiniz?"
    );
    if (varsayilanRenkOlsunMu) {
      tshirt = "kırmızı";
      alert(index + ". T-shirt" + tshirt + "renktir. Fiyatı : 100 TL");
      console.log(index + ". T-shirt" + tshirt + "renktir. Fiyatı : 100 TL");
    } else {
      alert("Tshirt için yeniden renk seçiniz:");
      index--;
    }
  }
}
