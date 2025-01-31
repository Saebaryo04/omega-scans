var ldDates = ["2023-08-16, 19:25:00","2023-08-08, 21:30:00", "2023-07-17, 14:00:00", "2023-07-17, 14:00:00", "2023-06-03", "2023-02-18", "2022-12-29", "2022-12-29", "2022-12-29", "2022-11-18", "2022-11-04", "2022-10-18"]
var ipualtDates = ["2023-04-14", "2023-04-14", "13-April-2023", "25-March-2023", "25-March-2023", "1-March-2023", "22-February-2023", "22-February-2023", "18-February-2023", "17-February-2023", "17-February-2023", "22-January-2023", "10-January-2023", "10-January-2023", "29-December-2022"];
var chsele;
let ipualtchno = 15;
let tsdchno = 19;
let ldchno = 12;
var lst_dates = [];
var series = [];
var mybutton = document.getElementById("myBtn");

function dateSet() {
  var ipualtdt = new Date(ipualtDates[0]);
  lst_dates.push(ipualtdt);
  series.push('ipualt');
  var lddt = new Date(ldDates[0]);
  lst_dates.push(lddt);
  series.push('ld')
}
dateSet();
const max = new Date(Math.max(...lst_dates));

function latestDate() {
  var indDate = new Date(max);
  for (let i = 0; i < lst_dates.length; i++) {
    if (indDate = lst_dates[i]) {
      console.log(series[i]);
      break
    }
  }
}

function datediff(arr) {
  let currDate = new Date();
  let targetDate = new Date(arr);
  var millsec = 1000;
  var secs = Math.round(Math.abs(currDate - targetDate) / millsec);
  var mins = Math.round(Math.abs(currDate - targetDate) / (millsec * 60));
  var hours = Math.round(Math.abs(currDate - targetDate) / (millsec * 60 * 60));
  var days = Math.round(Math.abs(currDate - targetDate) / (millsec * 60 * 60 * 24));
  var weeks = Math.round(Math.abs(currDate - targetDate) / (millsec * 60 * 60 * 24 * 7));
  var months = currDate.getMonth() - targetDate.getMonth() + 12 * (currDate.getFullYear() - targetDate.getFullYear());
  var years = Math.abs(currDate.getFullYear() - targetDate.getFullYear());
  if (secs >= 0 && secs <= 60) {
    if (secs == 1) {
      return secs + " second ago"
    } else {
      return secs + " seconds ago"
    }
  } else if (mins >= 1 && mins <= 60) {
    return mins + " minutes ago";
    if (mins == 1) {
      return mins + " minute ago"
    } else {
      return mins + " minutes ago"
    }
  } else if (hours >= 1 && hours <= 24) {
    if (hours == 1) {
      return hours + " hour ago"
    } else {
      return hours + " hours ago"
    }
  } else if (days >= 1 && days <= 7) {
    if (days == 1) {
      return days + " day ago"
    } else {
      return days + " days ago"
    }
  } else if (weeks >= 1 && weeks <= 4) {
    if (weeks == 1) {
      return weeks + " week ago"
    } else {
      return weeks + " weeks ago"
    }
  } else if (months >= 1 && months <= 12) {
    if (months == 1) {
      return months + " month ago"
    } else {
      return months + " months ago"
    }
  } else {
    if (years == 1) {
      return years + " year ago"
    } else {
      return years + " years ago"
    }
  }
}

function chselector() {
  var chno;
  if (info.series == "ld") {
    chno = ldchno;
    seleCreate(chno, info.chnos)
  } else if (info.series == "tsd") {
    chno = tsdchno;
    seleCreate(chno, cnos)
  } else if (info.series == "ipualt") {
    chno = ipualtchno;
    seleCreate(chno, info.chnos)
  }
}

function seleCreate(chno, cnos) {
  if (info.pageType == "ch") {
    chsele = document.getElementsByClassName("nwhspidey")
  }
  for (let j = 0; j < chsele.length; j++) {
    var para = document.createElement("select");
    para.setAttribute("class", "chapters-opt");
    para.setAttribute("id", "chapterselector");
    para.setAttribute("name", "chapterslist");
    para.setAttribute("onChange", "window.location.href=this.value");
    para.innerHTML = '<option value="" disabled>Select Chapter</option>';
    for (var i = 0; i < chno; i++) {
      var opt = document.createElement("option");
      opt.innerHTML = 'Chapter ' + (chno - i);
      opt.setAttribute("value", "https://omega-scans.github.io/light-dragon/chapter-" + (chno - i) + ".html");
      if ((chno - i) == cnos) {
        opt.setAttribute("selected", !0)
      }
      para.appendChild(opt)
    }
    chsele[j].appendChild(para)
  }
}

