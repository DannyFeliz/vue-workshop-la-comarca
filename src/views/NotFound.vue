<template>
  <div>
    Sorry 404, Page not Found
    <button @click="goHome">Go Home</button>
  </div>
</template>

<script>
export default {
  name: "404",
  methods: {
    goHome() {
      this.$router.replace({ name: "home" });
    }
  }
};
</script>
