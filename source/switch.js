
// window.onload = function(){
  
//   document.getElementById('switcher').addEventListener("change", (el) => {
//     let switchDataChecked = el.target.getAttribute('data-checked')
//     if(switchDataChecked == "0"){
//       window.location.href = '/src/source/anual.html'
//       // document.getElementById('mensal').style.display = 'none'
//       // document.getElementById('anual').style.display= 'inline-block'
      
      
//     }else{
//       window.location.href = '/src/source/mensal.html'
//       // document.getElementById('anual').style.display = 'none'
//       // document.getElementById('anual').style.display = 'none'
//       // alert('teste')
//     }
//   });
  
// };


const selecionado = document.querySelector("#switcher");

selecionado.addEventListener("change", (el) => {
  if (selecionado.checked) {
    document.getElementById('mensal').style.display = 'none'
    document.getElementById('anual').style.display= 'inline-block'
    // alert("Anual");
  }
  else{
    document.getElementById('mensal').style.display = 'inline-block'
    document.getElementById('anual').style.display = 'none'
    // alert("Mês");
  }
});