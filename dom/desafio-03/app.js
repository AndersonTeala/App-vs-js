new Vue({
    el: '#desafio',
    data: {
        valor: 0
    },
    methods: {
        resultado() {
            return this.valor == 37 ?
                'Valor igual' : 'Valor diferente'
        }
    },
    watch: {
        valor() {
            setTimeout(() => {
                this.valor = 0
            }, 5000)
        }
    }
});