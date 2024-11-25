boton_calcular.onclick=function() {
 
var inicial = 1.00;
var final = 1.00;
var horas = 1.00;
var porcentaje=1.00;


// Damos valor a las variables



//alert("inicial = "+inicial);



inicial=parseFloat(document.getElementById('inicial').value);
final=parseFloat(document.getElementById('final').value);
horas=parseFloat(document.getElementById('horas').value);


//alert(inicial);
//alert(kg);
//alert(edad);
//alert(creat);

              /////// COMENZAMOS EL CÁLCULO ///////////////////////////

   porcentaje= ((((final-inicial)*100)/inicial));

///// *********  ///////////////             

if (porcentaje<0) {
  porcentaje=porcentaje.toFixed(1);
  resultadofinal.value= " - La Troponina ha disminuido en un "+ Math.abs(porcentaje) +" % en " + horas + " horas\n\n";
}

if (porcentaje>0) {
  resultadofinal.value= " - La Troponina ha aumentado en un "+ (porcentaje).toFixed(1) +" % en " + horas + " horas\n\n";
}


  

boton_borrar.onclick=function() {

  location.reload();

} 
}