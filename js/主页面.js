function newDate() {
    var date_in = document.getElementById("year");
    var date = date_in.value;
    date = date.replace('年', '').replace('月', '');
    var year = date.substring(0, 4);
    var month = date.substring(4);
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

    while(month>12){
        month--;
    }
    while(month<0){
        month++;
    }
    date_in.value = year + "年" + month + "月";
    createC(year, month);
}
function todo() {
    document.getElementById("note").value = "";

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
    date = date.replace('年', '').replace('月', '');
    var year = date.substring(0, 4);
    var month = date.substring(4);
    year = Number(year);
    month = Number(month);
    if (month == 1) {
        month = 12;
        year -= 1;
    } else {
        month -= 1;
    }
    date_in.value = year + "年" + month + "月";
    var monthName = document.getElementById("month-name");
    createC2(year, month);
}
function add1() {
    var date_in = document.getElementById("year");
    var date = date_in.value;
    date = date.replace('年', '').replace('月', '');
    var year = date.substring(0, 4);
    var month = date.substring(4);
    year = Number(year);
    month = Number(month);
    year--;
    date_in.value = year + "年" + month + "月";
    var monthName = document.getElementById("month-name");
    createC2(year, month);
}
function minus() {
    var date_in = document.getElementById("year");
    var date = date_in.value;
    date = date.replace('年', '').replace('月', '');
    var year = date.substring(0, 4);
    var month = date.substring(4);
    year = Number(year);
    month = Number(month);
    if (month == 12) {
        month = 1;
        year = year + 1;
    } else {
        month = month + 1;
    }
    date_in.value = year + "年" + month + "月";
    var monthName = document.getElementById("month-name");
    createC(year, month);
}
function minus1() {
    var date_in = document.getElementById("year");
    var date = date_in.value;
    date = date.replace('年', '').replace('月', '');
    var year = date.substring(0, 4);
    var month = date.substring(4);
    year = Number(year);
    month = Number(month);
    year++;
    date_in.value = year + "年" + month + "月";
    var monthName = document.getElementById("month-name");
    createC(year, month);
}
function is_leap(year) {
    return (year % 100 == 0 ? res = (year % 400 == 0 ? 1 : 0) : res = (year % 4 == 0 ? 1 : 0));
}
function createC(year, month) {
    var num = document.getElementById("bbb3").innerHTML;
    if (num % 2 == 0) {
        var body = document.getElementById("content");
        var calend = document.createElement("table");
        calend.id = "calendar0";
        body.appendChild(calend);
        var calend2 = document.getElementById('calendar');
        calend2.setAttribute("data-role", "page");
        calend.setAttribute("data-role", "page");
        calend2.innerHTML += '<a id="p1" href="#calendar0" data-transition="slide">滑动</a>';
    } else {
        var body = document.getElementById("content");
        var calend = document.createElement("table");
        calend.id = "calendar";
        body.appendChild(calend);
        var calend2 = document.getElementById('calendar0');
        calend2.setAttribute("data-role", "page");
        calend.setAttribute("data-role", "page");
        calend2.innerHTML += '<a id="p1" href="#calendar" data-transition="slide">滑动</a>';
    }

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
                    left(this, year, month, t0);
                    var a = document.getElementsByTagName("td");
                    for (var i = 0; i < a.length; i++) {
                        if (year == yy && month == mm && a[i].innerText == dd) continue;
                        a[i].style.backgroundImage = "none";
                        a[i].style.color = "black";
                        if (i % 7 == 0) a[i].style.color = "#ff7892";
                        if (i % 7 == 6) a[i].style.color = "#ff7892";
                        if (a[i].className == "td_title") a[i].style.color = "#ff7892";
                    }
                    document.getElementById("num").innerHTML = this.innerHTML;
                    if (year == yy && month == mm && this.innerText == dd) return;
                    this.style.backgroundImage = "-webkit-linear-gradient(43deg, #FF6A88,rgb(255, 178, 192))";
                    this.style.color = "white";
                }
                td.ondblclick=function(){
                    alert(this.innerHTML);
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
            left2(yy, mm, t0, dd);

            tr.appendChild(td);
        }
        calend.appendChild(tr);
    }
    var a = document.getElementsByTagName("td");
    for (var i = 0; i < a.length; i++) {
        if (year == yy && month == mm && a[i].innerHTML == dd) {
            continue;
        }
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
    document.getElementById("left-weekday").innerHTML = monthName.innerHTML;

    document.getElementById("p1").click();
    calend2.remove(calend2);
    var num2 = document.getElementById("bbb3");
    num2.innerHTML++;
    a1();
}
function createC2(year, month) {
    var num = document.getElementById("bbb3").innerHTML;
    if (num % 2 == 0) {
        var body = document.getElementById("content");
        var calend = document.createElement("table");
        calend.id = "calendar0";
        body.appendChild(calend);
        var calend2 = document.getElementById('calendar');
        calend2.setAttribute("data-role", "page");
        calend.setAttribute("data-role", "page");
        calend2.innerHTML += '<a id="p1" href="#calendar0" data-transition="slide" data-direction="reverse">滑动</a>';
    } else {
        var body = document.getElementById("content");
        var calend = document.createElement("table");
        calend.id = "calendar";
        body.appendChild(calend);
        var calend2 = document.getElementById('calendar0');
        calend2.setAttribute("data-role", "page");
        calend.setAttribute("data-role", "page");
        calend2.innerHTML += '<a id="p1" href="#calendar" data-transition="slide" data-direction="reverse">滑动</a>';
    }

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
                    left(this, year, month, t0);
                    var a = document.getElementsByTagName("td");
                    for (var i = 0; i < a.length; i++) {
                        if (year == yy && month == mm && a[i].innerText == dd) continue;
                        a[i].style.backgroundImage = "none";
                        a[i].style.color = "black";
                        if (i % 7 == 0) a[i].style.color = "#ff7892";
                        if (i % 7 == 6) a[i].style.color = "#ff7892";
                        if (a[i].className == "td_title") a[i].style.color = "#ff7892";
                    }
                    document.getElementById("num").innerHTML = this.innerHTML;
                    if (year == yy && month == mm && this.innerText == dd) return;
                    this.style.backgroundImage = "-webkit-linear-gradient(43deg, #FF6A88,rgb(255, 178, 192))";
                    this.style.color = "white";
                }
                td.ondblclick=function(){
                    alert(this.innerHTML);
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
            //left2(yy, mm, t0, dd);

            tr.appendChild(td);
        }
        calend.appendChild(tr);
    }
    var a = document.getElementsByTagName("td");
    for (var i = 0; i < a.length; i++) {
        if (year == yy && month == mm && a[i].innerHTML == dd) {
            continue;
        }
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
    document.getElementById("left-weekday").innerHTML = monthName.innerHTML;


    if (num % 2 == 0) {
        document.getElementById("p1").click();
        calend2.remove(calend2);
    } else {
        document.getElementById("p1").click();
        calend2.remove(calend2);
    }
    var num2 = document.getElementById("bbb3");
    num2.innerHTML++;
    a1();
}

