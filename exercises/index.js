//1
const square = document.getElementById('square')
const changeColorButton = document.getElementById('changeColorButton')

let colorState= 0


function changeColor() {
    switch(colorState){
        case 0:
            square.className = 'w-48 h-48 flex items-center justify-center  mb-4 bg-blue-200 '

            colorState=1
            break
        case 1:
             square.className = 'w-48 h-48 flex items-center justify-center xl mb-4 bg-red-200'
            colorState=2
            break
        default:
            square.className = 'w-48 h-48 flex items-center justify-center  mb-4 bg-gray-300 '
            colorState=0
            break
    }
    }

changeColorButton.addEventListener('click', changeColor)

//2

const square2 = document.getElementById('square2')

const textInput = document.getElementById('textInput')

const clearButton = document.getElementById('clearButton')



//para manejar eventos

const handleClear = (event) => {
    switch (event.type) {
        case 'input':
            square2.textContent= event.target.value
            break;
    case 'click':
        square2.textContent = ''
        textInput.value = ''
        break;
        default:
            break;
    }
    }

    textInput.addEventListener('input', handleClear)

    clearButton.addEventListener('click', handleClear)



    //3

    const weightInput = document.getElementById('weightInput')

    const heightInput = document.getElementById('heightInput')

    const calculateButton = document.getElementById('calculateButton')

    const bmiResult = document.getElementById('bmiResult')


    //calculadora de IMC

    const calculateBMI = (weight, height) => {
        const heightInMeters = height / 100
        return (weight/(heightInMeters*heightInMeters)).toFixed(2)
        }

        //maneja eventos

        const handleEvent = (event) => {
            switch (event.type) {
                case 'click':
                    const weight = Number(weightInput.value)
                    const height = Number(heightInput.value)
                    
                    if  (weight <= 0 || height <= 0){
                        bmiResult.value = 'Por favor, ingresa valores válidos'
                    }else {
                    const bmi= calculateBMI(weight, height)
                    bmiResult.value = `tu IMC es ${bmi}`
            }

                    break;
                default: break;
            }
            }

            //escuchar el boton de click

        calculateButton.addEventListener('click', handleEvent)

        //4

  //ejercicio 4

let boton = document.getElementById('botonEnviar');

boton.addEventListener('click', (evento) => {
    evento.preventDefault();
    let monto = document.getElementById('monto')
    let valorDeInput = monto.value / 500;

    let inputDolares = document.getElementById('inputDeDolaress')

    inputDolares.value = valorDeInput.toFixed(2);
});

//otro evento
let botonBorrar = document.getElementById('borrar')
botonBorrar.addEventListener('click',(event)=>{
    event.preventDefault();
    let inputPESOSS = document.getElementById('monto')
    let inputDolaressss = document.getElementById('inputDeDolaress')
    inputPESOSS.value = "";
    inputDolaressss.value = "";
    })
    
    

    //5
    function filtrarCervezas(beers,PartNameChosen,minIBU){ 
        return beers.filter(beer =>
            beer.name.toLocaleLowerCase().includes(PartNameChosen.toLocaleLowerCase())&& beer.ibu > minIBU

        )

    }
    const PartNameChosen = "a";
    const MINIBU = 10;
    const cervezaFiltradass = filtrarCervezas(beers,PartNameChosen,MINIBU)
    console.log(cervezaFiltradass);









