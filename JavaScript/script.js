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

// --- NOVAS DECLARAÇÕES E LÓGICA DE FOTO E RESET ---
const IncluirFoto = document.getElementById('IncluirFoto');
const ControleFotoUpload = document.getElementById('ControleFotoUpload');
const FotoInput = document.getElementById('FotoInput');
const FotoNomeArquivo = document.getElementById('FotoNomeArquivo');
const FotoCvContainer = document.getElementById('FotoCvContainer');
const FotoCv = document.getElementById('FotoCv');
const CvHeader = document.getElementById('CvHeader');
const BtnAlinhamentos = document.querySelectorAll('.BtnAlinhamento');
const BtnResetarDados = document.getElementById('BtnResetarDados');

// Controle do switch de inclusão de foto
if (IncluirFoto) {
    IncluirFoto.addEventListener('change', () => {
        if (IncluirFoto.checked) {
            ControleFotoUpload.style.display = 'flex';
            FotoCvContainer.style.display = 'block';
        } else {
            ControleFotoUpload.style.display = 'none';
            FotoCvContainer.style.display = 'none';
            FotoCv.src = '';
            FotoNomeArquivo.innerText = "Nenhuma foto selecionada";
            localStorage.removeItem('kelcv_foto_base64');
        }
        window.salvarDadosLocalmente();
    });
}

// Leitura e compressão da foto de perfil
if (FotoInput) {
    FotoInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            FotoNomeArquivo.innerText = file.name;
            lerECompactarImagem(file, (base64) => {
                FotoCv.src = base64;
                localStorage.setItem('kelcv_foto_base64', base64);
                window.salvarDadosLocalmente();
            });
        }
    });
}

// Alinhamento da foto
BtnAlinhamentos.forEach(btn => {
    btn.addEventListener('click', () => {
        BtnAlinhamentos.forEach(b => {
            b.classList.remove('active');
            b.style.background = 'white';
            b.style.color = 'var(--Botoes)';
        });
        btn.classList.add('active');
        btn.style.background = 'var(--Botoes)';
        btn.style.color = 'white';
        
        const posicao = btn.getAttribute('data-posicao');
        aplicarAlinhamentoFoto(posicao);
        window.salvarDadosLocalmente();
    });
});

function aplicarAlinhamentoFoto(posicao) {
    if (!CvHeader) return;
    CvHeader.classList.remove('alinhamento-esquerda', 'alinhamento-centro', 'alinhamento-direita');
    CvHeader.classList.add(`alinhamento-${posicao}`);
}

function lerECompactarImagem(file, callback) {
    const reader = new FileReader();
    reader.onload = function(e) {
        const img = new Image();
        img.onload = function() {
            const canvas = document.createElement('canvas');
            const max_size = 300;
            let width = img.width;
            let height = img.height;
            
            if (width > height) {
                if (width > max_size) {
                    height *= max_size / width;
                    width = max_size;
                }
            } else {
                if (height > max_size) {
                    width *= max_size / height;
                    height = max_size;
                }
            }
            
            canvas.width = width;
            canvas.height = height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, width, height);
            
            const dataUrl = canvas.toDataURL('image/jpeg', 0.8);
            callback(dataUrl);
        };
        img.src = e.target.result;
    };
    reader.readAsDataURL(file);
}

// Botão de reset de dados
if (BtnResetarDados) {
    BtnResetarDados.addEventListener('click', () => {
        if (confirm("Tem certeza que deseja limpar todos os dados do seu currículo e recomeçar?")) {
            localStorage.removeItem('kelcv_dados_curriculo');
            localStorage.removeItem('kelcv_foto_base64');
            location.reload();
        }
    });
}


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
// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initScrollAnimation();
  initCarousel();
  setTimeout(() => {
    window.carregarDadosLocalmente();
    configurarEdicaoBidirecional();
  }, 100);
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

// --- FUNÇÕES DE PERSISTÊNCIA E SINCRONIZAÇÃO LOCAL ---

