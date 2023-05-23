// Afmetingen invullen in inputs
function bepaalSteenformaat() {
  var x = document.getElementById("stenen");
  var s1 = x.options[x.selectedIndex].text;
  document.getElementById("steenkeus").value = s1;
  var s2 = x.options[x.selectedIndex].value;

  var x = document.getElementById("btnStart");
  if (s2 === "kies") x.style.visibility = "hidden";
  else x.style.visibility = "visible";
  // Afmetingen van alles in MM en PX
  if (s2 == "Waal") {
    document.getElementById("steenbreedte").value = "210";
    document.getElementById("steenhoogte").value = "100";
    document.getElementById("steenBreedtePx").value = 42;
    document.getElementById("steenHoogtePx").value = 20;
  }
  if (s2 == "Dik") {
    document.getElementById("steenbreedte").value = "215";
    document.getElementById("steenhoogte").value = "101";
    document.getElementById("steenBreedtePx").value = 43;
    document.getElementById("steenHoogtePx").value = 20;
  }
  if (s2 == "Rijn") {
    document.getElementById("steenbreedte").value = "180";
    document.getElementById("steenhoogte").value = "87";
    document.getElementById("steenBreedtePx").value = 36;
    document.getElementById("steenHoogtePx").value = 17;
  }
  if (s2 == "Vecht") {
    document.getElementById("steenbreedte").value = "210";
    document.getElementById("steenhoogte").value = "100";
    document.getElementById("steenBreedtePx").value = 42;
    document.getElementById("steenHoogtePx").value = 20;
  }
  if (s2 == "Yssel") {
    document.getElementById("steenbreedte").value = "160";
    document.getElementById("steenhoogte").value = "78";
    document.getElementById("steenBreedtePx").value = 32;
    document.getElementById("steenHoogtePx").value = 16;
  }
  if (s2 == "Klooster") {
    document.getElementById("steenbreedte").value = "280";
    document.getElementById("steenhoogte").value = "130";
    document.getElementById("steenBreedtePx").value = 56;
    document.getElementById("steenHoogtePx").value = 26;
  }

  var myList = document.getElementById("muurhoogte");
  var items = document.querySelectorAll("#myList li");
  for (let x = 0; x < 6; x++) {
    if (myList.hasChildNodes()) {
      myList.removeChild(myList.children[0]);
    }
  }

  var l = document.getElementById("muurhoogte");
  var s = parseFloat(document.getElementById("steenhoogte").value) + 4;

  var ash = parseInt(2000 / s);
  var hm = ash * s;
  let y = 0;
  for (let x = 0; x < 6; x++) {
    var option = document.createElement("option");
    option.text = (hm + y) / 1000 + " meter";
    option.value = hm + y;
    l.add(option);
    y += 2 * s;
  }

  var myList = document.getElementById("muurbreedte");
  var items = document.querySelectorAll("#myList li");
  for (let x = 0; x < 6; x++) {
    if (myList.hasChildNodes()) {
      myList.removeChild(myList.children[0]);
    }
  }

  l = document.getElementById("muurbreedte");
  s = parseFloat(document.getElementById("steenbreedte").value) + 4;

  var asb = parseInt(3000 / s);
  var bm = asb * s;
  y = 0;
  for (let x = 0; x < 6; x++) {
    var option = document.createElement("option");
    option.text = (bm + y) / 1000 + " meter";
    option.value = bm + y;
    l.add(option);
    let sb1 = document.getElementById("steenbreedte").value;
    y += 3 * sb1;
  }
  changeMuur();
}

function changeMuur() {
  var mb = document.getElementById("muurbreedte");
  var mh = document.getElementById("muurhoogte");

  var mb1 = mb.options[mb.selectedIndex].value;
  document.getElementById("mbreedte").value = mb1;
  var asb = parseInt(
    mb1 / (parseInt(document.getElementById("steenbreedte").value) + 4)
  );
  document.getElementById("asb").value = asb;

  var mb2 = mh.options[mh.selectedIndex].value;
  document.getElementById("mhoogte").value = mb2;
  var ash = parseInt(
    mb2 / (parseInt(document.getElementById("steenhoogte").value) + 4)
  );
  document.getElementById("ash").value = ash;

  var bix = parseInt(mb1) * 0.2;
  var hix = parseInt(mb2) * 0.2;
  document.getElementById("muurBreedtePx").value =
    asb * (parseInt(document.getElementById("steenBreedtePx").value) + 4);
  document.getElementById("muurHoogtePx").value =
    ash * (parseInt(document.getElementById("steenHoogtePx").value) + 4);

  var x = document.getElementsByClassName("tabelmuur");
  x[0].style.visibility = "visible";

  document.getElementById("canvas").width =
    parseInt(document.getElementById("muurBreedtePx").value) + 4;
  document.getElementById("canvas").height =
    parseInt(document.getElementById("muurHoogtePx").value) + 4;
}
// Draw muur function
function drawMuur() {
  var asb = parseInt(document.getElementById("asb").value);
  var asb_org = asb;
  var ash = parseInt(document.getElementById("ash").value);

  var sb = document.getElementById("steenverband").value;

  var cw = parseInt(document.getElementById("muurBreedtePx").value) + 4;
  var ch = parseInt(document.getElementById("muurHoogtePx").value) + 4;

  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, cw, ch);

  if (canvas.getContext) {
    var steenDx = parseInt(document.getElementById("steenBreedtePx").value);
    var steenDy = parseInt(document.getElementById("steenHoogtePx").value);
    var steenDz = 20;
    var voegDx = 4;
    var voegDy = 4;
    var muurDx = document.getElementById("muurBreedtePx").value;
    var muurDy = document.getElementById("muurHoogtePx").value;
    var koppenMaat = steenDx + voegDx;
    var lagenMaat = steenDy + voegDy;

    var xpos = 4;
    var ypos = 4;

    for (let y = 0; y < ash; y++) {
      xpos = 4;
      asb = asb_org;

      if (sb === "half" && y % 2 === 1) {
        ctx.strokeStyle = "red";
        ctx.strokeRect(xpos, ypos, steenDx / 2, steenDy);
        xpos += steenDx / 2 + 4;
        asb -= 1;
      }

      for (let x = 0; x < asb; x++) {
        ctx.strokeStyle = "red";
        ctx.strokeRect(xpos, ypos, steenDx, steenDy);
        xpos += steenDx + 4;
      }

      if (sb === "half" && ash % 2 === 1) {
        ctx.strokeStyle = "red";
        ctx.strokeRect(xpos, ypos, steenDx / 2, steenDy);
      }
      ypos += steenDy + 4;
    }

    let d = document.getElementById("deuren").value;
    if (d > 0) {
      let da = document.getElementById("deurafstand").value;
      let xpos = 4 + da * koppenMaat;
      let ypos = ch - document.getElementById("deurHoogtePx").value;
      let db = parseInt(document.getElementById("deurBreedtePx").value) + 12;

      let deurbreedte = db;
      let deurhoogte = document.getElementById("deurHoogtePx").value;
      ctx.strokeRect(xpos, ypos, deurbreedte, deurhoogte);
      ctx.fillStyle = "white";
      ctx.fillRect(xpos, ypos, deurbreedte, deurhoogte);
    }
  }
}

// Canvas clear fucntion
function clearcanvas1() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  var w = canvas.width;
  canvas.width = 1;
  canvas.width = w;
}
