const BtnSumit = document.querySelector('.Btn-submit1');
const BtnSubmit = document.querySelector('.Btn-submit2');
const BtnSubmit3 = document.querySelector('.Btn-submit3');
const BtnImprimir = document.querySelector('.BtnImprimir');
const BtnPrintVoltar = document.querySelector('.BtnPrintVoltar');
const Voltar = document.querySelector('.Voltar');
const BtnFinalizar = document.querySelector('.BtnFinalizar');
let WhatsappCv = document.getElementById('WhatsappCv');
let EstadosCv = document.getElementById('Estados');
let github = document.getElementById('RadioGithub');
let linkedin = document.getElementById('RadioLinkedIn');
let todas = document.getElementById('Todas');
let InputGithub = document.getElementById('InputGithub');
let InputLinkedIn = document.getElementById('InputLinkedIn');
let GithubCv = document.getElementById('GithubCv');
let LinkedInCv = document.getElementById('LinkedInCv');
let DivEtapa1 = document.getElementById('DivEtapa1');
let DivEtapa2 = document.getElementById('DivEtapa2');
let DivEtapa3 = document.getElementById('DivEtapa3');
let Objetivos = document.getElementById('Objetivos');
let H2ObjetivoCv = document.getElementById('H2ObjetivoCv');
let ObjetivoCv = document.getElementById('ObjetivoCv');
let DivNomeEscola = document.getElementById('DivNomeEscola');
let H2FormacaoCv = document.getElementById('H2FormacaoCv');
let Avançar = document.getElementById('Avançar');
let InputTSSim = document.getElementById('InputNivelTSSim');
let InputTSNao = document.getElementById('InputNivelTSNao');
let DivInstituição = document.getElementById('DivInstituição');
let DivInstituicao2 = document.getElementById('DivInstituicao2');
let FormFormulario1 = document.getElementById('FormFormulario1');
let FormFormulario2 = document.getElementById('FormFormulario2');
let A4Social = document.querySelector('.A4Social');

BtnSumit.addEventListener('click', (event) => {
    event.preventDefault();
    dados();
    esconderDivEtapa1();
    document.getElementById('NavInicial').scrollIntoView({behavior: 'smooth'});
});

BtnSubmit.addEventListener('click', (event) => {
    event.preventDefault();
    esconderDivEtapa2();
    document.getElementById('NavInicial').scrollIntoView({behavior: 'smooth'});
});
BtnSubmit3.addEventListener('click', (event) => {
    event.preventDefault();
    esconderFormFormulario2();
    MostrarBtn();
    document.getElementById('NavInicial').scrollIntoView({behavior: 'smooth'});
});
BtnImprimir.addEventListener('click', (event) => {
    event.preventDefault();
    prepararImpressao();
    MostrarBtn();
    
});

//-----------------Volta para pagina inicial-----------------//
BtnFinalizar.addEventListener('click', (event) => {
    location.reload();  
});


function dados(){
    if(InputGithub.style.display === 'block' && InputLinkedIn.style.display === 'block'){
        GithubCv.style.display = 'block';
        LinkedInCv.style.display = 'block';
    } else if(InputGithub.style.display === 'block' && InputLinkedIn.style.display === 'none'){
        GithubCv.style.display = 'block';
        LinkedInCv.style.display = 'none';
    } else if(InputGithub.style.display === 'none' && InputLinkedIn.style.display === 'block'){
        GithubCv.style.display = 'none';
        LinkedInCv.style.display = 'block';
    } else{
        GithubCv.style.display = 'none';
        LinkedInCv.style.display = 'none';
    }
}

function mostrarInput(){  
    if(github.checked){
        InputGithub.style.display = 'block';
        A4Social.style.display = 'block';
    }   else{   
        InputGithub.style.display = 'none';
    } if(linkedin.checked){
        InputLinkedIn.style.display = 'block';
        A4Social.style.display = 'block';
    }     else{
        InputLinkedIn.style.display = 'none';
    }if(todas.checked){
        A4Social.style.display = 'block';
        InputGithub.style.display = 'block';
        InputLinkedIn.style.display = 'block';
    }
};
function esconderDivEtapa1(){
    FormFormulario1.style.display = 'flex';
    DivEtapa1.style.display = 'none';
    DivEtapa2.style.display = 'flex';
    BtnSumit.style.display = 'none';
    DivEtapa2.style.flexDirection = 'column';
};
function esconderDivEtapa2(){
    FormFormulario1.style.display = 'none';
    FormFormulario2.style.display = 'flex';
    BtnSubmit3.style.display = 'block';
    FormFormulario2.style.flexDirection = 'column'
};
function esconderFormFormulario2(){
    FormFormulario2.style.display = 'none';
    BtnSubmit3.style.display = 'none';
    BtnImprimir.style.display = 'block';
};
function prepararImpressao() {
    // Esconde o botão
    BtnImprimir.style.display = "none";
    BtnPrintVoltar.style.display = "none";
    BtnFinalizar.style.display = "none";

    // Abre a janela de impressão
    window.print();
    
    // Reexibe o botão após fechar o diálogo de impressão
    BtnImprimir.style.display = "block";
    BtnPrintVoltar.style.display = "block";
    BtnFinalizar.style.display = "block";
}

