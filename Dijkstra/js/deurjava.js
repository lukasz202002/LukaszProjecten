function deur() {
  if (document.getElementById("deuren").value == 1) {
    var cw = parseInt(document.getElementById("muurBreedtePx").value) + 4;
    var ch = parseInt(document.getElementById("muurHoogtePx").value) + 4;

    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, cw, ch);

    var x = document.getElementsByClassName("da");
    x[0].style.visibility = "visible";
    var y = document.getElementsByClassName("labelda");
    y[0].style.visibility = "visible";

    let sb = parseInt(document.getElementById("steenbreedte").value);
    document.getElementById("deurbreedte").value = 5 * sb + 6 * 4; // 5x steen + 6x voeg
    let dbx = parseInt(document.getElementById("deurbreedte").value) * 0.2;
    document.getElementById("deurBreedtePx").value = parseInt(dbx);
    document.getElementById("deurhoogte").value = 2110;
    document.getElementById("deurHoogtePx").value = parseInt(2110 * 0.2);

    // afstand bepalen
    let asb = parseInt(document.getElementById("asb").value);
    l = document.getElementById("deurafstand");

    for (let x = 2; x < asb - 5; x++) {
      var option = document.createElement("option");
      option.text = x + " stenen";
      option.value = x;
      l.add(option);
    }
  } else {
    var x = document.getElementsByClassName("da");
    x[0].style.visibility = "hidden";
    var y = document.getElementsByClassName("labelda");
    y[0].style.visibility = "hidden";

    document.getElementById("deurbreedte").value = null;
    document.getElementById("deurBreedtePx").value = null;
    document.getElementById("deurhoogte").value = null;
    document.getElementById("deurHoogtePx").value = null;

    //nu nog bepalen hoeveel afstand je mag nemen
    let asb = parseInt(document.getElementById("asb").value);
    var myList = document.getElementById("deurafstand");
    for (let x = 1; x < asb - 5; x++) {
      if (myList.hasChildNodes()) {
        myList.removeChild(myList.children[x]);
      }
    }
  }
}

// ALS PDF OPSLAAN

function pdfOpslaan() {
  const { jsPDF } = window.jspdf;
  const pdf = new jsPDF();
  var canvas = document.getElementById("canvas");
  var dataURL = canvas.toDataURL("image/jpeg,1.0");
  var img = document.getElementById("canvas");
  pdf.addImage(
    canvas.toDataURL("image/jpeg"),
    "JPEG",
    0,
    0,
    210.0015555555555,
    105.0007777777778
  );
  img.src = dataURL;
  console.log(pdf.internal.pageSize.getWidth());
  pdf.save("a4.pdf");
}
