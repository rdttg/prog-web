document.addEventListener('DOMContentLoaded', () => {
  const temaSalvo = localStorage.getItem('tema');
  if (temaSalvo === 'escuro') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  const botao = document.getElementById('botao-tema');
  if (botao) {
    botao.addEventListener('click', () => {
      const html = document.documentElement;
      html.classList.toggle('dark');

      if (html.classList.contains('dark')) {
        localStorage.setItem('tema', 'escuro');
      } else {
        localStorage.setItem('tema', 'claro');
      }
    });
  }

  const form = document.getElementById('formularioContato');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      emailjs.sendForm("service_portfolio", "template_portfolio", this)
        .then(() => {
          alert("Mensagem enviada com sucesso!");
          form.reset();
        })
        .catch((error) => {
          alert("Erro ao enviar: " + JSON.stringify(error));
        });
    });
  }
});
