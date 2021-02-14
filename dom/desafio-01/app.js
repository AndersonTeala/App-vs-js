new Vue ({
  el: '#desafio',
  data: {
    nome: 'Anderson',
    idade: 25,
    imagem: 'https://rollingstone.uol.com.br/media/_versions/themandalorian-reprod-disney_widelg.jpg'
  },
  methods: {
    idadeVezes3() {
      return this.idade *3
    },
    random() {
      return Math.random()
    }
    }
})