const query = getQueryParams();
// console.log(query);
let englishtrans = true;
let numsjjtfunc;
function start() {
  checkAndSetTranslateEnglish();
  gm();
  getdayf();
  setns();
  setng();
}
start();

function getQueryParams() {
  const params = {};
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  urlParams.forEach((value, key) => {
    params[key] = value;
  });

  return params;
}

function setLocalStorage(name, value) {
  localStorage.setItem(name, value);
}

function getLocalStorage(name) {
  return localStorage.getItem(name);
}

function checkAndSetTranslateEnglish() {
  const translateEnglish = getLocalStorage("translate-english");
  const transt = document.getElementById("transt");

  if (!translateEnglish) {
    // console.log("Tunggu...");
    setLocalStorage("translate-english", "true");
    transt.innerText = "English";
  } else {
    // console.log("LS:", translateEnglish);
    if (translateEnglish == "true") {
      transt.innerText = "English";
      englishtrans = true;
      translatefunc(true);
    } else {
      transt.innerText = "Indonesia";
      englishtrans = false;
      translatefunc(false);
    }
  }
}

// Fungsi untuk membalik nilai translate-english di Local Storage
function toggleTrans() {
  const currentValue = localStorage.getItem("translate-english");
  const transt = document.getElementById("transt");

  if (currentValue === "true") {
    localStorage.setItem("translate-english", "false");
    // console.log("translate-english diubah menjadi false");
    transt.innerText = "Indonesia";
    englishtrans = false;
    translatefunc(false);
  } else if (currentValue === "false") {
    localStorage.setItem("translate-english", "true");
    // console.log("translate-english diubah menjadi true");
    transt.innerText = "English";
    englishtrans = true;
    translatefunc(true);
  } else {
    // console.log(
    //   "translate-english tidak ditemukan, menyetelnya menjadi true sebagai nilai default"
    // );
    localStorage.setItem("translate-english", "true");
    transt.innerText = "Indonesia";
    englishtrans = false;
    translatefunc(false);
  }
}

function gm() {
  const home = document.getElementById("home");
  const data = document.getElementById("data");
  const ljp = document.getElementById("ljp");
  const ljpi = document.getElementById("ljpi");
  const lki = document.getElementById("lki");
  const lns = document.getElementById("lns");
  const lng = document.getElementById("lng");
  const lsnt = document.getElementsByClassName("lsnt");
  if (query.m == "home") {
    home.classList.remove("n");
    data.classList.add("n");
    lsnt[0].classList.add("lsntt");
    lsnt[1].classList.remove("lsntt");
    lsnt[2].classList.remove("lsntt");
    lsnt[3].classList.remove("lsntt");
  } else if (query.m == "data") {
    data.classList.remove("n");
    home.classList.add("n");
    lsnt[0].classList.remove("lsntt");
    lsnt[1].classList.add("lsntt");
    lsnt[2].classList.remove("lsntt");
    lsnt[3].classList.remove("lsntt");
    if (query.p == "jp") {
      ljp.classList.remove("n");
      lki.classList.add("n");
      ljpi.classList.add("n");
      lns.classList.add("n");
      lng.classList.add("n");
    } else if (query.p == "jt") {
      ljp.classList.add("n");
      ljpi.classList.remove("n");
      lki.classList.add("n");
      lns.classList.add("n");
      lng.classList.add("n");
    } else if (query.p == "ng") {
      ljp.classList.add("n");
      ljpi.classList.add("n");
      lki.classList.add("n");
      lng.classList.remove("n");
      lns.classList.add("n");
    } else if (query.p == "ns") {
      ljp.classList.add("n");
      ljpi.classList.add("n");
      lki.classList.add("n");
      lns.classList.remove("n");
      lng.classList.add("n");
    } else {
      ljp.classList.add("n");
      lki.classList.remove("n");
      ljpi.classList.add("n");
      lns.classList.add("n");
      lng.classList.add("n");
    }
  } else {
    home.classList.remove("n");
    data.classList.add("n");
    lsnt[0].classList.add("lsntt");
    lsnt[1].classList.remove("lsntt");
    lsnt[2].classList.remove("lsntt");
    lsnt[3].classList.remove("lsntt");
  }
}

