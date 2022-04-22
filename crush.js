function crush1() {
    for (var vidas = 0; vidas < 3 ; vidas++) {
        while (true) {
            var resposta = (prompt('digite a sua resposta').toUpperCase())
            if (resposta === 'A' || resposta === 'B' || resposta === 'C') {
                break
            }
             else {
                alert('digite uma resposta válida')
            }
        }

        if (resposta === 'A') {
            alert('a resposta está correta')
            location.assign("crush2.html")
            break
        } 
        
        else {
            alert('resposta incorreta')
         
        }
        
    }
    if(vidas==3){
        alert("Você perdeu!")
        location.assign("gameovercrush.html")
    }
}
function crush2() {
    for (var vidas = 0; vidas < 3 ; vidas++) {
        while (true) {
            var resposta = (prompt('digite a sua resposta').toUpperCase())
            if (resposta === 'A' || resposta === 'B' || resposta === 'C') {
                break
            }
             else {
                alert('digite uma resposta válida')
            }
        }

        if (resposta === 'C') {
            alert('a resposta está correta')
            location.assign("crush3.html")
            break
        } 
        
        else {
            alert('resposta incorreta')
         
        }
        
    }
    if(vidas==3){
        alert("Você perdeu!")
        location.assign("gameovercrush.html")
    }
}
function crush3() {
    for (var vidas = 0; vidas < 3 ; vidas++) {
        while (true) {
            var resposta = (prompt('digite a sua resposta').toUpperCase())
            if (resposta === 'A' || resposta === 'B' || resposta === 'C') {
                break
            }
             else {
                alert('digite uma resposta válida')
            }
        }

        if (resposta === 'B') {
            alert('a resposta está correta')
            location.assign("fim.html")
            break
        } 
        
        else {
            alert('resposta incorreta')
         
        }
        
    }
    if(vidas==3){
        alert("Você perdeu!")
        location.assign("gameovercrush.html")
    }
}