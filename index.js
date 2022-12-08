'use strict';
const d=document;

/*
 * XXXXX
 */

// Ejemplo de la estructura de un disco:
let $disco =  
{
    Nombre: 'El lado oscuro de la Programación',
    Autor: 'Los Programadores Anónimos',
    Codigo: 1,
    Pistas: [
        {
            Nombre: 'Esa cajita loca llamada variablecita',
            Duracion: 200,
        },
        {
            Nombre: 'Nunca quise ser un NaN',
            Duracion: 180,
        },
        {
            Nombre: 'No quiero programar',
            Duracion: 90,
        },
        {
            Nombre: 'Bajo presión',
            Duracion: 240,
        },
        {
            Nombre: 'La odisea de las variables privadas',
            Duracion: 120,
        },
        {
            Nombre: 'Sr. Programador',
            Duracion: 720,
        },
    ],
};
const result=[];

function convert(disco){
    let keys=Object.keys(disco)
    keys.forEach(function(key){
        result.push(disco[key])
    });
    
    return result;
}
// d.addEventListener('DOMContentLoaded',()=>{
    //     console.log($disco);
    // })
    result.forEach((ele)=>{
        // console.log(ele);
    });
    
    
    const $btnAgregar=d.getElementById('btnAgregar');
    $btnAgregar.addEventListener('click',function(){
        
        if(validarCampos()==true){
            console.log(validarCampos())
            const $divPrincipal=d.createElement('div'),
            $divNombrePista=d.createElement('div'),
            $divDuracion=d.createElement('div'),
            $labelNombre=d.createElement('label'),
            $labelDuracion=d.createElement('label');
            const $divMasPistas=d.getElementById('masPistas');
        
        
            $divMasPistas.class="form-group";
            $labelNombre.class="col-form-label";
            $labelDuracion.class="col-form-label";
            $labelNombre.textContent="Nombre Pista";
            $labelDuracion.textContent="Duracion";
        
        
        
        // $spanNombre.innerHTML='Nombre Pista';
        // $spanDuracion.innerHTML='Duracion pista';
            const $btnEnviar=d.createElement('input');
            $btnEnviar.type="submit";
            $btnEnviar.value="Cargar";
            $btnEnviar.class="btn btn-secondary";
            
            const $inputNombre=d.createElement('input');
            $inputNombre.type='text';
            $inputNombre.name='nombre';
            $inputNombre.class="form-control";
            $inputNombre.required="true"
        
            const $inputDuracion=d.createElement('input');
            $inputDuracion.type='text';
            $inputDuracion.name='duracion';
            $inputDuracion.class="form-control";
            $inputDuracion.required="true"
        
        
            $divNombrePista.appendChild($labelNombre)
            $divNombrePista.appendChild($inputNombre)
            $divDuracion.appendChild($labelDuracion);
            $divDuracion.appendChild($inputDuracion)
        
            $divMasPistas.appendChild($divNombrePista)
            $divMasPistas.appendChild($divDuracion)
            $divMasPistas.appendChild($btnEnviar);
        
            // validarCampos()
            
        }else{
             console.log('primero debe llenar los campos');
        }
        
    })
    const validarCampos=()=>{
        // console.log('esta bien');    
            const $nombre = d.getElementById('nombre').value,
            $autor = d.getElementById('autor').value,
            $codigo = d.getElementById('codigo').value;
            if($nombre.length == 0) {
                alert('No has escrito nada en el nombre del disco');
                return false;
            }
            var autor = d.getElementById('autor').value;
                if($autor.length == 0) {
                    alert('No has escrito nada en el autor');
                return false;
            }
            var codigo = d.getElementById('codigo').value;
                if($codigo.length == 0) {
                alert('No has escrito nada en el codigo');
                return false;
            }
            
            if($codigo <= 0 && $codigo >= 1000) {
                alert('el codigo debe ser entre 1 y 999');
                return false              
            }    
            return true
            
        }       
            // var clave = document.getElementById('autor').value;
            // if (clave.length < 6) {
            //   alert('La clave no es válida');
            //   return;
            // }
            // this.submit();
          
    //     let $existe=false;
    //     const $inputs=d.querySelectorAll('#formulario [required]');
    //     // console.log($inputs);
        
    //     $inputs.forEach((input)=>{
    //         if(input.value==""){
    //                 const $span=d.createElement('span');
    //                 $span.id=input.name;
    //                 $span.id=input.id;
    //                 $span.textContent=input.title;
    //                 input.insertAdjacentElement("afterend",$span);
                    
    //     }
    // })