function left(i, year, m, d) {
    var dayName; var monthName;
    switch (d) {
        case 0: dayName = "Sunday"; break;
        case 1: dayName = "Monday"; break;
        case 2: dayName = "Tuesday"; break;
        case 3: dayName = "Wednesday"; break;
        case 4: dayName = "Thursday"; break;
        case 5: dayName = "Friday"; break;
        case 6: dayName = "Saturday"; break;
    }
    document.getElementById("left-day").innerHTML = i.innerText + " , " + dayName;
}
function left2(year, m, d, dd) {
    var dayName; var monthName;
    switch (d) {
        case 0: dayName = "Sunday"; break;
        case 1: dayName = "Monday"; break;
        case 2: dayName = "Tuesday"; break;
        case 3: dayName = "Wednesday"; break;
        case 4: dayName = "Thursday"; break;
        case 5: dayName = "Friday"; break;
        case 6: dayName = "Saturday"; break;
    }
    document.getElementById("left-day").innerHTML = dd + " , " + dayName;
}
function a1() {
    var a = document.getElementsByTagName("td");
    var num = document.getElementById("num").innerHTML;
    while (1) {
        for (var i = 0; i < a.length; i++) {
            if (num == a[i].innerHTML) {
                a[i].click();
                return;
            }
        }
        num--;
    }
}