let toglemenu = false;
function menu() {
  const burger = document.getElementById("burger");
  const burgerbtn = document.getElementById("burgerbtn");
  if (toglemenu) {
    burger.classList.add("n");
    burgerbtn.src = "img/menu-burger.png";
    toglemenu = false;
  } else {
    burger.classList.remove("n");
    burgerbtn.src = "img/close.png";
    toglemenu = true;
  }
}

function getdayf() {
  var date = new Date();
  var day = date.getDay();
  refreshch();
  dayselect(day);
}

function dayselect(day) {
  if (day == 1) {
    sdjad(datajp.Senin, 1);
    sdjad2(datajt.Senin, 1);
  } else if (day == 2) {
    sdjad(datajp.Selasa, 2);
    sdjad2(datajt.Selasa, 2);
  } else if (day == 3) {
    sdjad(datajp.Rabu, 3);
    sdjad2(datajt.Rabu, 3);
  } else if (day == 4) {
    sdjad(datajp.Kamis, 4);
    sdjad2(datajt.Kamis, 4);
  } else if (day == 5) {
    sdjad(datajp.Jumat, 5);
    sdjad2(datajt.Jumat, 5);
  } else {
    sdjad();
    sdjad2();
  }
}

function sdjad(jsonjps, num) {
  const ttfn = document.getElementById("ttfn");
  if (jsonjps) {
    ttfn.classList.add("n");
    const output = document.getElementById("jadcpid");
    output.innerHTML = "";
    for (let i = 0; i < jsonjps.length; i++) {
      const el = document.createElement("div");
      const jsonpel = jsonjps[i];
      // const nojad = jsonpel.no;
      const jamjad = jsonpel.jam;
      const peljad = jsonpel.pel;
      const grpelf = grpel(peljad);
      const bpeljad = jsonpel.bpel;
      el.innerHTML =
        `<p class="jpew">` + jamjad + `</p><p class="jpem">` + grpelf + `</p>`;
      if (bpeljad) {
        el.className = "jadc jadcbp";
      } else {
        el.className = "jadc";
      }
      output.appendChild(el);
    }
    const dayi = document.getElementById("dayi");
    dayi.value = num;
    sjjtfunc(num, englishtrans);
  } else {
    ttfn.classList.remove("n");
    const sjjt = document.getElementById("sjjp");
    sjjt.innerText = "";
  }
}
function sdjad2(jsonjps, num, ket) {
  const ttfn = document.getElementById("ttfni");
  if (jsonjps) {
    ttfn.classList.add("n");
    const output = document.getElementById("jadcpidi");
    output.innerHTML = "";
    for (let i = 0; i < jsonjps.length; i++) {
      const el = document.createElement("div");
      const jsonpel = jsonjps[i];
      // const nojad = jsonpel.no;
      const absjad = jsonpel.abs;
      const namjad = jsonpel.nama.toUpperCase();
      el.innerHTML = `<p class="jpem">` + namjad + " / " + absjad + `</p>`;
      el.className = "jadc jadc2";
      el.setAttribute("data-abs", absjad);
      el.setAttribute("data-nam", namjad);
      output.appendChild(el);
    }
    const dayi = document.getElementById("dayi");
    dayi.value = num;
    sjjtfunc(num, englishtrans);
  } else {
    ttfn.classList.remove("n");
    const sjjt = document.getElementById("sjjt");
    sjjt.innerText = "";
  }
}

function setns() {
  const jsonjps = datass;
  const output = document.getElementById("nscpid");
  output.innerHTML = "";
  for (let i = 0; i < jsonjps.length; i++) {
    const el = document.createElement("div");
    const jsonpel = jsonjps[i];
    // const nojad = jsonpel.no;
    const absjad = jsonpel.abs;
    const namjad = jsonpel.nama.toUpperCase();
    el.innerHTML = `<p class="jpem">` + absjad + ". " + namjad + `</p>`;
    el.className = "jadc nsc";
    el.setAttribute("data-abs", absjad);
    el.setAttribute("data-nam", namjad);
    output.appendChild(el);
  }
}

