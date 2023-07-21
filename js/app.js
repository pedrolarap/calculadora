function sumar(){

   const forma = document.getElementById('forma')
   let operandoA = forma['operandoA']
   let operandoB = forma["operandoB"]
   resultado = parseInt(operandoA.value)  + parseInt(operandoB.value)
   if(isNaN(resultado)){
    document.getElementById('resultado').innerHTML = 'Error'
   }else{
    document.getElementById('resultado').innerHTML = resultado
   }
   
}

