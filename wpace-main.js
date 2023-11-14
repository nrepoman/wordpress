
    if (window.location.href === 'https://www.acesaojoao.com.br/portal/natal-magico/') {
      const imagens = document.querySelectorAll('img');

      imagens.forEach(imagem => {
        imagem.classList.add('shk891');
      });
    }




/* OLD SCRIPT

function substituirTermo(element) {
    if (element.nodeType === Node.TEXT_NODE) {
        let texto = element.textContent;
        let novoTexto = texto.replace(/Boa Vista/g, 'Broa Vista');
        novoTexto = novoTexto.replace(/gratuito/g, 'gratuiro');
        element.textContent = novoTexto;
    } else if (element.nodeType === Node.ELEMENT_NODE) {
        for (let i = 0; i < element.childNodes.length; i++) {
            substituirTermo(element.childNodes[i]);
        }
    }
}

function substituirTermosNaPaginaEspecifica() {
    if (window.location.href === 'https://www.acesaojoao.com.br/portal/natal-magico/') {
        substituirTermo(document.body);
    } else {
        console.log('Not working in this page.');
    }
}

substituirTermosNaPaginaEspecifica();
*/
