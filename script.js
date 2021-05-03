setInterval(dateTime,  1000);
function dateTime() {
    let date = new Date()

    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    let yy = date.getFullYear();
    let mm = date.getMonth();
    let dd = date.getDate();

    let day = date.getDay();

    if (h<10){
        h='0'+h;
    }
    
    if (m<10){
        m='0'+m;
    }
    
    if (s<10){
        s='0'+s;
    }


    if (day==1){
        day='Monday'
    }
    if (day==2){
        day='Tuesday'
    }
    if (day==3){
        day='Wednesday'
    }
    if (day==4){
        day='Thursday'
    }
    if (day==5){
        day='Friday'
    }
    if (day==6){
        day='Saturday'
    }
    if (day==7){
        day='Sunday'
    }
    
    document.getElementById('time').innerHTML = h + ':' + m + ':' + s;
    document.getElementById('day').innerHTML  = day;
    document.getElementById('date').innerHTML = dd + '/' + mm + '/' + yy;

}