function setng() {
  const jsonjps = datagr2;
  const output = document.getElementById("ngcpid");
  output.innerHTML = "";
  for (let i = 0; i < jsonjps.length; i++) {
    const el = document.createElement("div");
    const jsonpel = jsonjps[i];
    // const nojad = jsonpel.no;
    const absjad = jsonpel.no;
    const namjad = jsonpel.nama.toUpperCase();
    el.innerHTML = `<p class="jpem">` + absjad + ". " + namjad + `</p>`;
    el.className = "jadc ngc";
    el.setAttribute("data-no", absjad);
    el.setAttribute("data-nam", namjad);
    output.appendChild(el);
  }
}

function refreshch() {
  const ttfn = document.getElementById("ttfn");
  const output = document.getElementById("jadcpid");
  const sjjt = document.getElementById("sjjp");
  output.innerHTML = "";
  ttfn.classList.remove("n");
  sjjt.innerText = "";

  const ttfn2 = document.getElementById("ttfni");
  const output2 = document.getElementById("jadcpidi");
  const sjjt2 = document.getElementById("sjjt");
  output2.innerHTML = "";
  ttfn2.classList.remove("n");
  sjjt2.innerText = "";
}

function grpel(num) {
  if (num == "1") {
    return datagr.n1.pel;
  } else if (num == "2") {
    return datagr.n2.pel;
  } else if (num == "3") {
    return datagr.n3.pel;
  } else if (num == "4") {
    return datagr.n4.pel;
  } else if (num == "5") {
    return datagr.n5.pel;
  } else if (num == "6") {
    return datagr.n6.pel;
  } else if (num == "7") {
    return datagr.n7.pel;
  } else if (num == "8") {
    return datagr.n8.pel;
  } else if (num == "9") {
    return datagr.n9.pel;
  } else if (num == "10") {
    return datagr.n10.pel;
  } else if (num == "11") {
    return datagr.n11.pel;
  } else if (num == "12") {
    return datagr.n12.pel;
  } else if (num == "13") {
    return datagr.n13.pel;
  } else if (num == "14") {
    return datagr.n14.pel;
  } else if (num == "15") {
    return datagr.n15.pel;
  } else {
    return num.toUpperCase();
  }
}

function gmjad(num) {
  const dayi = document.getElementById("dayi");
  const searchi = document.getElementById("searchi");
  const pjp1 = document.getElementById("pjp1");
  const pjp2 = document.getElementById("pjp2");
  if (num == 1) {
    dayi.classList.add("n");
    searchi.classList.add("n");
    pjp1.className = "trpljp";
    pjp2.className = "flpljp";
    refreshch();
  } else {
    dayi.classList.remove("n");
    searchi.classList.remove("n");
    pjp2.className = "trpljp";
    pjp1.className = "flpljp";
    refreshch();
    dayselect(1);
  }
}
function gmjad2(num) {
  const dayi = document.getElementById("dayii");
  const searchi = document.getElementById("searchii");
  const pjp1 = document.getElementById("pjpi1");
  const pjp2 = document.getElementById("pjpi2");
  if (num == 1) {
    dayi.classList.add("n");
    searchi.classList.add("n");
    pjp1.className = "trpljp";
    pjp2.className = "flpljp";
    refreshch();
  } else {
    dayi.classList.remove("n");
    searchi.classList.remove("n");
    pjp2.className = "trpljp";
    pjp1.className = "flpljp";
    refreshch();
    dayselect(1);
  }
}

