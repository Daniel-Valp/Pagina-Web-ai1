let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("bolas");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4000);
}

const displayTime = document.querySelector(".display-time");
// Tempo
function showTime() {
  let time = new Date();
  displayTime.innerText = time.toLocaleTimeString("en-US", { hour12: false });
  setTimeout(showTime, 1000);
}

showTime();

// Data
function updateDate() {
  let today = new Date();

  // devolve numero
  let dayName = today.getDay(),
    dayNum = today.getDate(),
    month = today.getMonth(),
    year = today.getFullYear();

  const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Otubro",
    "Novembro",
    "Dezembro",
  ];
  const dayWeek = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sabado",
  ];
  // valor -> ID do elemento html
  const IDCollection = ["day", "daynum", "month", "year"];
  // devolve valor
  const val = [dayWeek[dayName], dayNum, months[month], year];
  for (let i = 0; i < IDCollection.length; i++) {
    document.getElementById(IDCollection[i]).firstChild.nodeValue = val[i];
  }
}

updateDate();

function store(){
  //vai buscar os dados do formulario
  var Email= document.getElementById("email").value;
  var Nome = document.getElementById("nome").value;
  var mensagem = document.getElementById("mensagem").value;
  var phone = document.getElementById("phone").value;
  var razao = document.getElementById("razao").value;

  //Guarda dentro do local storage
  var user = localStorage.setItem("Nome",Nome);
  var sms = localStorage.setItem("mensagem",mensagem);
  var em = localStorage.setItem("email", Email);
  var ph = localStorage.setItem("phone", phone);
  var rz = localStorage.setItem("razao", razao);
 }

 function notificacao(){
  alert("Os dados do formulario foram guardados com sucesso!!");
  alert("Para ver ir a 'inspecionar' e depois a 'aplications'");
 }

 