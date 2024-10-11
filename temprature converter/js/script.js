function convert (){
let worth= parseFloat(document.getElementById('worth').value);

let temp=document.getElementById('Temprature-First').value;

let temp2=document.getElementById('Temprature-Second').value;




let convertedValue;

switch(temp){
    case 'Celcius':
          if(temp2 === 'Feranhit'){
             convertedValue = (worth*9/5)+32;

          }else if (temp2=== 'Kelvin'){
            convertedValue = worth + 273.15;

          }else{
            convertedValue = worth;
          }
          break;
    
    case 'Kelvin' :
        if(temp2 === 'Feranhit'){
            convertedValue = (worth-273.15)*1.8+32;

         }else if (temp2=== 'Celcius'){
           convertedValue = worth - 273.15;

         }else{
           convertedValue = worth;
         }
         break;
              
         case 'Feranhit' :
            if(temp2 === 'Celcius'){
                convertedValue = (worth-32)*5/9;
    
             }else if (temp2=== 'Kelvin'){
               convertedValue = worth + 273.15;
    
             }else{
               convertedValue = worth;
             }
             break;
}
   document.getElementById('result').value = convertedValue.toFixed(2);
}