window.salvarDadosLocalmente = function() {
    let fotoPosicao = 'esquerda';
    const btnAtivo = document.querySelector('.BtnAlinhamento.active');
    if (btnAtivo) {
        fotoPosicao = btnAtivo.getAttribute('data-posicao');
    }
    
    const cursosSalvar = typeof window.cursos !== 'undefined' ? window.cursos : [];
    const experienciasSalvar = typeof window.listaExperiencia !== 'undefined' ? window.listaExperiencia : [];
    const habilidadesSalvar = typeof window.listaHabilidades !== 'undefined' ? window.listaHabilidades : [];
    const infoAdicionaisSalvar = typeof window.listaInfoAdicional !== 'undefined' ? window.listaInfoAdicional : [];

    const dados = {
        nome: document.getElementById('Nome').value,
        estado: document.getElementById('Estados').value,
        cidade: document.getElementById('Cidade').value,
        email: document.getElementById('Email').value,
        ddd: document.getElementById('DDD').value,
        whatsapp: document.getElementById('whatsapp').value,
        redeSocial: {
            githubChecked: document.getElementById('RadioGithub').checked,
            linkedinChecked: document.getElementById('RadioLinkedIn').checked,
            todasChecked: document.getElementById('Todas').checked,
            githubUser: document.getElementById('InputGithub').value,
            linkedinUser: document.getElementById('InputLinkedIn').value
        },
        incluirFoto: document.getElementById('IncluirFoto').checked,
        fotoPosicao: fotoPosicao,
        objetivos: document.getElementById('Objetivos').value,
        ensinoMedio: {
            incompleto: document.getElementById('incompleto').checked,
            completo: document.getElementById('completo').checked,
            colegio: document.getElementById('Colegio').value,
            ano: document.getElementById('DataDeFormação').value
        },
        cursos: cursosSalvar,
        experiencias: experienciasSalvar,
        habilidades: habilidadesSalvar,
        habilitacao: {
            a: document.getElementById('A').checked,
            b: document.getElementById('B').checked,
            ab: document.getElementById('A/B').checked,
            outros: document.getElementById('Outros').checked,
            valorOutros: document.getElementById('InputOutros').value
        },
        informacoesAdicionais: infoAdicionaisSalvar
    };

    localStorage.setItem('kelcv_dados_curriculo', JSON.stringify(dados));
};

