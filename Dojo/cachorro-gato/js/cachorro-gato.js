var app = new Vue({
  el: "#app",

  data() {
    return {
      caminhoImg: "img/cachorro.jpeg"
    };
  },
  methods: {
    trocarGato() {
      this.caminhoImg = "img/gato.jpeg";
    },

    trocarCachorro() {
      this.caminhoImg = "img/cachorro.jpeg";
    }
  }
});
