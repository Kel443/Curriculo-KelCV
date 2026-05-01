  
 // ==================== PÁGINA DE CONTRIBUIÇÃO ====================

// Copiar Pix para a área de transferência
function copiarPix() {
    const pixInput = document.getElementById('pixInput');
    const pix = pixInput.value;
    
    navigator.clipboard.writeText(pix).then(() => {
        const btn = document.querySelector('.btn-copiar');
        if (btn) {
            const textoOriginal = btn.textContent;
            btn.textContent = '✓ Copiado!';
            btn.classList.add('copiado');
            setTimeout(() => {
                btn.textContent = textoOriginal;
                btn.classList.remove('copiado');
            }, 2000);
        }
    }).catch(err => {
        // Fallback para navegadores antigos
        const textArea = document.createElement('textarea');
        textArea.value = pix;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        document.body.appendChild(textArea);
        textArea.select();
        try {
            document.execCommand('copy');
            const btn = document.querySelector('.btn-copiar');
            if (btn) {
                btn.textContent = '✓ Copiado!';
                btn.classList.add('copiado');
                setTimeout(() => {
                    btn.textContent = '📋 Copiar Pix';
                    btn.classList.remove('copiado');
                }, 2000);
            }
        } catch (err) {
            alert('Erro ao copiar. Por favor, copie manualmente.');
        }
        document.body.removeChild(textArea);
    });
}

// Selecionar texto do input
function selecionarTexto(input) {
    input.select();
    document.execCommand('copy');
}

// Atualizar ano no footer
function atualizarAno() {
    const anoElem = document.getElementById('DivFooterP@');
    if (anoElem) {
        const ano = new Date().getFullYear();
        anoElem.innerHTML = `© ${ano} Kel Designer. Todos os direitos reservados.`;
    }
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    atualizarAno();
});