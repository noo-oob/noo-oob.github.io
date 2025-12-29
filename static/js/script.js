window.ctimezone = "Asia/Seoul" // America/New_York

function convertTZ(date, tzString) {
    return new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {timeZone: tzString}));   
}

const timeupdate = setInterval(function() {
    var epoch = Date.now()   
    var loctimezone = new Date().getTimezoneOffset()*-60000

    epoch = epoch - (loctimezone)

    var millisecondsctime = convertTZ(Date(), window.ctimezone).getTime()
    var timezonenum = (epoch-millisecondsctime)/3600000

    timezonenum = -1*(Math.round(timezonenum * 2)/2)

    var timezones = timezonenum.toString()

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

    const ctime = formatter.format(new Date()).split(', ')[1]

    document.getElementById('time').textContent = "My current timezone is GMT"+timezones+", so it's currently "+ctime+" for me"
}, 1000);

background = document.querySelector('.background')
if (background)
{
    let time = 0;
    let animationId;
    
    function animatePolygons() {
        time += 0.0025;

        background.style.setProperty('--blue', 'polygon('+(25+(Math.sin(time*15)*-5))+'% '+(50+(Math.sin(time*10)*5))+'%, '+(50+(Math.sin(time*7)*6))+'% '+(75+(Math.sin(time*8)*7))+'%, '+(75+(Math.sin(time*16)*3))+'% '+(50+(Math.sin(time*4)*-6))+'%, '+(50+(Math.sin(time*-9)*-6))+'% '+(25+(Math.cos(time*15)*-5))+'%)')
        background.style.setProperty('--purple', 'polygon('+(40+(Math.sin(time*5)*-7))+'% '+(75+(Math.cos(time*6)*7))+'%, '+(60+(Math.cos(time*7)*-8))+'% '+(75+(Math.sin(time*8)*8))+'%, '+(75+(Math.cos(time*9)*-9))+'% '+(50+(Math.sin(time*10)*9))+'%, '+(50+(Math.cos(time*11)*-10))+'% '+(25+(Math.cos(time*12)*10))+'%, '+(25+(Math.sin(time*13)*-11))+'% '+(50+(Math.sin(time*14)*11))+'%)')
    
        animationId = requestAnimationFrame(animatePolygons);
    }

    animatePolygons()
}