window.carregarDadosLocalmente = function() {
    const dadosSalvos = localStorage.getItem('kelcv_dados_curriculo');
    if (!dadosSalvos) return;

    try {
        const dados = JSON.parse(dadosSalvos);

        document.getElementById('Nome').value = dados.nome || '';
        document.getElementById('Estados').value = dados.estado || 'Selecione o Estado';
        document.getElementById('Cidade').value = dados.cidade || '';
        document.getElementById('Email').value = dados.email || '';
        document.getElementById('DDD').value = dados.ddd || '';
        document.getElementById('whatsapp').value = dados.whatsapp || '';

        document.getElementById('RadioGithub').checked = dados.redeSocial?.githubChecked || false;
        document.getElementById('RadioLinkedIn').checked = dados.redeSocial?.linkedinChecked || false;
        document.getElementById('Todas').checked = dados.redeSocial?.todasChecked || false;
        document.getElementById('InputGithub').value = dados.redeSocial?.githubUser || '';
        document.getElementById('InputLinkedIn').value = dados.redeSocial?.linkedinUser || '';

        document.getElementById('IncluirFoto').checked = dados.incluirFoto || false;
        const fotoData = localStorage.getItem('kelcv_foto_base64');
        if (fotoData && dados.incluirFoto) {
            document.getElementById('FotoCv').src = fotoData;
            document.getElementById('FotoCvContainer').style.display = 'block';
            document.getElementById('FotoNomeArquivo').innerText = "Foto carregada";
        } else {
            document.getElementById('FotoCvContainer').style.display = 'none';
        }
        
        if (dados.incluirFoto) {
            document.getElementById('ControleFotoUpload').style.display = 'flex';
        }

        const posicao = dados.fotoPosicao || 'esquerda';
        const btnsAlinhamento = document.querySelectorAll('.BtnAlinhamento');
        btnsAlinhamento.forEach(btn => {
            if (btn.getAttribute('data-posicao') === posicao) {
                btn.classList.add('active');
                btn.style.background = 'var(--Botoes)';
                btn.style.color = 'white';
            } else {
                btn.classList.remove('active');
                btn.style.background = 'white';
                btn.style.color = 'var(--Botoes)';
            }
        });
        aplicarAlinhamentoFoto(posicao);

        document.getElementById('Objetivos').value = dados.objetivos || '';

        document.getElementById('incompleto').checked = dados.ensinoMedio?.incompleto || false;
        document.getElementById('completo').checked = dados.ensinoMedio?.completo || false;
        document.getElementById('Colegio').value = dados.ensinoMedio?.colegio || '';
        document.getElementById('DataDeFormação').value = dados.ensinoMedio?.ano || '';

        document.getElementById('A').checked = dados.habilitacao?.a || false;
        document.getElementById('B').checked = dados.habilitacao?.b || false;
        document.getElementById('A/B').checked = dados.habilitacao?.ab || false;
        document.getElementById('Outros').checked = dados.habilitacao?.outros || false;
        document.getElementById('InputOutros').value = dados.habilitacao?.valorOutros || '';

        if (typeof window.cursos !== 'undefined') window.cursos = dados.cursos || [];
        if (typeof window.listaExperiencia !== 'undefined') window.listaExperiencia = dados.experiencias || [];
        if (typeof window.listaHabilidades !== 'undefined') window.listaHabilidades = dados.habilidades || [];
        if (typeof window.listaInfoAdicional !== 'undefined') window.listaInfoAdicional = dados.informacoesAdicionais || [];

        if (typeof window.atualizarLista === 'function') window.atualizarLista();
        if (typeof window.atualizarListaExp === 'function') window.atualizarListaExp();
        
        // Habilidades
        const HabilidadesCV = document.getElementById('HabilidadesCv');
        if (HabilidadesCV) {
            HabilidadesCV.innerHTML = '';
            const H2Habilidades = document.getElementById('H2Habilidades');
            if (dados.habilidades && dados.habilidades.length > 0) {
                if (H2Habilidades) H2Habilidades.style.display = 'block';
                dados.habilidades.forEach((hab, idx) => {
                    const ul = document.createElement("ul");
                    ul.style.position = 'relative';
                    ul.style.display = 'flex';
                    ul.style.alignItems = 'center';
                    ul.style.justifyContent = 'space-between';
                    ul.innerHTML = `<li>• ${hab}</li> 
                    <span class="btn-remover-item" onclick="window.removerHabilidade(${idx})" style="cursor:pointer; color:#e74c3c; margin-left:10px; font-size:0.8rem;" title="Remover habilidade">❌</span>`;
                    HabilidadesCV.appendChild(ul);
                });
            }
        }

        if (typeof window.Hablitação === 'function') window.Hablitação();
        if (typeof window.mostrarInputOutros === 'function') window.mostrarInputOutros();

        // Informações adicionais
        const infoCV = document.getElementById('InformaçõesAdicionaisCv');
        const InformacoesHeader = document.getElementById('Informacoes');
        if (infoCV) {
            infoCV.innerHTML = '';
            if (dados.informacoesAdicionais && dados.informacoesAdicionais.length > 0) {
                if (InformacoesHeader) InformacoesHeader.style.display = 'block';
                dados.informacoesAdicionais.forEach((info, idx) => {
                    const ul = document.createElement("ul");
                    ul.style.position = 'relative';
                    ul.style.display = 'flex';
                    ul.style.alignItems = 'center';
                    ul.style.justifyContent = 'space-between';
                    ul.innerHTML = `<li>• ${info}</li>
                    <span class="btn-remover-item" onclick="window.removerInfoAdicional(${idx})" style="cursor:pointer; color:#e74c3c; margin-left:10px; font-size:0.8rem;" title="Remover informação">❌</span>`;
                    infoCV.appendChild(ul);
                });
            }
        }

        if (typeof window.EnsinoMédio === 'function') window.EnsinoMédio();
        if (typeof window.DivEnsinoMédio === 'function') window.DivEnsinoMédio();
        if (typeof window.mostrarInput === 'function') window.mostrarInput();

        document.getElementById('NomeCv').innerText = dados.nome || '';
        document.getElementById('ObjetivoCv').innerText = dados.objetivos || '';
        if (dados.objetivos) {
            document.getElementById('H2ObjetivoCv').style.display = 'block';
            document.getElementById('ObjetivoCv').style.display = 'block';
        }
        
        if (dados.cidade && dados.estado) {
            document.getElementById('CidadeCv').innerHTML = `<strong>Cidade:</strong> ${dados.cidade}/${dados.estado.toUpperCase()}`;
        } else {
            document.getElementById('CidadeCv').innerHTML = '';
        }
        
        if (dados.email) {
            document.getElementById('EmailCv').innerHTML = `<strong>Email:</strong> ${dados.email}`;
        } else {
            document.getElementById('EmailCv').innerHTML = '';
        }
        
        if (dados.whatsapp && dados.ddd) {
            document.getElementById('WhatsappCv').innerHTML = `<strong>Telefone:</strong> (${dados.ddd}) ${dados.whatsapp}`;
        } else {
            document.getElementById('WhatsappCv').innerHTML = '';
        }
        
        if (dados.redeSocial?.githubUser) {
            document.getElementById('GithubCv').innerHTML = `<strong>Github:</strong> ${dados.redeSocial.githubUser}`;
            document.getElementById('GithubCv').style.display = 'block';
        } else {
            document.getElementById('GithubCv').style.display = 'none';
        }
        
        if (dados.redeSocial?.linkedinUser) {
            document.getElementById('LinkedInCv').innerHTML = `<strong>LinkedIn:</strong> ${dados.redeSocial.linkedinUser}`;
            document.getElementById('LinkedInCv').style.display = 'block';
        } else {
            document.getElementById('LinkedInCv').style.display = 'none';
        }

    } catch (e) {
        console.error("Erro ao carregar dados do currículo:", e);
    }
};

