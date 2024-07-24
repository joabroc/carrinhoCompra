let produtoSelecionado = document.getElementById("produto");
let quantidadeSelecionada = document.getElementById("quantidade");
let listagemCarrinho = document.getElementById("lista-produtos");
let valorTotal = document.getElementById('valor-total');
let valorTotalNumero = 1400;
let valor;

function adicionar() {
    if (quantidadeSelecionada.value == null || quantidadeSelecionada.value == '') {
        alert('Quantidade não informada, favor selecionar a quantidade desejada e tente adicionar novamente ao carrinho.');
    } else {
        let linhaProduto = document.createElement('section');
        listagemCarrinho.appendChild(linhaProduto);
        let quantidadeListado = document.createElement("span");
        linhaProduto.appendChild(quantidadeListado);
        let produtoListado = document.createElement("span");
        linhaProduto.appendChild(produtoListado);
        let valorListado = document.createElement("span");
        linhaProduto.appendChild(valorListado);
        linhaProduto.classList.add('carrinho__produtos__produto');
        quantidadeListado.classList.add("texto-azul");
        valorListado.classList.add("texto-azul");
        if (produtoSelecionado.value == 'Fone de ouvido - R$100') {
            produtoListado.textContent = " Fone de ouvido  ";
            valor = quantidadeSelecionada.value * 100;
            valorListado.textContent = `R$${valor}`;
        } else if (produtoSelecionado.value == 'Celular - R$1400') {
            produtoListado.textContent = " Celular  ";
            valor = quantidadeSelecionada.value * 1400;
            valorListado.textContent = `R$${valor}`;
        }  else if  (produtoSelecionado.value == 'Oculus VR - R$5000') {
            produtoListado.textContent = " Oculus VR  ";
            valor = quantidadeSelecionada.value * 5000;
            valorListado.textContent = `R$${valor}`;
        }
        quantidadeListado.textContent =  `${quantidadeSelecionada.value}x`;
        valorTotalNumero = valorTotalNumero + valor;
        valorTotal.textContent = `R$${valorTotalNumero}`;
    }
}

function limpar() {
    valorTotalNumero = 0;
    while (listagemCarrinho.firstChild) {
        listagemCarrinho.removeChild(listagemCarrinho.firstChild);
    }
    valorTotal.textContent = `R$${valorTotalNumero}`;
}