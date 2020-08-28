<template>
  <panZoom :options="{ minZoom: 0.5, maxZoom: 5 }">
    <img :src="image.full_picture" />
  </panZoom>
</template>

<script>
import { getResource } from "@/utils/apiConsumer";

export default {
  name: "ImageViewer",
  data: () => ({
    image: {}
  }),
  async mounted() {
    const data = await getResource(`images/${this.$route.params.imageId}`);
    this.image = data;
  }
};
</script>
