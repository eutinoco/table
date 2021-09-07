const body = document.querySelector('body')

const header = document.createElement('header')
const h1 = document.createElement('h1')
const p = document.createElement('p')
const p2 = document.createElement('p')
const input1 = document.createElement('input')
const input2 = document.createElement('input')
const botao = document.createElement('button')
const tabela = document.createElement('table')


botao.addEventListener('click', criaTabela)

p.innerText = 'Linhas'
p2.innerText = 'Colunas'
input1.id = 'colunas'
input1.type = 'number'
input2.id = 'linhas'
input2.type = 'number'
tabela.className = 'tabela'
h1.innerText = 'Título'
botao.innerText = 'Clique em mim'

p.appendChild(input1)
p2.appendChild(input2)
header.appendChild(h1)
body.append(header , p , input1 , p2 , input2 , botao , tabela)


function criaTabela() {

    const input1Value = document.querySelector('#colunas')
    const input2Value = document.querySelector("#linhas")


    let contador
    let contador2
    for (contador2 = 1 ; contador2 <= input1Value.value ; contador2++) {
        const linha = document.createElement('tr')
            linha.className = 'linha'
            // linha.appendChild(coluna)
            tabela.appendChild(linha)
            

        for (contador = 1 ; contador <= input2Value.value ; contador++) {
            const coluna = document.createElement('td')
            coluna.className = 'coluna'
            linha.appendChild(coluna)
        }
    }
}