function MostrarBtn(){
    if(BtnImprimir.style.display === 'block'){
        BtnPrintVoltar.style.display = "block";
        Voltar.style.display = "block";
        BtnFinalizar.style.display = "block";
    } else{
        BtnPrintVoltar.style.display = "none";
        BtnFinalizar.style.display = "none";
        Voltar.style.display = "none";
    }
};
function voltarDiv1() {
    DivEtapa1.style.display = 'flex';
    DivEtapa2.style.display = 'none';
    BtnSumit.style.display = 'block';
    DivEtapa1.style.flexDirection = 'column';
}

function voltarDiv2() {
    FormFormulario1.style.display = 'flex';
    FormFormulario2.style.display = 'none';
    BtnSubmit3.style.display = 'none';
    DivEtapa2.style.flexDirection = 'column';
}
function voltarDiv3() {
    FormFormulario2.style.display = 'flex';
    BtnSubmit3.style.display = 'block';
    BtnImprimir.style.display = 'none';
    FormFormulario2.style.flexDirection = 'column';
    BtnPrintVoltar.style.display = "none";
    BtnFinalizar.style.display = "none";
}

// Menu hamburger responsivo
const menuToggle = document.querySelector('.menu-toggle');
const ulInicial = document.querySelector('.ULInicial');

if (menuToggle && ulInicial) {
  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    ulInicial.classList.toggle('active');
  });
  
  // Fecha o menu ao clicar em um link
  document.querySelectorAll('.LinkInicio').forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.classList.remove('active');
      ulInicial.classList.remove('active');
    });
  });
}

// Scroll Animation
function initScrollAnimation() {
  const scrollElements = document.querySelectorAll('.scroll-animate');
  
  const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
      elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
  };
  
  const displayScrollElement = (element) => {
    element.classList.add('visible');
  };
  
  const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
      if (elementInView(el, 1.1)) {
        displayScrollElement(el);
      }
    });
  };
  
  // Initial check
  handleScrollAnimation();
  
  // Check on scroll
  window.addEventListener('scroll', handleScrollAnimation);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initScrollAnimation();
  initCarousel();
});

// Carousel Vagas de Emprego
function initCarousel() {
  const track = document.querySelector('.carousel-track');
  if (!track) return;
  const cards = Array.from(track.querySelectorAll('.destaque-card'));
  const prevBtn = document.querySelector('.carrossel-btn-prev');
  const nextBtn = document.querySelector('.carrossel-btn-next');
  const dotsContainer = document.querySelector('.carrossel-dots');
  let currentSlide = 0;
  const totalSlides = cards.length;

  if (totalSlides === 0) return;

  // Generate dots
  if (dotsContainer) {
    dotsContainer.innerHTML = '';
    cards.forEach((_, index) => {
      const dot = document.createElement('button');
      dot.classList.add('carrossel-dot');
      if (index === 0) dot.classList.add('active');
      dot.setAttribute('aria-label', `Ir para vaga ${index + 1}`);
      dot.addEventListener('click', () => goToSlide(index));
      dotsContainer.appendChild(dot);
    });
  }

  function updateTrack() {
    // Get the width of a single card including any gap
    const firstCard = cards[0];
    if (!firstCard) return;
    
    const containerWidth = track.parentElement.offsetWidth;
    const computedStyle = window.getComputedStyle(firstCard);
    const cardMargin = parseFloat(computedStyle.marginLeft) + parseFloat(computedStyle.marginRight);
    const cardWidth = firstCard.offsetWidth + cardMargin;
    
    // On mobile, use card width; on desktop, use full container width
    const isMobile = window.innerWidth <= 820;
    const slideWidth = isMobile ? cardWidth : containerWidth;
    
    track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    
    // Update dots
    if (dotsContainer) {
      const dots = dotsContainer.querySelectorAll('.carrossel-dot');
      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
      });
    }
  }

  function goToSlide(slideIndex) {
    currentSlide = Math.max(0, Math.min(slideIndex, totalSlides - 1));
    updateTrack();
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => goToSlide(currentSlide - 1));
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => goToSlide(currentSlide + 1));
  }

  window.addEventListener('resize', () => updateTrack());
  updateTrack();
}
