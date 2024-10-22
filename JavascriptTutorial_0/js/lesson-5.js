console.log(document);
console.log(document.title);
console.log(document.body.innerText);
console.log(document.body.innerHTML);

//document.body.innerText = "Merhaba";
//document.body.innerHTML = "Merhaba";

function EkleFileUpload() {
  //   document.body.appendChild(div);
  //   div.setAttribute("id", "iamgeUpload");

  var div = document.getElementById("imageUpload");

  var inputTypeFile = document.createElement("input");

  inputTypeFile.setAttribute("type", "file");

  div.appendChild(inputTypeFile);
}

function Gonder() {
  var inputMesaj = document.getElementById("mesaj");

  var mesaj = inputMesaj.value;

  var divEkran = document.getElementById("ekran");

  divEkran.innerText = mesaj;
}
