let num1=123456;
let num2=   777;
//    123111213
let snum1=num1.toString();
let snum2=num2.toString();
let resultado=[0];
let abacate=Number;
let acerola=Number;
let vitamina=Number;
resultado.pop();
console.log(resultado.length);
       
        for(let index=0;index<snum1.length;index++){
            addposi=resultado.unshift("0");
            addin= snum2.slice("0");
        }
       
        let index2=snum2.length;
       
        console.log(index2);
       
        for(index=6;index>=0;index--){
       
            //console.log(index);

            abacate=parseInt(snum2[index2]);
            //console.log(abacate);
            acerola=parseInt(snum1[index]);
            //console.log(acerola);
            vitamina=abacate+acerola;
            console.log(vitamina);
            
            resultado.slice(index,0,vitamina);
            
            index2--;
            //console.log(abacate);
            //console.log(acerola);
        }

console.log(snum1);
console.log(snum2);
console.log(resultado);