function nextprev() {
  var nextprev = document.getElementsByClassName('nextandprev');
  if (info.series == "ld") {
    if (info.chnos == 1) {
      for (i in nextprev) {
        nextprev[i].innerHTML = '<a href="https://omega-scans.github.io/light-dragon/chapter-' + (info.chnos + 1) + '" rel="next"> Next > </a>'
      }
    } else if (info.chnos < ldchno) {
      for (i in nextprev) {
        nextprev[i].innerHTML = '<a href="https://omega-scans.github.io/light-dragon/chapter-' + (info.chnos - 1) + '" rel="prev"> < Previous </a><a href="https://omega-scans.github.io/light-dragon/chapter-' + (info.chnos + 1) + '" rel="next"> Next > </a>'
      }
    } else {
      for (i in nextprev) {
        nextprev[i].innerHTML = '<a href="https://omega-scans.github.io/light-dragon/chapter-' + (info.chnos - 1) + '" rel="prev"> < Previous </a>'
      }
    }
  }
  if (info.series == "ipualt") {
    if (info.chnos == 1) {
      for (i in nextprev) {
        nextprev[i].innerHTML = '<a href="https://omega-scans.github.io/i-picked-up-a-lamp-today/chapter-' + (info.chnos + 1) + '" rel="next"> Next > </a>'
      }
    } else if (info.chnos < ipualtchno) {
      for (i in nextprev) {
        nextprev[i].innerHTML = '<a href="https://omega-scans.github.io/i-picked-up-a-lamp-today/chapter-' + (info.chnos - 1) + '" rel="prev"> < Previous </a><a href="https://omega-scans.github.io/i-picked-up-a-lamp-today/chapter-' + (info.chnos + 1) + '" rel="next"> Next > </a>'
      }
    } else {
      for (i in nextprev) {
        nextprev[i].innerHTML = '<a href="https://omega-scans.github.io/i-picked-up-a-lamp-today/chapter-' + (info.chnos - 1) + '" rel="prev"> < Previous </a>'
      }
    }
  }
}

function ulList() {
  chsele = document.querySelector('.listch');
  var ul = document.createElement('ul');
  if (info.series == "ld") {
    for (let i = 0; i < ldchno; i++) {
      var lis = document.createElement("li");
      lis.innerHTML = '<div class="lichbox"><div class="lichnum"><a href="light-dragon/chapter-' + (ldchno - i) + ' " ' + '> <span>Chapter ' + (ldchno - i) + '</span> <span class="release-datech">' + (datediff(ldDates[i])) + '</span></a></div></div>';
      lis.setAttribute('value', ldchno - i);
      lis.setAttribute('styles', "background-image: url('images/7791.png');");
      ul.appendChild(lis)
    }
  }
  if (info.series == "ipualt") {
    for (let i = 0; i < ipualtchno; i++) {
      var lis = document.createElement("li");
      lis.innerHTML = '<div class="lichbox"><div class="lichnum"><a href="i-picked-up-a-lamp-today/chapter-' + (ipualtchno - i) + ' " ' + '> <span>Chapter ' + (ipualtchno - i) + '</span> <span class="release-datech">' + (datediff(ipualtDates[i])) + '</span></a></div></div>';
      lis.setAttribute('value', ipualtchno - i);
      lis.setAttribute('styles', "background-image: url('images/7791.png');");
      ul.appendChild(lis)
    }
  }
  chsele.appendChild(ul)
}

function indexch() {
  if (document.getElementById('ipualtind').id == "ipualtind") {
    var index;
    var ul = document.createElement("ul");
    index = document.getElementById('ipualtind');
    for (let i = 0; i < 2; i++) {
      var li = document.createElement('li');
      li.innerHTML = '<a href="https://omega-scans.github.io/i-picked-up-a-lamp-today/chapter-' + (ipualtchno - i) + '"' + '>Chapter ' + (ipualtchno - i) + '</a> <span class="release-date">' + (datediff(ipualtDates[i])) + '</span>';
      ul.appendChild(li)
    }
    index.appendChild(ul)
  }
  if (document.getElementById('ldind').id == "ldind") {
    var index;
    var ul = document.createElement("ul");
    index = document.getElementById('ldind');
    for (let i = 0; i < 2; i++) {
      var lis = document.createElement('li');
      lis.innerHTML = '<a href="https://omega-scans.github.io/light-dragon/chapter-' + (ldchno - i) + '"' + '>Chapter ' + (ldchno - i) + '</a> <span class="release-date">' + (datediff(ldDates[i])) + '</span>';
      ul.appendChild(lis)
    }
    index.appendChild(ul)
  }
}

