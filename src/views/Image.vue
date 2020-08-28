<template>
  <div id="viewer">
    <panZoom :options="{ minZoom: 0.5, maxZoom: 5 }">
      <img :src="image.full_picture" />
    </panZoom>
    <ImageMetadata :image="image" />
  </div>
</template>

<script>
import { getResource } from "@/utils/apiConsumer";
import ImageMetadata from "@/components/ImageMetadata";

export default {
  name: "ImageViewer",
  data: () => ({
    image: {}
  }),
  components: {
    ImageMetadata
  },
  async mounted() {
    const data = await getResource(`images/${this.$route.params.imageId}`);
    this.image = data;
    console.log(data)
  }
};
</script>

<style scoped>
#viewer {
  position: relative;
}
</style>
