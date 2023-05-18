var presuParce;

var Formpresu=document.getElementById("formpresupuesto");

    Formpresu.addEventListener("submit",function(event){

    event.preventDefault();

    var presupuesto=document.getElementById("Presupuesto").value;

        console.log(presupuesto)

    presuParce=parseInt(presupuesto);
    
    insertarpresupuesto(presuParce);

    })

function insertarpresupuesto(datopresu){

    document.getElementById("PresupuestoValores").innerHTML=`${datopresu}`

}


//---------------------------------creación función constructora del objeto estilo profe--------------------------------------------------------------------------------------

let gastos=[]

function Gastos(nomproducto, valorgasto){ // creación función constructora del objeto estilo profe

    let _nomproducto=nomproducto;
    let _gasto=valorgasto;

    Object.defineProperties(this,{

        nomproducto:{
            get:function(){
                return _nomproducto
            },
            set: function(nuevo_producto){
                _nomproducto=nuevo_producto
            }
        },

        valorgasto:{
            get:function(){
                return _gasto
            },
            set: function(nuevo_gasto){
                _gasto=nuevo_gasto
            }
        }
    })
}
    document.querySelector("#Gasto").addEventListener("submit",function(event){
        
        event.preventDefault();

        let Nomproducto=document.getElementById("inputNombreGasto").value;
        let Gastoproducto=Number(document.getElementById("inputCantidadGasto").value); //Number pasar el string al numero //ParseInt
        //let id=Math.floor(Math.random()*100) //Valor id automatico con valores random
         let nuevoGastos = new Gastos(Nomproducto,Gastoproducto);

        gastos.push(nuevoGastos);

        console.log(gastos[0].nomproducto)
        console.log(gastos[0].valorgasto)
        console.log(gastos)

        insertarvalores(gastos);


    })
    
        function insertarvalores(gastoynombre){

             console.log(gastoynombre)
             let insertotabla=document.getElementById("tablaregistro")
             insertotabla.innerHTML=""

             gastoynombre.forEach((item,index) => { //iteramos objetos
                
                document.getElementById("GastoValores").innerHTML=`${item.valorgasto}`
                // document.getElementById("GastoTabla").innerHTML=`<br><br>${item.nomproducto}`
                // document.getElementById("ValorTabla").innerHTML=`<br><br>${item.valorgasto}`
                insertotabla.innerHTML+=`

                        <tr>
                            <td>${item.nomproducto}</td>
                            <td>${item.valorgasto}</td>
                            <td><button onclick="borrar(${index})">borrar</button></td>
                        </tr>`

                let sumatoriaGastos=gastos.reduce(function(total,item){
                    return total+item.valorgasto
                },0)

                document.getElementById("GastoValores").innerHTML=`${sumatoriaGastos}`
        
                // alert("este es el reduce " + sumatoriaGastos);

                let resta=(presuParce - sumatoriaGastos);

                // alert("la resta es " + resta);
                document.getElementById("SaldoValores").innerHTML=`${resta}`
                
                console.log(resta);

             });

        }

        function borrar(index){
            gastos.splice(index,1)
            insertarvalores(gastos)
            
            let sumatoriaGastos=gastos.reduce(function(total,item){
                return total+item.valorgasto
            },0)

            document.getElementById("GastoValores").innerHTML=`${sumatoriaGastos}`
    
            // alert("este es el reduce " + sumatoriaGastos);

            let resta=(presuParce - sumatoriaGastos);

            // alert("la resta es " + resta);
            document.getElementById("SaldoValores").innerHTML=`${resta}`
            
            console.log(resta);

            


        }


        //reduce


        //llamar funcion inyectar gastos



//-------------------------------------------------------------------------------------------------------------------------------


// function Gastos(id, nomproducto, gasto){ 
//     this.id = id;
//     this.nomproducto = nomproducto;
//     this.gasto = gasto;
//  }


// var gasto1=new Gastos(0,"shampoo",5000) //llamando a la función constructora
// console.log(gasto1)

// var arraygastos=[]

// var FormGasto=document.getElementById("Gasto");

// FormGasto.addEventListener("submit",function(event){

//     event.preventDefault();

//     var Nombregastos=document.getElementById("inputNombreGasto").value;
//     var Montogastos=document.getElementById("inputCantidadGasto").value;
//     var id=Math.floor(Math.random()*100) //Valor id automatico con valores random
//     console.log(id);
//     console.log(Nombregastos);
//     console.log(Montogastos);

//     // var gasto1=new Gastos(id, Nombregastos, Montogastos) //insertando valores al objeto
//     // console.log(gasto1)

//     arraygastos.push(new Gastos(id, Nombregastos, Montogastos)) //insertando valores al objeto

//     //document.getElementById("GastoTabla").innerHTML=`${}`

// console.log(arraygastos);
// })


//function verInputs(){

    //var arrayInput=new Array();
    //var inputsValues=document.getElementsByClassName('inputdata'),
    //namesValues=[].map.call(inputsValues,function(dataInput){
        //arrayInput.push(dataInput.value);
   // });

    //arrayInput.forEach(function(inputsValuesData){
        //alert(inputsValuesData)
        //console.log( inputsValuesData);

    //});
//}


