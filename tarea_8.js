
function siempreTrue(){
    return true;
}
console.log(siempreTrue());


function miAsincrona(){
    setTimeout(() => {
        console.log('Hola soy una promesa');
    }, 5000);
}

miAsincrona();

function* generadorIdPar(){
    let id = 4;
    if(id % 2 === 0 ){
       while(true){
        id +=2
        if(id === 100){
            return id
        }
        yield id
    } 
    } else {
        console.log('Solo se admiten valores pares');
    }
    
}

const genPar= generadorIdPar();
console.log(genPar.next());
console.log(genPar.next());
console.log(genPar.next());
console.log(genPar.next());
console.log(genPar.next());