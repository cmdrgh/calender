function tdclick(i0){
    var tt = document.getElementById("year");
    var year = tt.value.substring(0, 4);
    var month = tt.value.substring(4, 6);
    var myDate = new Date();
    var yy = myDate.getFullYear();
    var mm = myDate.getMonth();
    var dd = myDate.getDate();
    //if(yy==year&&month==mm)return;
    var day = new Date(year, month, i0.innerText);
    var t0 = day.getDay();
    var a = document.getElementsByTagName("td");
    for (var i = 0; i < a.length; i++) {
        if (year == yy && month == mm && a[i].innerText == dd) continue;
        a[i].style.backgroundImage = "none";
        a[i].style.color = "black";
        if (i % 7 == 0) a[i].style.color = "#ff7892";
        if (i % 7 == 6) a[i].style.color = "#ff7892";
        if (a[i].className == "td_title") a[i].style.color = "#ff7892";
    }
    i0.style.backgroundImage = "-webkit-linear-gradient(43deg, #FF6A88,rgb(255, 178, 192))";
    i0.style.color = "white";
}
function newDate() {
var date_in = document.getElementById("year");
var date = date_in.value;
date = date.replace('-', '').replace('-', '');
if (date.length != 8) return;
var year = date.substring(0, 4);
var month = date.substring(4, 6);
var date0 = date.substring(6, 8);
year = Number(year);
month = Number(month);
if(year == "" || year ==null){
    return;
}
if(isNaN(year)){
    return;
}
if(month == "" || month ==null){
    return;
}
if(isNaN(month)){
    return;
}
if(date0 == "" || date0 ==null){
    return;
}
if(isNaN(date0)){
    return;
}
if(month>12||month<0)return;
createC(year, month, date0);
var a = document.getElementsByTagName("td");
var sign=0;
while (1) {
    for (var i = 0; i < a.length; i++) {
        if ("0" + a[i].innerHTML == date0||a[i].innerHTML == date0){
            tdclick(a[i]);
            sign=1;
            break;
        } 
    }
    if(sign==1)break;
    date0--;
}
}
function removeChildren(pnode) {
var childs = pnode.childNodes;
for (var i = childs.length - 1; i >= 0; i--) {
    pnode.removeChild(childs.item(i));
}
}
function add() {
var date_in = document.getElementById("year");
var date = date_in.value;
date = date.replace('-', '').replace('-', '');
var year = date.substring(0, 4);
var month = date.substring(4, 6);
var date0 = date.substring(6, 8);
year = Number(year);
month = Number(month);
if (month == 1) {
    month = 12;
    year -= 1;
} else {
    month -= 1;
}
createC(year, month, date0);
var a = document.getElementsByTagName("td");
var sign=0;
while (1) {
    for (var i = 0; i < a.length; i++) {
        if ("0" + a[i].innerHTML == date0||a[i].innerHTML == date0){
            tdclick(a[i]);
            sign=1;
            break;
        } 
    }
    if(sign==1)break;
    date0--;
}
if (date0 < 10 && month < 10) {
    document.getElementById("year").value = year + "-0" + month + "-" + date0;
}
if (date0 >= 10 && month < 10) {
    document.getElementById("year").value = year + "-0" + month + "-" + date0;
}
if (date0 < 10 && month >= 10) {
    document.getElementById("year").value = year + "-" + month + "-" + date0;
}
if (date0 >= 10 && month >= 10) {
    document.getElementById("year").value = year + "-" + month + "-" + date0;
}
}
function add1() {
var date_in = document.getElementById("year");
var date = date_in.value;
date = date.replace('-', '').replace('-', '');
var year = date.substring(0, 4);
var month = date.substring(4, 6);
var date0 = date.substring(6, 8);
year = Number(year);
month = Number(month);
year--;
createC(year, month, date0);
var a = document.getElementsByTagName("td");
var sign=0;
while (1) {
    for (var i = 0; i < a.length; i++) {
        if ("0" + a[i].innerHTML == date0||a[i].innerHTML == date0){
            tdclick(a[i]);
            sign=1;
            break;
        } 
    }
    if(sign==1)break;
    date0--;
}
if (date0 < 10 && month < 10) {
    document.getElementById("year").value = year + "-0" + month + "-" + date0;
}
if (date0 >= 10 && month < 10) {
    document.getElementById("year").value = year + "-0" + month + "-" + date0;
}
if (date0 < 10 && month >= 10) {
    document.getElementById("year").value = year + "-" + month + "-" + date0;
}
if (date0 >= 10 && month >= 10) {
    document.getElementById("year").value = year + "-" + month + "-" + date0;
}
}
function minus() {
var date_in = document.getElementById("year");
var date = date_in.value;
date = date.replace('-', '').replace('-', '');
var year = date.substring(0, 4);
var month = date.substring(4, 6);
var date0 = date.substring(6, 8);
year = Number(year);
month = Number(month);
if (month == 12) {
    month = 1;
    year = year + 1;
} else {
    month = month + 1;
}
createC(year, month, date0);
var a = document.getElementsByTagName("td");
var sign=0;
while (1) {
    for (var i = 0; i < a.length; i++) {
        if ("0" + a[i].innerHTML == date0||a[i].innerHTML == date0){
            tdclick(a[i]);
            sign=1;
            break;
        } 
    }
    if(sign==1)break;
    date0--;
}
if (date0 < 10 && month < 10) {
    document.getElementById("year").value = year + "-0" + month + "-" + date0;
}
if (date0 >= 10 && month < 10) {
    document.getElementById("year").value = year + "-0" + month + "-" + date0;
}
if (date0 < 10 && month >= 10) {
    document.getElementById("year").value = year + "-" + month + "-" + date0;
}
if (date0 >= 10 && month >= 10) {
    document.getElementById("year").value = year + "-" + month + "-" + date0;
}
}
function minus1() {
var date_in = document.getElementById("year");
var date = date_in.value;
date = date.replace('-', '').replace('-', '');
var year = date.substring(0, 4);
var month = date.substring(4, 6);
var date0 = date.substring(6, 8);
year = Number(year);
month = Number(month);
year++;
createC(year, month, date0);
var a = document.getElementsByTagName("td");
var sign=0;
while (1) {
    for (var i = 0; i < a.length; i++) {
        if ("0" + a[i].innerHTML == date0||a[i].innerHTML == date0){
            tdclick(a[i]);
            sign=1;
            break;
        } 
    }
    if(sign==1)break;
    date0--;
}
if (date0 < 10 && month < 10) {
    document.getElementById("year").value = year + "-0" + month + "-" + date0;
}
if (date0 >= 10 && month < 10) {
    document.getElementById("year").value = year + "-0" + month + "-" + date0;
}
if (date0 < 10 && month >= 10) {
    document.getElementById("year").value = year + "-" + month + "-" + date0;
}
if (date0 >= 10 && month >= 10) {
    document.getElementById("year").value = year + "-" + month + "-" + date0;
}
}
function is_leap(year) {
return (year % 100 == 0 ? res = (year % 400 == 0 ? 1 : 0) : res = (year % 4 == 0 ? 1 : 0));
}
function createC(year, month, date0) {
var calend = document.getElementById('calendar');
removeChildren(calend);
var tr_title = document.createElement('tr');
var titles = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];
for (var m = 0; m < titles.length; m++) {
    var td_title = document.createElement('td');
    td_title.className = "td_title";
    td_title.innerText = titles[m];
    tr_title.appendChild(td_title);
}
calend.appendChild(tr_title);
year = Number(year);
month = Number(month) - 1;
var nstr = new Date(year, month, 1); //当前Date
var firstday = nstr.getDay();//星期几 
var m_days = new Array(31, 28 + is_leap(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31); //各月份的总天数
var tr_str = Math.ceil((m_days[month] + firstday) / 7);
for (i = 0; i < tr_str; i++) { //表格的行
    var tr = document.createElement("tr");
    for (k = 0; k < 7; k++) { //表格每行的单元格
        var td = document.createElement("td");
        idx = i * 7 + k;
        date_str = idx - firstday + 1;
        (date_str <= 0 || date_str > m_days[month]) ? date_str = "" : date_str = idx - firstday + 1; //过滤
        td.innerText = date_str;

        if (date_str != '') {
            td.onclick = function () {
                var myDate = new Date();
                var yy = myDate.getFullYear();
                var mm = myDate.getMonth();
                var dd = myDate.getDate();
                //if(yy==year&&month==mm)return;
                var day = new Date(year, month, this.innerText);

                var t0 = day.getDay();
                var a = document.getElementsByTagName("td");
                for (var i = 0; i < a.length; i++) {
                    if (year == yy && month == mm && a[i].innerText == dd) continue;
                    a[i].style.backgroundImage = "none";
                    a[i].style.color = "black";
                    if (i % 7 == 0) a[i].style.color = "#ff7892";
                    if (i % 7 == 6) a[i].style.color = "#ff7892";
                    if (a[i].className == "td_title") a[i].style.color = "#ff7892";
                }
                var tt = document.getElementById("year");
                if (this.innerText < 10 && (month + 1) < 10) {
                    tt.value = year + "-0" + (month + 1) + "-0" + this.innerText;
                }
                if (this.innerText >= 10 && (month + 1) < 10) {
                    tt.value = year + "-0" + (month + 1) + "-" + this.innerText;
                }
                if (this.innerText < 10 && (month + 1) >= 10) {
                    tt.value = year + "-" + (month + 1) + "-0" + this.innerText;
                }
                if (this.innerText >= 10 && (month + 1) >= 10) {
                    tt.value = year + "-" + (month + 1) + "-" + this.innerText;
                }
                if (year == yy && month == mm && this.innerText == dd) return;

                this.style.backgroundImage = "-webkit-linear-gradient(43deg, #FF6A88,rgb(255, 178, 192))";
                this.style.color = "white";
                $.ajax({
                    type: "POST",
                    url: "http://127.0.0.1:5000/note/someday",
                    dataType: "json",
                    data: {
                        data: $("#year").val(),
                        type:"date",
                    },
                    success: function (data) {
                        window.open(data,"_self");
                    },
                });
            }

        } else {
            td.className = "none-td";
        }
        var myDate = new Date();
        var yy = myDate.getFullYear();
        var mm = myDate.getMonth();
        var dd = myDate.getDate();
        var day = new Date(yy, mm, dd);
        var t0 = day.getDay();
        if (year == yy && month == mm && date_str == dd) {

            td.style.backgroundImage = "-webkit-linear-gradient(43deg,#4158D0,#FC00FF)";

            td.style.color = "white ";
        }
        // left2(yy, mm, t0, dd);

        tr.appendChild(td);
    }
    calend.appendChild(tr);
}
var a = document.getElementsByTagName("td");
for (var i = 0; i < a.length; i++) {
    if (year == yy && month == mm && a[i].innerHTML == dd) continue;
    a[i].style.backgroundImage = "none";
    a[i].style.color = "black";
    if (i % 7 == 0) a[i].style.color = "#ff7892";
    if (i % 7 == 6) a[i].style.color = "#ff7892";
    if (a[i].className == "td_title") a[i].style.color = "#ff7892";
}
var monthName = document.getElementById("month-name");

switch (month + 1) {
    case 1: monthName.innerHTML = year + " January "; break;
    case 2: monthName.innerHTML = year + " February "; break;
    case 3: monthName.innerHTML = year + " March "; break;
    case 4: monthName.innerHTML = year + " April "; break;
    case 5: monthName.innerHTML = year + " May "; break;
    case 6: monthName.innerHTML = year + " June "; break;
    case 7: monthName.innerHTML = year + " July "; break;
    case 8: monthName.innerHTML = year + " August "; break;
    case 9: monthName.innerHTML = year + " September "; break;
    case 10: monthName.innerHTML = year + " October "; break;
    case 11: monthName.innerHTML = year + " November "; break;
    case 12: monthName.innerHTML = year + " December "; break;
}
}


