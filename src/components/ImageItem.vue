<template>
  <router-link class="image-item" :to="`/image/${image.id}`">
    <img class="image" v-lazy="image.cropped_picture" alt="" />
  </router-link>
</template>

<script>
export default {
  props: ["image"]
};
</script>

<style>
.image {
  width: 100%;
  cursor: pointer;
  transition: margin, border, transform 0.2s;
}

.image:hover {
  transform: scale(1.05) rotate(1deg);
  border: 0.4em solid whitesmoke;
  margin: -0.4em;
}

.image-item {
  margin: 0.5rem;
}
</style>