// Discos:
// let discos = [];

// Función Cargar:
const Cargar = () => {
    $('#CargarDisco').modal();
    
    $form=d.getElementById('formulario');
    
    $nombre=d.getElementById('Nombre'),
    $autor=d.getElementById('Autor'), 
    $codigo=d.getElementById('codigo'),
    $btnEnviarForm=d.getElementById('btnEnviarForm');
    
    $codigo.addEventListener('change',function(){

    })
    
};

// Función Mostrar:
const Mostrar = () => {
    // Variable para ir armando la cadena:
    let html = "<div class='discos'>"+"<div class='disco'></div>"+"<h3><b> El nombre del disco es: </b><br>" + $disco.Nombre + "</h3><br><h3><b>" + "El nombre del autor es: </b><br>"+$disco.Autor + "</h3><br><h3>" + "<b>El codigo es: </b>" + $disco.Codigo + "</h3><br><div class='Pistas'>" + "<h4>"+"Pista 1: " + $disco.Pistas[0].Nombre + "</h4>"+"<br>"+ "<h5>" + "La duracion es: " + $disco.Pistas[0].Duracion + "</h5>"+"<br>"+ "<h4>" + "Pista 2: " + $disco.Pistas[1].Nombre + "</h4>"+"<br>"+ "<h5>" + "La duracion es: " + $disco.Pistas[1].Duracion+ "</h5><br><h4>" + "Pista 3: " + $disco.Pistas[2].Nombre + "</h4>"+"<br>"+ "<h5>" + "La duracion es: " + $disco.Pistas[2].Duracion+"</h5>"+"</div>"+"</div>" + "<div class='discos'>"+"<div class='disco'></div>"+"<h3><b> El nombre del disco es: </b><br>" + $disco.Nombre + "</h3><br><h3><b>" + "El nombre del autor es: </b><br>"+$disco.Autor + "</h3><br><h3>" + "<b>El codigo es: </b>" + $disco.Codigo + "</h3><br><div class='Pistas'>" + "<h4>"+"Pista 1: " + $disco.Pistas[0].Nombre + "</h4>"+"<br>"+ "<h5>" + "La duracion es: " + $disco.Pistas[0].Duracion + "</h5>"+"<br>"+ "<h4>" + "Pista 2: " + $disco.Pistas[1].Nombre + "</h4>"+"<br>"+ "<h5>" + "La duracion es: " + $disco.Pistas[1].Duracion+ "</h5><br><h4>" + "Pista 3: " + $disco.Pistas[2].Nombre + "</h4>"+"<br>"+ "<h5>" + "La duracion es: " + $disco.Pistas[2].Duracion+"</h5>"+"</div>"+"</div>"

    // Cositas:

    // Si modificaste el nombre de la variable para ir armando la cadena, también hacelo acá:
    document.getElementById('info').innerHTML = html; // <--- ahí es acá
};
// d.addEventListener("keyup",(e)=>{
//     if(e.target.matches('#formulario [required]')){
//         if(e.target.matches('#codigo')){
//             // console.log("validacion codigo");
            

//         }
//     }
// })
// (
//     function(){
//         $('#btnModal').onClick('click',function(){
//             $('#CargarDisco').modal();
//         })
//     }
// )
// Todas las funciones que necesites:
