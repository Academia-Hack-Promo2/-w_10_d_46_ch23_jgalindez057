   var operaciones_taquilla = new Array();
   var contCola = 0;
   var time = 3;

   var operaciones_taquilla3 = new Array();
   var time2 = 5;
   var contCola2 = 0;

   var atencion_cliente = new Array();
   var time3 = 8;
   var contCola3 = 0;

   var atencion_cliente3 = new Array();
   var time4 = 12;
   var contCola4 = 0;
   

   function operaciones_en_taquilla(){
   	  contCola++;
   	  operaciones_taquilla.push(contCola);
   	  cola = document.getElementById('colaop');
   	  cola.innerHTML = 'Usted es el numero: '+" "+operaciones_taquilla.length;


   	  turnoop = document.getElementById('turnop');
   	  if (operaciones_taquilla.length == 1){turnoop.innerHTML = 'Pase adelante por favor'}else{
   	  	if(operaciones_taquilla.length == 2){turnoop.innerHTML = 'Buenas tardes, usted debe esperar un tiempo estimado de:'+" "+time+" "+'Minutos'}else{
   	  		time = time + 3
   	  	 turnoop.innerHTML = 'Buenas tardes, usted debe esperar un tiempo estimado de:'+" "+time+" "+'Minutos'
   	  	}
   	  } 
   }

   function operaciones_taquilla_3() {
   	 contCola2++
   	 operaciones_taquilla3.push(contCola2);

   	 cola3ra = document.getElementById('operaciones(3era)');
   	  cola3ra.innerHTML = 'Usted es el numero(3era edad): '+" "+operaciones_taquilla3.length;
   	  turnoop3ra = document.getElementById('turnoop3');
   	  if (operaciones_taquilla3.length == 1){turnoop3ra.innerHTML = 'Pase adelante por favor'}else{
   	  	if(operaciones_taquilla3.length == 2){turnoop3ra.innerHTML = 'Buenas tardes, usted debe esperar un tiempo estimado de:'+" "+time2+" "+'Minutos'}else{
   	  		time2 = time2 + 5
   	  	 turnoop3ra.innerHTML = 'Buenas tardes, usted debe esperar un tiempo estimado de:'+" "+time2+" "+'Minutos'
   	  	}
   	  } 
   }

   function atencion_al_cliente(){
      contCola3++
      atencion_cliente.push(contCola3)

      colat = document.getElementById('colaat');
        colat.innerHTML = 'Usted es el numero: '+" "+atencion_cliente.length;
        turnoat = document.getElementById('turnoat');
        if (atencion_cliente.length == 1){turnoat.innerHTML = 'Pase adelante por favor'}else{
         if(atencion_cliente.length == 2){turnoat.innerHTML = 'Buenas tardes, usted debe esperar un tiempo estimado de:'+" "+time3+" "+'Minutos'}else{
            time3 = time3 + 8
          turnoat.innerHTML = 'Buenas tardes, usted debe esperar un tiempo estimado de:'+" "+time3+" "+'Minutos'
         }
        } 
   }

      function atencion_al_cliente3(){
      contCola4++
      atencion_cliente3.push(contCola4)

      colat3 = document.getElementById('colaat3');
        colat3.innerHTML = 'Usted es el numero (3 edad): '+" "+atencion_cliente3.length;
        turnoat3 = document.getElementById('turnoat3');
        if (atencion_cliente3.length == 1){turnoat3.innerHTML = 'Pase adelante por favor'}else{
         if(atencion_cliente3.length == 2){turnoat3.innerHTML = 'Buenas tardes, usted debe esperar un tiempo estimado de:'+" "+time4+" "+'Minutos'}else{
            time4 = time4 + 12
          turnoat3.innerHTML = 'Buenas tardes, usted debe esperar un tiempo estimado de:'+" "+time4+" "+'Minutos'
         }
        } 
   }



	 function operacionestaquilla(){
   	destroy = operaciones_taquilla[0]
   	operaciones_taquilla.shift()
   	dropop = document.getElementById('dropop');
   	dropop.innerHTML = 'Atendiendo numero:'+destroy;
   	 if(operaciones_taquilla.length > 1){time = time - 3}
      /*messagw.innerHTML = 'Hasta ahora no hay clientes, pero siempre hay algo que hacer'*/        
   }

	function operacionestaquilla3(){
		destroy = operaciones_taquilla3[0]
   	operaciones_taquilla3.shift()
   		dropop3 = document.getElementById('dropop3');
   	dropop3.innerHTML = 'Atendiendo numero (3era edad):'+destroy;
   	if(operaciones_taquilla3.length > 1){time2 = time2 - 5}
	}
   
      function atencioncliente(){
      destroy = atencion_cliente[0]
      atencion_cliente.shift()

      dropat = document.getElementById('dropat');
      dropat.innerHTML = 'Atendiendo numero:'+destroy;
      if(atencion_cliente.length > 1){time3 = time3 - 8}
   }

      function atencioncliente3(){
      destroy = atencion_cliente3[0]
      atencion_cliente3.shift()

      dropat3 = document.getElementById('dropat3');
      dropat3.innerHTML = 'Atendiendo numero (3era edad):'+destroy;
      if(atencion_cliente3.length > 1){time4 = time4 - 12}
   }