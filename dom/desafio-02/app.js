new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta() {
            alert('EXIBINDO ALERTA')
        },
        alterarValor(event) {
            this.valor = event.target.value
        }
    }
})