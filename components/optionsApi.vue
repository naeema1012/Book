<template lang="">
  <div>
    {{ title }}
  </div>
  <h3>{{ hello() }}</h3>
</template>
<script>
export default {
  data() {
    return {
      title: "option api",
    };
  },
  methods: {
    hello() {
      return "Hello from options api!";
    },
  },
  mounted() {
    setTimeout(() => {
      this.title = "Options api";
    }, 1000);
  },
};
</script>
<style lang=""></style>