function searchf(val) {
  let input = val.toUpperCase();
  const jadcElements = document.querySelectorAll(".jadc");

  jadcElements.forEach((jadc) => {
    const jpem = jadc.querySelector(".jpem");

    if (jpem && jpem.innerText.includes(input)) {
      jadc.classList.remove("n");
    } else {
      jadc.classList.add("n");
    }
  });
}
function searchf2(val) {
  let input = val.toUpperCase();
  let result = Number(input);

  if (!isNaN(result)) {
    const jadcElements = document.querySelectorAll(".jadc2");

    jadcElements.forEach((jadc) => {
      if (jadc.dataset.abs == input) {
        jadc.classList.remove("n");
      } else {
        jadc.classList.add("n");
      }
    });
  } else {
    const jadcElements = document.querySelectorAll(".jadc2");

    jadcElements.forEach((jadc) => {
      if (jadc.dataset.nam && jadc.dataset.nam.includes(input)) {
        jadc.classList.remove("n");
      } else {
        jadc.classList.add("n");
      }
    });
  }
}
function searchfns(val) {
  let input = val.toUpperCase();
  let result = Number(input);

  if (!isNaN(result)) {
    const jadcElements = document.querySelectorAll(".nsc");

    jadcElements.forEach((jadc) => {
      if (jadc.dataset.abs == input) {
        jadc.classList.remove("n");
      } else {
        jadc.classList.add("n");
      }
    });
  } else {
    const jadcElements = document.querySelectorAll(".nsc");

    jadcElements.forEach((jadc) => {
      if (jadc.dataset.nam && jadc.dataset.nam.includes(input)) {
        jadc.classList.remove("n");
      } else {
        jadc.classList.add("n");
      }
    });
  }
}
function searchfng(val) {
  let input = val.toUpperCase();
  let result = Number(input);

  if (!isNaN(result)) {
    const jadcElements = document.querySelectorAll(".ngc");

    jadcElements.forEach((jadc) => {
      if (jadc.dataset.no == input) {
        jadc.classList.remove("n");
      } else {
        jadc.classList.add("n");
      }
    });
  } else {
    const jadcElements = document.querySelectorAll(".ngc");

    jadcElements.forEach((jadc) => {
      if (jadc.dataset.nam && jadc.dataset.nam.includes(input)) {
        jadc.classList.remove("n");
      } else {
        jadc.classList.add("n");
      }
    });
  }
}

function translatefunc(english) {
  if (english) {
    document.documentElement.setAttribute("lang", "en");
    document.documentElement.lang = "en";
  } else {
    document.documentElement.setAttribute("lang", "id");
    document.documentElement.lang = "id";
  }
  const translatableElements = document.querySelectorAll("[data-trans]");
  const translatableElementsph = document.querySelectorAll("[data-transph]");

  translatableElements.forEach((element) => {
    const key = element.getAttribute("data-trans");
    const translation = translateei.find((item) => item.namadt === key);
    if (translation) {
      element.innerText = english ? translation.english : translation.indonesia;
    }
  });
  translatableElementsph.forEach((element) => {
    const key = element.getAttribute("data-transph");
    const translation = translateeiph.find((item) => item.namadt === key);
    if (translation) {
      element.placeholder = english
        ? translation.english
        : translation.indonesia;
    }
  });
  sjjtfunc(null, english);
}

function sjjtfunc(num, bool) {
  if (num) {
    const sjjt = document.getElementById("sjjp");
    const sjjt2 = document.getElementById("sjjt");
    let result;
    if (num == 1) {
      result = translateei.find((item) => item.namadt === "h1");
    } else if (num == 2) {
      result = translateei.find((item) => item.namadt === "h2");
    } else if (num == 3) {
      result = translateei.find((item) => item.namadt === "h3");
    } else if (num == 4) {
      result = translateei.find((item) => item.namadt === "h4");
    } else if (num == 5) {
      result = translateei.find((item) => item.namadt === "h5");
    }

    const restrans = bool ? result.english : result.indonesia;
    if (bool) {
      sjjt.innerText = "DAY: " + restrans;
      sjjt2.innerText = "DAY: " + restrans;
    } else {
      sjjt.innerText = "HARI: " + restrans;
      sjjt2.innerText = "HARI: " + restrans;
    }
    numsjjtfunc = num;
  } else {
    if (numsjjtfunc) {
      const sjjt = document.getElementById("sjjp");
      const sjjt2 = document.getElementById("sjjt");
      let result;
      if (numsjjtfunc == 1) {
        result = translateei.find((item) => item.namadt === "h1");
      } else if (numsjjtfunc == 2) {
        result = translateei.find((item) => item.namadt === "h2");
      } else if (numsjjtfunc == 3) {
        result = translateei.find((item) => item.namadt === "h3");
      } else if (numsjjtfunc == 4) {
        result = translateei.find((item) => item.namadt === "h4");
      } else if (numsjjtfunc == 5) {
        result = translateei.find((item) => item.namadt === "h5");
      }

      const restrans = bool ? result.english : result.indonesia;
      if (bool) {
        sjjt.innerText = "DAY: " + restrans;
        sjjt2.innerText = "DAY: " + restrans;
      } else {
        sjjt.innerText = "HARI: " + restrans;
        sjjt2.innerText = "HARI: " + restrans;
      }
    }
  }
}
