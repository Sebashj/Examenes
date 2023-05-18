function calcularArea() {
  let base =parseInt(document.getElementById("base").value);
  let altura =parseInt(document.getElementById("altura").value);
  document.getElementById("bs").innerHTML = base;
  document.getElementById("al").innerHTML = altura;
  const area = (base * altura) / 2;
  let div = document.querySelector("#resultado");
  div.innerHTML="<img src='anya.gif' width='200px' height='200px'>";
    setTimeout(()=>{
    div.innerHTML = `El Area del triángulo es: ${area.toFixed(2)}`;
    
    },1000);
      }