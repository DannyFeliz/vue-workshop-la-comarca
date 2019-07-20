<template>
  <div>
    <slot />
  </div>
</template>

<script>
import Flickity from "flickity";
import "flickity/dist/flickity.min.css";

export default {
  name: "Carousel",
  props: {
    options: {
      type: Object,
      required: true
    }
  },
  mounted() {
    console.log("Mounted");
    new Flickity(this.$el, this.options);
  }
};
</script>

<style></style>
