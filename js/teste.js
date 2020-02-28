//Função para evitar comportamento padra do submit
var botao = document.getElementById('add')

botao.addEventListener('click', function(event){
	event.preventDefault()
})

//Recuperação de valores do DOM
var tempo_entrada = document.getElementById('tempo')
var exercicio_entrada = document.getElementById('opcoes')
var data_entrada = document.getElementById('data')


//Função que cria e adiciona os valores na lista do DOM
var criarValores = () => {
	var tempo_span = document.createElement('span')
	tempo_span.className = 'horas'
	var tipo_span = document.createElement('span')
	var data_span = document.createElement('span')
	var excluir_div = document.createElement('span')

	tempo_span.textContent = tempo_entrada.value + 'h'
	tipo_span.textContent = exercicio_entrada.value
	data_span.textContent = data_entrada.value

	excluir_div.className = 'fa fa-trash'
	excluir_div.id = 'span_exculir'
	excluir_div.style.float = 'right'
	excluir_div.style.cursor = 'pointer'

	var item_div = document.createElement('div')
	item_div.className = 'lista_itens'

	item_div.appendChild(tempo_span)
	item_div.appendChild(tipo_span)
	item_div.appendChild(data_span)
	data_span.appendChild(excluir_div)
	

	var lista = document.getElementById('box_lista')
	lista.appendChild(item_div)

	item_div.appendChild(tempo_span)
	item_div.appendChild(tipo_span)
	item_div.appendChild(data_span)


	excluir_div.onclick = () => { //função que exclui elemento 
		lista.removeChild(item_div)
	}

	var calcularHoras = () => {
		console.log(tempo_span)
	}

	calcularHoras()
}


//Bloco de códigos para conferir os valores
var conferirValores = () => {
	var indicador = 0 //Indica se há erro no preenchimento dos campos

	if(tempo_entrada.value == '' || exercicio_entrada.value == '' || data_entrada.value == ''){
		indicador = 1
		avisoErroSuceso(indicador)
	}

	else{
		avisoErroSuceso(indicador)
		criarValores()
		limparCampos()
	}
}

//Função que manipula a caixa de aviso baseado nos valores
var avisoErroSuceso = (indicador) => {
	var alerta = document.getElementById('aviso')
	var alerta_txt = document.getElementById('aviso_txt')

	if(indicador == 1){
		alerta.style.opacity = '1'
		alerta_txt.style.background = 'rgba(255,0,0, 0.6)'
		alerta_txt.textContent = 'Todos os campos devem ser preenchidos'
		setTimeout(function(){
			alerta.style.opacity = '0'
		}, 3000)
	}
	else{
		alerta.style.opacity = '1'
		alerta_txt.style.background = 'rgba(0,128,0, 0.6)'
		alerta_txt.textContent = 'Item Adionado com sucesso'
		setTimeout(function(){
			alerta.style.opacity = '0'
		}, 2000)
	}
}

//Função que limpa valores dos inputs
var limparCampos = () => {
	tempo_entrada.value = ''
	exercicio_entrada.value = ''
	data_entrada.value = ''
}
