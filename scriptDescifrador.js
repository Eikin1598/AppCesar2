const alfabeto = ["Z" ,"Y" ,"X" ,"W" ,"V" ,"U" ,"T" ,"S" ,"R" ,"Q" ,"P" ,"O" ,"Ñ" ,"N" ,"M" ,"L" ,"K" ,"J" ,"I" ,"H" ,"G" ,"F" ,"E" ,"D" ,"C" ,"B" ,"A"];
const entradaOriginal = document.getElementById('entrada-cifrada');
const descifrador = document.getElementById('descifrador');
const rango = document.getElementById('rango');
const resultado = document.getElementById('resultado');

const descodificarMensage = () => {
    const palabraArray = [...entradaOriginal.value.toUpperCase()];
    imprimirLetra(0, palabraArray);
}

const imprimirLetra = (letraActual, palabraArray) => {
    if (palabraArray.length === letraActual) return;
    entradaOriginal.value = entradaOriginal.value.substring(1)
    const crearLetra = document.createElement("span");
    resultado.appendChild(crearLetra);
    animateChar(crearLetra)
    .then(()=> {
    const letraCodificada = palabraArray[letraActual];
    crearLetra.innerHTML = alfabeto.includes(letraCodificada) ?
        alfabeto[(alfabeto.indexOf(letraCodificada) + parseInt(rango.value)) % alfabeto.length] :
        letraCodificada
    imprimirLetra(letraActual + 1, palabraArray);

});

}

const animateChar = crearLetra => {
    let cambiosDeLetra = 0;
    return new Promise(resolve => {
        const intervalo = setInterval(()=>{
            crearLetra.innerHTML = alfabeto[Math.floor(Math.random()*alfabeto.length)];
            cambiosDeLetra++;
            if(cambiosDeLetra ===5){
                clearInterval(intervalo);
                resolve();
            }
        },50);
    });
}   

const submit = e => {
    e.preventDefault();
    resultado.innerHTML = '';
    descodificarMensage()
}

descifrador.onsubmit = submit;