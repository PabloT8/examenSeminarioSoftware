exports.calcularInteresCompuesto = (deposito, tasaInteres, periodo) => {
    let capitalFinal = 0;
    let mes = 0;
    let interes = 0;
    let tasaInteresDecimal = tasaInteres / 100;
    const saldoFinals = [];

    // Transformar los años en meses
    periodo = Math.round(periodo * 12);

    // Calcular saldo final
    capitalFinal =
     (deposito * (1 + tasaInteresDecimal) ** periodo); 
  
      capitalFinal = capitalFinal.toFixed(2);
      console.log(capitalFinal);	

      while ( mes != periodo) {
        // Obtener el interés por período
        interes = deposito * tasaInteresDecimal;
        interes = interes.toFixed(2);

        // El deposito final
        depositofinal = capitalFinal - interes;
        depositofinal = depositofinal.toFixed(2);

         // Actualizar el mes (período)
         mes++;
         

        // Almacenar los valores en el arreglo
        saldoFinals.push({
            mes,
            depositofinal,
            interes,
            capitalFinal,
            deposito,
          });
        }
      
        return saldoFinals;

};