<template>
  <div>
    <carousel :options="carouselOptions">
      <img src="https://placekitten.com/300/220?a=1" />
      <img src="https://placekitten.com/300/250?b=1" />
      <img src="https://placekitten.com/301/200?c=2" />
      <img src="https://placekitten.com/304/200?c=2" />
      <img src="https://placekitten.com/323/200?c=2" />
      <img src="https://placekitten.com/305/200?c=2" />
    </carousel>
  </div>
</template>

<script>
import Carousel from "../components/Carousel.vue";

export default {
  name: "Gallery",
  components: {
    Carousel
  },
  data() {
    return {
      carouselOptions: {
        wrapAround: true,
        autoPlay: true
      }
    };
  },
  created() {
    console.log("Component created");
  }
};
</script>

<style></style>
