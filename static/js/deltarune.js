// document.cookie

treeelement = document.getElementById('tree')
dogelement = document.getElementById('dog')
dogbarksound = document.getElementById('dogbarkaudio')

treeelement.onclick = function(){
  if (document.cookie !== "Dog"){
    document.cookie = 'Dog'
    dogbarksound.play()

    dogelement.style.opacity = 1
    setTimeout(function(){
      dogelement.style.opacity = 0
    }, 600)
  }
}
