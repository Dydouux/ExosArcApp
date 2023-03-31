const bt2 = document.getElementById('bt')
bt2.addEventListener('click', connect)
function connect(){
    if(document.getElementById('login').value == "web" && document.getElementById('pwd').value == "1234"){
        alert("Bienvenue")
    }
    else{
        alert("Erreur")
    }
}

