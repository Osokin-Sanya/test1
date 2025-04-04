function dateToYMD(date) {
    let d = date.getDate();
    let m = date.getMonth() + 1; //Month from 0 to 11
    let y = date.getFullYear();
    return '' + (d <= 9 ? '0' + d : d) + '.' + (m<=9 ? '0' + m : m) + '.' + y;
}

function setDateInClass(className, date){
    let elements = document.getElementsByClassName(className);
    date = dateToYMD(date);
    for(let i = 0; i < elements.length; i++){
        elements[i].innerText=date;    // Change the content
    }
}

let dateFrom = new Date();
let dateTo = new Date();

dateFrom.setDate(new Date().getDate() - 13);
dateTo.setDate(new Date().getDate() + 1);

setDateInClass('date-from', dateFrom);
setDateInClass('date-to', dateTo);
