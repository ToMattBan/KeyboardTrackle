window.addEventListener('keydown', function(e){
    var keyName = e.key;
    var divKeyPressed = document.querySelectorAll(`[data-keyName="${keyName}"]`);
    var actualPressed = document.querySelectorAll('.active');

    console.log(keyName)

    actualPressed.forEach(key => { key.classList.remove('active') })
    divKeyPressed.forEach(key => { key.classList.add('active') })
})