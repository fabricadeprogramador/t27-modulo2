var app = new Vue({
  el: "#app",
  data: {
    convidados: [],
    convidadoAtual: {}
  },
  methods: {
    adicionarConvidado() {
      let convidadoCopia = {};
      convidadoCopia.nome = this.convidadoAtual.nome;
      convidadoCopia.idade = this.convidadoAtual.idade;
      this.convidados.push(convidadoCopia);
      this.limpar();
    },

    limpar() {
      this.convidadoAtual.nome = "";
      this.convidadoAtual.idade = "";
    }
  }
});
