new Vue({
    el: '#desafio',
    data: {
        valor: '10'
    },
    methods: {
        exibir(event) {
            alert('EXIBINDO ALERTA')
        },
        keydown(event) {
            event.target.value
        }
    }
})