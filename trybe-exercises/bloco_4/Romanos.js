let numRomano="XC";
let numArab=[0];
let pnumero=0;
let ultimosDois=0;
numArab.pop();

    //function traducao(numRomano){
    for(let cont=0;cont<numRomano.length;cont++){
        if(numRomano[cont]=="I"){
            numArab.push(1);
        }else if(numRomano[cont]=="V"){
            numArab.push(5);
        }else if(numRomano[cont]=="X"){
            numArab.push(10);
        }else if(numRomano[cont]=="L"){
            numArab.push(50);
        }else if(numRomano[cont]=="C"){
            numArab.push(100);
        }else if(numRomano[cont]=="D"){
            numArab.push(500);
        }else if(numRomano[cont]=="M") {
            numArab.push(1000);
        }else{
            console.log("Caractere Invalido - Tente outra Vez")
        }
    }
    if(numArab.length==2){
        if(numArab[numArab.length-2]<numArab[numArab.length-1]){
            ultimosDois=numArab[numArab.length-1] - numArab[numArab.length-2];        
            }else{    
            ultimosDois=numArab[numArab.length-1] + numArab[numArab.length-2];
            }
            console.log("O número é: " + ultimosDois);        
    }else{        
        for(cont=0;cont<((numArab.length)-2);cont++){
            pnumero=(numArab[cont])+pnumero;
        }
        if(numArab[numArab.length-2]<numArab[numArab.length-1]){
            ultimosDois=numArab[numArab.length-1] - numArab[numArab.length-2];        
        }else{    
            ultimosDois=numArab[numArab.length-1] + numArab[numArab.length-2];
        }    
        console.log("O número é: " + pnumero+ultimosDois);
    }
    //traducao();
    console.log("Em Romano: "+ numRomano); 
    console.log("Array IndoArabico: "+ numArab);