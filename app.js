const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  computed: {
    result() {
      if (this.counter < 37) {
        return "Not there yet";
      } else if (this.counter === 37) {
        return this.counter;
      } else {
        return "Too much!";
      }
    },
  },

  methods: {
    add(num) {
      this.counter += num;
      console.log(this.counter);
    },
  },

  watch: {
    result() {
      console.log("watcher executing");
      setTimeout(() => {
        console.log("reset counter");
        this.counter = 0;
      }, 5000);
    },
  },
});

app.mount("#assignment");
