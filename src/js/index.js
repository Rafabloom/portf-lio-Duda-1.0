/* ----- ATIVAR MENU RESPONSIVO (TELAS MENORES) ----- */
function myMenuFunction() {
    let menuBtn = document.getElementById("navbarNav");
    if (menuBtn.className === "menu") {
        menuBtn.className += " responsive";
    } else {
        menuBtn.className = "menu";
    }
    let icon = document.querySelector(".nav-menu-btn i");
    mudarNavBtn(icon);
}

function mudarNavBtn(icon) {
    icon.classList.toggle("fa-xmark");
}

/* ----- DEIXAR MENU HOVER ATIVADO NA SEÇÃO ----- */
const linksMenu = document.querySelectorAll('.cabecalho .menu li a');

// Adicionar um ouvinte de eventos de clique a cada link
linksMenu.forEach(link => {
    link.addEventListener('click', function() {
        // Remover a classe 'menu-ativo' de todos os links
        linksMenu.forEach(link => {
            link.classList.remove('menu-ativo');
        });
        // Adicionar a classe 'menu-ativo' ao link clicado
        this.classList.add('menu-ativo');
    });
});

// Adicionar um ouvinte de evento de rolagem
window.addEventListener('scroll', function() {
    // Iterar sobre todos os links do menu
    linksMenu.forEach(link => {
        const secaoId = link.getAttribute('href').substring(1); // Obter o ID da seção vinculada ao link
        const secao = document.getElementById(secaoId); // Obter a seção correspondente

        // Verificar se a seção está visível na tela
        const limiteSuperior = secao.offsetTop;
        const limiteInferior = limiteSuperior + secao.offsetHeight;
        const scrollAtual = window.pageYOffset;
        const alturaJanela = window.innerHeight;

        if ((limiteSuperior <= scrollAtual + alturaJanela / 2) && (limiteInferior >= scrollAtual + alturaJanela / 2)) {
            // Remover a classe 'menu-ativo' de todos os links
            linksMenu.forEach(link => {
                link.classList.remove('menu-ativo');
            });
            // Adicionar a classe 'menu-ativo' ao link correspondente à seção visível
            link.classList.add('menu-ativo');
        }
    });
});

/* ----- LÓGICA PARA BOTÃO MOSTRAR MAIS (PROJETOS) ----- */
const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

botaoMostrarProjetos.addEventListener('click', () => {
    if (botaoMostrarProjetos.classList.contains('mostrando-mais')) {
        mostrarMenosProjetos();
    } else {
        mostrarMaisProjetos();
    }
    toggleBotao();
});

function toggleBotao() {
    botaoMostrarProjetos.classList.toggle('mostrando-mais');
    if (botaoMostrarProjetos.classList.contains('mostrando-mais')) {
        botaoMostrarProjetos.textContent = 'Mostrar Menos';
    } else {
        botaoMostrarProjetos.textContent = 'Mostrar Mais';
    }
}

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}

function mostrarMenosProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.remove('ativo');
    });
}

/* ----- ALERTA DE PROJETOS ILUSTRATIVOS ----- */
document.addEventListener('DOMContentLoaded', function () {
    const projectLinks = document.querySelectorAll('.projeto a');

    projectLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            Swal.fire({
                title: 'Aviso!',
                text: 'Esses projetos são apenas ilustrativos, não são projetos reais.',
                icon: 'warning',
                confirmButtonText: 'Entendi',
                confirmButtonColor: '#6c0957',
                iconColor: '#6c0957',
            });
        });
    });
});

/* ----- LÓGICA PARA MOSTRAR TEXTO AO CLICAR NOS ICONES DE HABILIDADES
 -----  SEÇÃO HABILIDADES --------------------------------------- */
