//Botões e inputs
const inputHeight = document.querySelector('.inputHeight');
const inputWeight = document.querySelector('.inputWeight');
const btnCalc = document.querySelector('.btncalc');
const btnClear = document.querySelector('.btnClear');

//Trocando virgula por ponto
function dataValidation(value){
   let values = value.replace(',','.');
   values = parseFloat(values);
   return values;
}

function calcImc(){
   //validando dados
   if(inputHeight.value === '' || inputWeight.value === ''){
      const div = document.createElement('div');
      div.className = `alert alert-danger`;
      div.appendChild(document.createTextNode('Preencher todos os campos'));
      const container = document.querySelector('.container');
      const form = document.querySelector('.imc-form');
      container.insertBefore(div,form);

      //Remove in 3 sec
      setTimeout(()=>document.querySelector('.alert').remove(),3000);
   }else{
      let valueHeight = dataValidation(inputHeight.value);
      let valueWeight = dataValidation(inputWeight.value);
      let imc = valueWeight / (Math.pow(valueHeight,2));

      if(imc <= 18.5){
         document.querySelector('.row1').classList.add('table-secondary');
      }else if(imc>= 18.5  && imc <= 24.9){
         document.querySelector('.row2').classList.add('table-secondary');
      }else if(imc >= 25.0  && imc <= 29.9){
         document.querySelector('.row3').classList.add('table-secondary');
      }else if(imc >= 30.0  && imc <= 39.9){
         document.querySelector('.row4').classList.add('table-secondary');
      }else {
         document.querySelector('.row5').classList.add('table-secondary');
      }
   }
}

//Limpando inputs e tabelas
function clearAll(){
   //Inputs
   inputHeight.value = "";
   inputWeight.value = "";

   //Tabela
   document.querySelector('.row1').classList.remove('.table.secondary');
   document.querySelector('.row2').classList.remove('.table.secondary');
   document.querySelector('.row3').classList.remove('.table.secondary');
   document.querySelector('.row4').classList.remove('.table.secondary');
   document.querySelector('.row5').classList.remove('.table.secondary');
}