function imgGen() {
  var read = document.getElementById('readingarea');
  if (info.ifnew == 1) {
    if (info.series == "ld") {
      var para = document.createElement("p");
      for (let i = 0; i < info.pgNo; i++) {
        var para = document.createElement("p");
        var p = document.createElement("img");
        if (i == 0) {
          p.setAttribute("loading", "eager");
          p.setAttribute("src", 'https://omega-scans-images.github.io/light-dragon/chapter-' + (info.chnos) + '/-' + (i + 1) + '.jpg');
          p.setAttribute("alt", "Page-" + (i + 1));
          para.appendChild(p);
          read.appendChild(para)
        } else {
          p.setAttribute("src", 'https://omega-scans-images.github.io/light-dragon/chapter-' + (info.chnos) + '/-' + (i + 1) + '.jpg');
          p.setAttribute("loading", "lazy");
          p.setAttribute("alt", "Page-" + (i + 1));
          para.appendChild(p);
          read.appendChild(para)
        }
      }
      var para = document.createElement("p");
      var p = document.createElement("img");
      var scpt = document.createElement("script");
      scpt.setAttribute("async", !0);
      scpt.setAttribute("src", "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1601431267706393");
      scpt.setAttribute("crossorigin", "anonymous");
      para.appendChild(scpt);
      var ins = document.createElement("ins");
      ins.setAttribute("class", "adsbygoogle");
      ins.setAttribute("style", "display:block");
      ins.setAttribute("data-ad-client", "ca-pub-1601431267706393");
      ins.setAttribute("data-ad-slot", "9130805434");
      ins.setAttribute("data-ad-format", "auto");
      ins.setAttribute("data-full-width-responsive", "true");
      para.appendChild(ins);
      var scpt2 = document.createElement("script");
      scpt2.innerHTML = '         (adsbygoogle = window.adsbygoogle || []).push({});';
      para.appendChild(scpt2);
      if (info.patron == 1) {
        var f = document.createElement("img");
        f.setAttribute("loading", "lazy");
        f.setAttribute("src", 'https://omega-scans-images.github.io/patrons/patrons' + (info.month) + '.png');
        f.setAttribute("alt", "Patrons");
        para.appendChild(f)
      }
      if (info.collab == 1) {
        var z = document.createElement("img");
        z.setAttribute("src", 'https://omega-scans-images.github.io/100.png');
        z.setAttribute("alt", 'page-' + (info.pgNo + 1));
        para.appendChild(z);
        read.appendChild(para)
      }
      p.setAttribute("src", 'https://omega-scans-images.github.io/INFOREQ.png');
      p.setAttribute("alt", 'page-' + (info.pgNo + 2));
      para.appendChild(p);
      read.appendChild(para)
    }
  }
}

function firstLatest() {
  var eleFir = document.getElementById("firstcha");
  var eleLst = document.getElementById("lastcha");
  var eleFirSp = document.getElementById("firstch");
  var eleLstSp = document.getElementById("lastch");
  if (info.series == "ipualt") {
    eleFir.setAttribute("href", "https://omega-scans.github.io/i-picked-up-a-lamp-today/chapter-" + (ipualtchno - (ipualtchno - 1)));
    eleFirSp.innerHTML = "Chapter " + (ipualtchno - (ipualtchno - 1));
    eleLst.setAttribute("href", "https://omega-scans.github.io/i-picked-up-a-lamp-today/chapter-" + (ipualtchno));
    eleLstSp.innerHTML = "Chapter " + (ipualtchno)
  }
  if (info.series == "ld") {
    eleFir.setAttribute("href", "https://omega-scans.github.io/light-dragon/chapter-" + (ldchno - (ldchno - 1)));
    eleFirSp.innerHTML = "Chapter " + (ldchno - (ldchno - 1));
    eleLst.setAttribute("href", "https://omega-scans.github.io/light-dragon/chapter-" + (ldchno));
    eleLstSp.innerHTML = "Chapter " + (ldchno)
  }
}
if (info.pageType == "info") {
  ulList();
  firstLatest();
  indexch();
  themech();
  window.onscroll = function() {
    scrollFunction()
  }
} else if (info.pageType == "index") {
  indexch();
  window.onscroll = function() {
    scrollFunction()
  }
} else if (info.pageType == "ch") {
  nextprev();
  chselector();
  imgGen();
  themech();
  window.onscroll = function() {
    var y = $(window).scrollTop();
    if (y > 500 && y < ($("#readingarea").height() - 200)) {
      $('#readprogress').fadeIn();
      $('#progressbar').css("width", ($(window).scrollTop()) / ($("#readingarea").height()) * 100 + '%')
    } else {
      $('#readprogress').fadeOut()
    }
    scrollFunction()
  }
}

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block"
  } else {
    mybutton.style.display = "none"
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0
}

function themech() {
var para =  document.createElement("span");
para.innerHTML = "<label class='switch'><input type='checkbox' checked><span class='slider round'></span></label>";

  document.getElementById('myTopnav').appendChild(para);
  document.querySelector(".slider").addEventListener('click', () => {
    if ($("#switch input[type='checkbox']:checked")) {
      $("body").toggleClass('light');
    } else if ($("#switch input[type='checkbox']:checked") == false) {
      $("body").toggleClass('light');
    }
    // $('body').toggleClass('light')
  })
}
// TODO: add change theme option with mybutton, optimize the css
