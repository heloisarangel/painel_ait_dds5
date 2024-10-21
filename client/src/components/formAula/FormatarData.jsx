

function FormatarData(data) {
const objetoData = new(data);
const ano = objetoData.getFullYear();
const mes = objetoData.getMonth()+1;
const dia =  objetoData.getDate();

if (mes.length<2){
    mes = '0'+mes;
}
 if (dia.length<2){
    dia = '0'+dia;
 }
   const dataCompleta = [ano,mes,dia].json('-');
   return dataCompleta;
}

export default FormatarData;