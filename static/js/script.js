window.ctimezone = "America/New_York" // America/New_York

function convertTZ(date, tzString) {
    return new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {timeZone: tzString}));   
}

timeelementcheck = document.getElementById('time')
if (timeelementcheck){
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
}

background = document.querySelector('.background')
if (background)
{
    let time = 0;
    let animationId;
    
    function animatePolygons() {
        time += 0.0025;

        background.style.setProperty('--blue', 'circle('+(Math.cos(time*5)*7.5+7.5)+'%)')
        background.style.setProperty('--purple', 'circle('+(Math.sin(time*7.5)*7.5+7.5)+'%)')
    
        animationId = requestAnimationFrame(animatePolygons);
    }

    animatePolygons()
}