function configurarEdicaoBidirecional() {
    const mapeamento = [
        { cvId: 'NomeCv', formId: 'Nome' },
        { cvId: 'ObjetivoCv', formId: 'Objetivos' }
    ];

    mapeamento.forEach(item => {
        const el = document.getElementById(item.cvId);
        if (el) {
            el.addEventListener('blur', () => {
                const formEl = document.getElementById(item.formId);
                if (formEl) formEl.value = el.innerText;
                window.salvarDadosLocalmente();
            });
        }
    });

    const emailCv = document.getElementById('EmailCv');
    if (emailCv) {
        emailCv.addEventListener('blur', () => {
            const texto = emailCv.innerText.replace("Email:", "").trim();
            document.getElementById('Email').value = texto;
            window.salvarDadosLocalmente();
        });
    }

    const cidadeCv = document.getElementById('CidadeCv');
    if (cidadeCv) {
        cidadeCv.addEventListener('blur', () => {
            const texto = cidadeCv.innerText.replace("Cidade:", "").trim();
            const partes = texto.split("/");
            if (partes.length === 2) {
                document.getElementById('Cidade').value = partes[0].trim();
                document.getElementById('Estados').value = partes[1].trim().toLowerCase();
            } else {
                document.getElementById('Cidade').value = texto;
            }
            window.salvarDadosLocalmente();
        });
    }

    const whatsappCv = document.getElementById('WhatsappCv');
    if (whatsappCv) {
        whatsappCv.addEventListener('blur', () => {
            const texto = whatsappCv.innerText.replace("Telefone:", "").trim();
            const dddMatch = texto.match(/\(([^)]+)\)/);
            if (dddMatch && dddMatch[1]) {
                document.getElementById('DDD').value = dddMatch[1];
                document.getElementById('whatsapp').value = texto.replace(dddMatch[0], "").trim();
            } else {
                document.getElementById('whatsapp').value = texto;
            }
            window.salvarDadosLocalmente();
        });
    }

    const githubCv = document.getElementById('GithubCv');
    if (githubCv) {
        githubCv.addEventListener('blur', () => {
            const user = githubCv.innerText.replace("Github:", "").trim();
            document.getElementById('InputGithub').value = user;
            window.salvarDadosLocalmente();
        });
    }

    const linkedinCv = document.getElementById('LinkedInCv');
    if (linkedinCv) {
        linkedinCv.addEventListener('blur', () => {
            const user = linkedinCv.innerText.replace("LinkedIn:", "").trim();
            document.getElementById('InputLinkedIn').value = user;
            window.salvarDadosLocalmente();
        });
    }
}

