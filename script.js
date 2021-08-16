window.addEventListener('keydown', function(e){
    var keyName = e.key == "\\" ? "Barra" : e.key;
    var divKeyPressed = document.querySelectorAll(`[data-keyName="${keyName}"]`);
    
    divKeyPressed.forEach(key => { key.classList.add('active') })
})

window.addEventListener('keyup', function(){
    var actualPressed = document.querySelectorAll('.active');
    actualPressed.forEach(key => { key.classList.remove('active') })
})