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
	var tipo_span = document.createElement('span')
	var data_span = document.createElement('span')
	var excluir_div = document.createElement('span')

	tempo_span_valor = tempo_entrada.value
	tempo_span.textContent = `${tempo_span_valor} h`
	tipo_span.textContent = exercicio_entrada.value
	data_span.textContent = data_entrada.value

	tempo_span.className = 'horas'
	tempo_span.tagName = 'horas'

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

		var quant_horas = parseFloat(tempo_span_valor)//recuper o numero de horas do exercicio
		somar_horas -= quant_horas
		mostra_soma.textContent = `Você já fez ${somar_horas} horas de exercicio`
	}

	
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
		calcularHoras()
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

var somar_horas = 0

var mostra_soma = document.createElement('div')
mostra_soma.id = 'mostra_soma'
mostra_soma.textContent = `Você já fez ${somar_horas} horas de exercicio`

var sec_resultado = document.getElementById('resultado_exercicio')
sec_resultado.appendChild(mostra_soma)

var calcularHoras = () => {
	var quant_horas = parseFloat(tempo_entrada.value)

	somar_horas += quant_horas

	mostra_soma.textContent = `Você já fez ${somar_horas} horas de exercicio`

	var mudar_resultado = document.getElementById('mostra_soma')
}