document.addEventListener('DOMContentLoaded', function() {
  const subtitulo = document.querySelector('.subtitulo');
  const icons = document.querySelectorAll('.icons, .icons-opac');
  const speechBubble = document.getElementById('speech-bubble');
  const speechBubbleOpac = document.getElementById('speech-bubble-opac');

  function cliqueNoIcone(icon) {
      const info = icon.getAttribute('data-info');
      const isOpac = icon.classList.contains('icons-opac');

      // Remove a classe 'active' de todos os ícones
      icons.forEach(icon => icon.classList.remove('active'));

      // Adiciona a classe 'active' ao ícone clicado
      icon.classList.add('active');

      // Texto formatado para cada ícone
      let formattedText;
      switch (info) {
          case 'HTML5':
              formattedText = `
                  <h3>HTML5</h3>
                  <p>HTML5 é a mais recente versão do padrão que define HTML. Ele inclui novos elementos de marcação e APIs que facilitam o desenvolvimento de aplicações web.</p>
                  <i class="devicon-html5-plain-wordmark icon-bottom-right inside-icon html5"></i>`;
              break;
          case 'CSS3':
              formattedText = `
                  <h3>CSS3</h3>
                  <p>CSS3 é a última evolução da linguagem de estilo utilizada para estilizar elementos escritos em uma linguagem de marcação como HTML. Ele traz novas possibilidades e recursos para o design de sites modernos.</p>
                  <i class="devicon-css3-plain-wordmark icon-bottom-right inside-icon css3"></i>`;
              break;
          case 'BOOTSTRAP':
              formattedText = `
                  <h3>Bootstrap</h3>
                  <p>Bootstrap é um framework front-end popular para desenvolvimento de sites responsivos e aplicativos da web. Ele fornece uma coleção de componentes e estilos CSS pré-construídos que ajudam a economizar tempo e esforço no desenvolvimento.</p>
                  <i class="devicon-bootstrap-plain-wordmark icon-bottom-right inside-icon bootstrap"></i>`;
              break;
          case 'JAVASCRIPT':
              formattedText = `
                  <h3>JavaScript</h3>
                  <p>JavaScript é uma linguagem de programação amplamente utilizada para criar interatividade em páginas web. Ela permite que você adicione comportamento dinâmico aos seus sites e aplicativos.</p>
                  <i class="devicon-javascript-plain icon-bottom-right inside-icon javascript"></i>`;
              break;
          case 'REACT':
              formattedText = `
              <h3>React</h3>
              <h4>AVISO! <i class="fa-solid fa-circle-exclamation"></i></h4>
              <p>React é uma biblioteca JavaScript para construção de interfaces de usuário.</p>
              <br>
              <p>Ainda não aprendi completamente sobre como utilizar o React, mas estou animado para aprender mais sobre isso no futuro!</p>
              <i class="devicon-react-original-wordmark icon-bottom-right inside-icon react"></i>`;
          break;
      case 'TYPESCRIPT':
          formattedText = `
              <h3>TypeScript</h3>
              <h4>AVISO! <i class="fa-solid fa-circle-exclamation"></i></h4>
              <p>TypeScript é uma linguagem de programação de código aberto mantida pela Microsoft.</p>
              <br>
              <p>Ainda não explorei o TypeScript em profundidade, mas estou interessado em aprender mais sobre seus recursos e benefícios.</p>
              <i class="devicon-typescript-plain icon-bottom-right inside-icon typescript"></i>`;
          break;
      case 'NODEJS':
          formattedText = `
              <h3>Node.js</h3>
              <h4>AVISO! <i class="fa-solid fa-circle-exclamation"></i></h4>
              <p>Node.js é uma plataforma de software de código aberto e JavaScript que é usada para...</p>
              <br>
              <p>OPA! Embora eu já tenha pesquisado algum conhecimento básico sobre Node.js, ainda não me aprofundei nessa tecnologia.</p>
              <i class="devicon-nodejs-plain-wordmark icon-bottom-right inside-icon nodejs"></i>`;
          break;
      default:
          formattedText = `
              <h3>${info}</h3>
              <p>Descrição genérica para ${info}.</p>
              <i class="icon-bottom-right inside-icon"></i>`;
      }

      // Adicionar o icone e o texto formatado ao balão de fala correspondente
      if (isOpac) {
          speechBubbleOpac.innerHTML = formattedText;
          speechBubble.style.display = 'none'; // Ocultar o balão de fala para o icons
          speechBubbleOpac.style.display = 'block';
      } else {
          speechBubble.innerHTML = formattedText;
          speechBubble.style.display = 'block';
          speechBubbleOpac.style.display = 'none'; // Ocultar o balão de fala no icons-opac
      }

      // Remover o subtítulo
      subtitulo.remove();
  }

  icons.forEach(icon => {
      icon.addEventListener('click', function() {
        cliqueNoIcone(this);
      });
  });
});

/* ----- LÓGICA PARA MOSTRAR ACCORDIONS
 -----  SEÇÃO OBJETIVOS --------------------------------------- */
 const accordions = document.querySelectorAll('.accordion-bg');

 accordions.forEach(accordion => {
     accordion.addEventListener('click', function() {
         this.classList.toggle('acc-active');
         const icon = this.querySelector('.accordion-header i');
         if (this.classList.contains('acc-active')) {
             icon.classList.remove('fa-circle-plus');
             icon.classList.add('fa-circle-minus');
         } else {
             icon.classList.remove('fa-circle-minus');
             icon.classList.add('fa-circle-plus');
         }
     });
 });

/* ----- ANIMAÇÕES
 -----  SEÇÃO CONTATO --------------------------------------- */
 const inputs = document.querySelectorAll(".input");

 function focusFunc() {
   let parent = this.parentNode;
   parent.classList.add("focus");
 }
 
 function blurFunc() {
   let parent = this.parentNode;
   if (this.value == "") {
     parent.classList.remove("focus");
   }
 }
 
 inputs.forEach((input) => {
   input.addEventListener("focus", focusFunc);
   input.addEventListener("blur", blurFunc);
 });

/* ----- COPIAR E-MAIL PAGINA CONTATO ----- */
function copiarEmail() {
    var textoEmail = document.querySelector('.dados-email').textContent;
    navigator.clipboard.writeText(textoEmail)
        .then(() => {
            Swal.fire({
                icon: 'success',
                title: 'E-mail Copiado!',
                text: 'Endereço de e-mail copiado para a área de transferência.',
                confirmButtonColor: '#6c0957',
                iconColor: '#6c0957',
            });
        })
        .catch(err => {
            console.error('Erro ao copiar o endereço de e-mail: ', err);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Houve um erro ao copiar o endereço de e-mail. Por favor, tente novamente.',
                confirmButtonColor: '#6c0957',
            });
        });
}

/* ----- EMITIR ALERTA AVISANDO SOBRE O PHP DO FORMULÁRIO ----- */
document.getElementById('enviar').addEventListener('click', function() {
    Swal.fire({
        icon: null,
        title: 'Oops...',
        text: 'Desculpe, o formulário de contato ainda não está funcional. Ainda estou aprendendo PHP!',
        confirmButtonText: 'Entendi',
        confirmButtonColor: '#6c0957',
        iconHtml: '<img src="src/Imagens/emotejoia.png" class="emote-info">'
    });
});