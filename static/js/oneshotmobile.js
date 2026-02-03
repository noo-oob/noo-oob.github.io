function convertTZ(date, tzString) {
    return new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {timeZone: tzString}));   
}

var ctime = ""

timeelementcheck = document.getElementById('time')
function timeupdatefunction() {
    var epoch = Date.now()   
    var loctimezone = new Date().getTimezoneOffset()*-60000

    epoch = epoch - (loctimezone)

    var millisecondsctime = convertTZ(Date(), window.ctimezone).getTime()
    var timezonenum = (epoch-millisecondsctime)/3600000

    timezonenum = -1*(Math.round(timezonenum * 2)/2)

    timezones = timezonenum.toString()

    if (!timezones.startsWith('-'))
    {
        timezones = "+" + timezones
    }

    let options = {
    timeZone: window.ctimezone,
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'}
    
    formatter = new Intl.DateTimeFormat([], options);
    
    ctime = formatter.format(new Date()).split(', ')[1]
    ctime = ctime.split(':')

    var ends = ctime[2].split(' ')[1]

    ctime = ctime[0]+':'+ctime[1]
    if (ends){
        ctime += ' '+ends
    }

    ctime = "My current timezone is GMT"+timezones+", so it is currently "+ctime+" for me."
    
    if (document.getElementById('time').textContent != ctime) {
        document.getElementById('time').textContent = ctime
    }
}

if (timeelementcheck){
    timeupdatefunction()
    const timeupdate = setInterval(timeupdatefunction, 1000);
}
console.log('hello')