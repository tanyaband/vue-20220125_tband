import { createApp } from './vendor/vue.esm-browser.js';

const app = createApp({
  data() {
    return {
      firstvalue: null,
      secondvalue: null,
      operation: null,
    };
  },

  computed: {
    result() {
      if (this.firstvalue == null || this.firstvalue === '' || this.secondvalue == null || this.secondvalue === '') {
        return null;
      }
      switch (this.operation) {
        case 'sum':
          return this.firstvalue + this.secondvalue;
        case 'subtract':
          return this.firstvalue - this.secondvalue;
        case 'multiply':
          return this.firstvalue * this.secondvalue;
        case 'divide':
          return this.firstvalue / this.secondvalue;
        default:
          return null;
      }
    },
  },
});

app.mount('#app');
