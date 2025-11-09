let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 4000); // muda a cada 4 segundos
}
{
  "servicos" [
    {"nome": "Maquiagem Noiva", "preco": "400"},
    {"nome": "Maquiagem Social", "preco": "160"},
    {"nome": "Maquiagem Editorial", "preco": "280"},
    {"nome": "Maquiagem do Dia", "preco": "110"},
    {"nome": "Maquiagem da Noite", "preco": "180"},
    {"nome": "Maquiagem Artística", "preco": "300"}
  ]
}
// Envio do formulário
const form = document.getElementById("formAgendamento");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const msg = document.getElementById("mensagem").value;

    if (nome && email) {
      alert(`Obrigada, ${nome}! Seu agendamento foi enviado com sucesso.`);
      form.reset();
    } else {
      alert("Por favor, preencha todos os campos obrigatórios.");
    }
  });
}
