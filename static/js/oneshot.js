function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

function isMobile() {
    if (/Mobi/i.test(window.navigator.userAgent)){
        return true
    }

    if (localStorage.mobile) {
        return true
    }

    var mobile = ['iphone','ipad','android','blackberry','nokia','opera mini','windows mobile','windows phone','iemobile']; 
    for (var i in mobile) if (navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) > 0) return true;

    return false
}

if (isMobile()){
    var mobilewindow = document.getElementById('isMobileWindow')
    var mobileyes = document.getElementById('isMobileYes')
    var mobileno = document.getElementById('isMobileNo')

    mobilewindow.style.display = 'block'

    mobileno.onclick = function(){
        document.getElementById('isMobileWindow').remove()
    }
}
else{
    document.getElementById('isMobileWindow').remove()
}

window.ctimezone = "America/New_York" // America/New_York

function convertTZ(date, tzString) {
    return new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {timeZone: tzString}));   
}

var ctime = ""
var doubledigit = false
var currentdragging = null

var mx = 0
var my = 0

var offsetx = 0
var offsety = 0

document.addEventListener('mousemove', function(event) {
    mx = event.clientX
    my = event.clientY

    if (currentdragging){
        currentdragging.style.top = my + offsety + 'px'
        currentdragging.style.left = mx + offsetx + 'px'
    }
});

var timezones = 0

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

    if (ctime[0].length < 2){
        doubledigit = false
    }
    else {
        doubledigit = true
    }

    var ends = ctime[2].split(' ')[1]

    ctime = ctime[0]+':'+ctime[1]
    if (ends){
        ctime += ' '+ends
    }
    
    if (!doubledigit){
        ctime = '0' + ctime
    }
    
    if (document.getElementById('time').textContent != ctime) {
        document.getElementById('time').textContent = ctime
    }
}

if (timeelementcheck){
    timeupdatefunction()
    document.getElementById('timezonetext').textContent = document.getElementById('timezonetext').textContent.replace('$timezone', timezones)
    const timeupdate = setInterval(timeupdatefunction, 1000);
}

background = document.querySelector('.background')
if (background)
{
    wallpapers = ['Asteroid.png', 'Cafe.png', 'Catwalks.png', 'Messiah.png', 'MyBurdenisLight.png', 'Navigate.png', 'Reflection.png', 'Courtyard.png']
    wallpaperoffset = ['top', 'top', 'top', 'top', 'top', 'bottom 70px', 'bottom 70px', 'bottom 70px']

    num = 4

    if (document.cookie){
        if (getCookie('wallpaper')){
            num = parseInt(getCookie('wallpaper'))
        }
    }

    background.style.setProperty('--wallpaper', "url(../themeFiles/oneshotThemeFiles/wallpapers/".concat(wallpapers[num], ')'))
    background.style.setProperty('--wallpaperoffset', wallpaperoffset[num])
}

// apps

// documents
documentsApp = document.getElementById('documentsApp')
documentWindow = document.getElementById('documentWindow')
documentX = document.getElementById('documentX')
documentTitleBar = document.getElementById('documentTitle')
documentExtraContainer = document.getElementById('documentExtraContainer')

documentsApp.onclick = function(){
    documentWindow.style.display = 'block'
};

documentX.onclick = function(){
    documentWindow.style.display = 'none'
};

documentTitleBar.onmousedown = function(){
    if (!currentdragging){
        offsetx = parseInt(documentWindow.style.left, 10) - mx
        offsety = parseInt(documentWindow.style.top, 10) - my
        currentdragging = documentWindow
        documentTitleBar.style.cursor = "url('./static/themeFiles/oneshotThemeFiles/mouse/dragging.png'), pointer";
        document.body.style.cursor = "url('./static/themeFiles/oneshotThemeFiles/mouse/dragging.png'), pointer";
        documentExtraContainer.style = 'top: -800px; left: -125px; width: 950px; height: 500px;' 
    }
};

documentTitleBar.onmouseup = function(){
    if (currentdragging = documentWindow){
        currentdragging = null
        documentTitleBar.style.cursor = "url('./static/themeFiles/oneshotThemeFiles/mouse/draggable.png'), pointer";
        document.body.style.cursor = "url('./static/themeFiles/oneshotThemeFiles/mouse/default.png'), pointer";
        documentExtraContainer.style = 'top: -640px; width: 700px; height: 100px; z-index: -1;'
    }
}

// text files
function setUpText(nameoffile, index, array){
    let txtopener = document.getElementById(nameoffile+'opener')
    let txtWindow = document.getElementById(nameoffile+'textwindow')
    let txtX = document.getElementById(nameoffile+'X')
    let txtTitleBar = document.getElementById(nameoffile+'titlebar')
    let txtExtraContainer = document.getElementById(nameoffile+'extracontainer')

    txtopener.onclick = function(){
        txtWindow.style.display = 'block'
    };

    txtX.onclick = function(){
        txtWindow.style.display = 'none'
    };

    txtTitleBar.onmousedown = function(){
        if (!currentdragging){
            offsetx = parseInt(txtWindow.style.left, 10) - mx
            offsety = parseInt(txtWindow.style.top, 10) - my
            currentdragging = txtWindow
            txtTitleBar.style.cursor = "url('./static/themeFiles/oneshotThemeFiles/mouse/dragging.png'), pointer";
            document.body.style.cursor = "url('./static/themeFiles/oneshotThemeFiles/mouse/dragging.png'), pointer";
            txtExtraContainer.style = 'top: -800px; left: -125px; width: 950px; height: 500px;' 
        }
    };

    txtTitleBar.onmouseup = function(){
        if (currentdragging = txtWindow){
            currentdragging = null
            txtTitleBar.style.cursor = "url('./static/themeFiles/oneshotThemeFiles/mouse/draggable.png'), pointer";
            document.body.style.cursor = "url('./static/themeFiles/oneshotThemeFiles/mouse/default.png'), pointer";
            txtExtraContainer.style = 'top: -640px; width: 700px; height: 100px; z-index: -1;'
        }
    }
}

const textfiles = ['aboutme', 'myexperience', 'myprojects', 'gamesiplay', 'contactme']
textfiles.forEach(setUpText)

