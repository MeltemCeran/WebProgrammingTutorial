//object tanımlama

var batuhan = {
  memleket: "Nevşehir",
  tuttuguTakim: "Galatasaray",
  arabasiVarMi: true,
  arabasi: {
    marka: "Skoda",
    model: "Superb",
    yil: 2022,
    km: 31750,
    renk: "Indigo",
  },
  dogumTarihi: new Date(2000, 0, 20),
  dogumTarihiStr: new Date(2000, 0, 20).toLocaleDateString(),
  medeniDurum: "Bekar",
  hobileri: [
    {
      adi: "Kitap okumak",
      sure: 5,
    },
    {
      adi: "Gitar Çalmak",
      sure: 10,
    },
    {
      adi: "Go Card",
      sure: 3,
    },
  ],
  notlar: [75, 98, 100],

  notOrtalama: function () {
    var toplamNotlar = this.notlar.reduce((toplam, anlikDeger) => {
      return toplam + anlikDeger;
    });

    var notSayisi = this.notlar.length;

    return toplamNotlar / notSayisi;
  },
};

console.log(batuhan.arabasiVarMi);
console.log(batuhan.arabasi.marka);

console.log(batuhan.hobileri[1].adi);

batuhan.hobileri.forEach((hobi, i) => {
  console.log(`${i + 1}. ${hobi.adi} ${hobi.sure} yıldır.`);
});

console.log(batuhan.notOrtalama());

//Class Tanımlama

function Kisi(adi, soyadi, yas) {
  this.adi = adi;
  this.soyadi = soyadi;
  this.yas = yas;
}

console.log(typeof Kisi);

var yeniKisi = new Kisi("Göksel", "Kalyoncu", 35);

console.log(batuhan);
console.log(yeniKisi);

class Kitap {
  constructor(yazarAdi, yazarSoyadi, kitapAdi, sayfaSayisi) {
    this.YazarAdi = yazarAdi;
    this.YazarSoyadi = yazarSoyadi;
    this.KitapAdi = kitapAdi;
    this.SayfaSayisi = sayfaSayisi;
  }

  YazarAdiSoyadi = function () {
    return this.YazarAdi + " " + this.YazarSoyadi;
  };

  YazarAdiSoyadiArrowFunc = () => {
    return this.YazarAdi + " " + this.YazarSoyadi;
  };

  YazarAdiSoyadiArrowFuncShort = () => this.YazarAdi + " " + this.YazarSoyadi;
}
console.log(typeof Kitap);
var yeniKitap = new Kitap("Göksel", "Kalyoncu", "Kim Korkar c# dan", 300);

console.log(yeniKitap);
console.log(yeniKitap.KitapAdi);
console.log(yeniKitap.YazarAdi);

console.log(yeniKitap.YazarAdiSoyadi());
console.log(yeniKitap.YazarAdiSoyadiArrowFunc());
console.log(yeniKitap.YazarAdiSoyadiArrowFuncShort());

var sayHello = function () {
  console.log("Hello Javascript Variable Function :)");
};

sayHello();

var toplama = (a, b) => a + b;
var carpma = (a, b) => a * b;
var bolme = (a, b) => a / b;
var cıkarma = (a, b) => a - b;
var ortalama = function (...nums) {
  var toplam = nums.reduce((p, c) => p + c);
  return bolme(toplam, nums.length);
};

console.log(toplama(5, 3));
console.log(carpma(5, 3));
console.log(bolme(5, 3));
console.log(cıkarma(5, 3));

console.log(ortalama(3, 5, 7, 8, 10));

class Hayvan {
  /**
   *@adi string name of animal
   */
  constructor(adi) {
    this.Adi = adi;
  }
  AdinNedir() {
    return this.Adi;
  }
}

class Kedi extends Hayvan {
  /**
   *
   */
  constructor(adi, cinsi) {
    super(adi);
    this.Cinsi = cinsi;
  }
  CinsinNedir() {
    return this.Cinsi;
  }
  SenKimsin() {
    return (
      "I'm a cat, My name is " + this.Adi + " and my type of " + this.Cinsi
    );
  }
}

var hayvan = new Hayvan();

var blackWhiteCat = new Kedi("Black White", "Sokak Kedisi");

console.log(blackWhiteCat.AdinNedir());
console.log(blackWhiteCat.CinsinNedir());
console.log(blackWhiteCat.SenKimsin());

console.log("-".repeat(10));

console.log(JSON.stringify(yeniKisi));
console.log(JSON.stringify(yeniKitap));
console.log(JSON.stringify(batuhan));

console.log("-".repeat(10));

var kisiJsonStr = JSON.stringify(yeniKisi);

console.log(kisiJsonStr);

var jsonKisiClass = JSON.parse(kisiJsonStr);

console.log(jsonKisiClass);

console.log("-".repeat(10));

var batuJsonStr = JSON.stringify(batuhan);

console.log(batuJsonStr);

var jsonBatuClass = JSON.parse(batuJsonStr);

console.log(jsonBatuClass);
