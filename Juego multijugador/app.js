let section = document.getElementsByTagName('section')[1];
section.classList.add('container');


let nFilas = 15;
let nColumnas = 15;

let div, objetivo, j1, j2;

let filasWASD, columnasWASD
let filasFlechas, columnasFlechas
let filasMeta, columnasMeta
let puntuacion1=0;
let puntuacion2=0;

document.addEventListener('load', inicio());

function inicio(){
    
    for (let i = 0; i < nFilas; i++){
        for(let j = 0;  j < nColumnas; j++){
            div = document.createElement('div'); 
            div.classList.add('card');
            div.setAttribute('id', `f${i}c${j}`);

            section.appendChild(div);
        }
    }
    colocarFichas();
}


function colocarFichas(){
   

    filasMeta= Math.floor(Math.random()*15);
    columnasMeta= Math.floor(Math.random()*15);

    console.log(Math.floor(Math.random()*15));
    objetivo = document.getElementById(`f${filasMeta}c${columnasMeta}`);
    objetivo.classList.add('objetivo');

    filasWASD= Math.floor(Math.random()*15);
    columnasWASD= Math.floor(Math.random()*15);

    j1 = document.getElementById(`f${filasWASD}c${columnasWASD}`);
    j1.classList.add('j1');

    filasFlechas= Math.floor(Math.random()*15);
    columnasFlechas= Math.floor(Math.random()*15);

    j2 = document.getElementById(`f${filasFlechas}c${columnasFlechas}`);
    j2.classList.add('j2');
}


document.addEventListener('keydown', mover);

/**
 * @param {Object} event  
 */
function mover(event){
    console.log(event);
    switch(event['key']){
        case 'w':
            document.getElementById(`f${filasWASD}c${columnasWASD}`).classList.remove('j1');
            if(filasWASD==0){
                filasWASD=14;
            }else{
                filasWASD=filasWASD-1;
            }
            if(`f${filasWASD}c${columnasWASD}`==`f${filasFlechas}c${columnasFlechas}`){
                if(filasWASD==14){
                    filasWASD=0;
                }else{
                    filasWASD=filasWASD+1;
                }
            }
            document.getElementById(`f${filasWASD}c${columnasWASD}`).classList.add('j1');
            ganar();
            break;
        case 's':
            document.getElementById(`f${filasWASD}c${columnasWASD}`).classList.remove('j1');
            if(filasWASD==14){
                filasWASD=0;
            }else{
                filasWASD=filasWASD+1;
            }
            if(`f${filasWASD}c${columnasWASD}`==`f${filasFlechas}c${columnasFlechas}`){
                if(filasWASD==0){
                    filasWASD=14;
                }else{
                    filasWASD=filasWASD-1;
                } 
            }
            document.getElementById(`f${filasWASD}c${columnasWASD}`).classList.add('j1');
            ganar();
            break;
        case 'a':
            document.getElementById(`f${filasWASD}c${columnasWASD}`).classList.remove('j1');
            if(columnasWASD==0){
                columnasWASD=14;
            }else{
                columnasWASD=columnasWASD-1;
            }
            if(`f${filasWASD}c${columnasWASD}`==`f${filasFlechas}c${columnasFlechas}`){
                if(columnasWASD==14){
                    columnasWASD=0;
                }else{
                    columnasWASD=columnasWASD+1;
                }
            }
            document.getElementById(`f${filasWASD}c${columnasWASD}`).classList.add('j1');
            ganar();
            break;
        case 'd':
            document.getElementById(`f${filasWASD}c${columnasWASD}`).classList.remove('j1');
            if(columnasWASD==14){
                columnasWASD=0;
            }else{
                columnasWASD=columnasWASD+1;
            }
            if(`f${filasWASD}c${columnasWASD}`==`f${filasFlechas}c${columnasFlechas}`){
                if(columnasWASD==0){
                    columnasWASD=14;
                }else{
                    columnasWASD=columnasWASD-1;
                }
            }
            document.getElementById(`f${filasWASD}c${columnasWASD}`).classList.add('j1');
            ganar();
            break;
        case 'ArrowUp':
            document.getElementById(`f${filasFlechas}c${columnasFlechas}`).classList.remove('j2');
            if(filasFlechas==0){
                filasFlechas=14;
            }else{
                filasFlechas=filasFlechas-1;
            }
            if(`f${filasWASD}c${columnasWASD}`==`f${filasFlechas}c${columnasFlechas}`){
                if(filasFlechas==14){
                    filasFlechas=0;
                }else{
                    filasFlechas=filasFlechas+1;
                } 
            }
            document.getElementById(`f${filasFlechas}c${columnasFlechas}`).classList.add('j2');
            ganar();
            break;
        case 'ArrowDown':
            document.getElementById(`f${filasFlechas}c${columnasFlechas}`).classList.remove('j2');
            if(filasFlechas==14){
                filasFlechas=0;
            }else{
                filasFlechas=filasFlechas+1;
            }
            if(`f${filasWASD}c${columnasWASD}`==`f${filasFlechas}c${columnasFlechas}`){
                if(filasFlechas==0){
                    filasFlechas=14;
                }else{
                    filasFlechas=filasFlechas-1;
                }
            }
            document.getElementById(`f${filasFlechas}c${columnasFlechas}`).classList.add('j2');
            ganar();
            break;
        case 'ArrowLeft':
            document.getElementById(`f${filasFlechas}c${columnasFlechas}`).classList.remove('j2');
            if(columnasFlechas==0){
                columnasFlechas=14;
            }else{
                columnasFlechas=columnasFlechas-1;
            }
            if(`f${filasWASD}c${columnasWASD}`==`f${filasFlechas}c${columnasFlechas}`){
                if(columnasFlechas==14){
                    columnasFlechas=0;
                }else{
                    columnasFlechas=columnasFlechas+1;
                } 
            }
            document.getElementById(`f${filasFlechas}c${columnasFlechas}`).classList.add('j2');
            ganar();
            break;
        case 'ArrowRight':
            document.getElementById(`f${filasFlechas}c${columnasFlechas}`).classList.remove('j2');
            if(columnasFlechas==14){
                columnasFlechas=0;
            }else{
                columnasFlechas=columnasFlechas+1;
            }
            if(`f${filasWASD}c${columnasWASD}`==`f${filasFlechas}c${columnasFlechas}`){
                if(columnasFlechas==0){
                    columnasFlechas=14;
                }else{
                    columnasFlechas=columnasFlechas-1;
                }
            }
            document.getElementById(`f${filasFlechas}c${columnasFlechas}`).classList.add('j2');
            ganar();
            break;      
        }
}
function ganar(){
    if(`f${filasWASD}c${columnasWASD}`==`f${filasMeta}c${columnasMeta}`){
        alert("Ha ganado el jugador 1");
        document.removeEventListener('keydown',mover);
        puntuacion1++;
    }
    if(`f${filasFlechas}c${columnasFlechas}`==`f${filasMeta}c${columnasMeta}`){
        alert("Ha ganado el jugador 2");
        document.removeEventListener('keydown',mover);
        puntuacion2++;
    }
}

