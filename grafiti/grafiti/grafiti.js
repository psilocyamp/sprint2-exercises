//Creamos div
let formulario = document.getElementById('formulario');
//capture el formulario
let wall = document.getElementById('wall');
//capture el section wall

formulario.addEventListener('submit',(event)=>{
    event.preventDefault();
    let divNuevo = document.createElement('div');//creamos el div
    let inputColor = document.getElementById('inputColorr');
    let color = inputColor.value;
    
    divNuevo.classList.add('w-[300px]','h-[300px]',`bg-[${color}]`,'relative');//le pusimos clases
    let input = document.getElementById('inputCapturar')//capturamos el input
    let contenido = input.value;
    
    //guarde el texto que ingreso el usuario en el input
    divNuevo.innerText = contenido;
    divNuevo.classList.add('flex','flex-col','items-center','justify-center')
    //guarde el texto dentro de la variable contenido en el DIVNUEVO
    wall.appendChild(divNuevo)
    divNuevo.classList.add('text-center','text-black','text-3xl','font-bold','p-2')
    //meterle un hijo "Div nuevo" a el SECTION QUE HABIAMOS CAPTURADOS ANTERIORMENTE EN LA LINEA 4
    let span = document.createElement('span')
    span.innerText = "X";
    span.classList.add('size-lg','absolute', 'top-0', 'right-4', 'p-2', 'cursor-pointer', 'bg-white')
    divNuevo.appendChild(span)

    span.addEventListener('click',()=>{
        divNuevo.remove();
    })  
    let inputs = document.getElementById('entradaGrafiti');
    
    if(inputs.checked){
        divNuevo.classList.add('italic')
    }else{
        divNuevo.classList.add('normal-case')
    }
})



















