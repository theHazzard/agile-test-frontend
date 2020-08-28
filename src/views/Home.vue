<template>
  <div id="image-gallery">
    <ImageItem v-for="image in images" :key="image.id" :image="image" />
  </div>
</template>

<script>
// @ is an alias to /src
import { getResource } from "@/utils/apiConsumer";
import ImageItem from "@/components/ImageItem";

export default {
  name: "Home",
  data: () => ({
    images: []
  }),
  async mounted() {
    const data = await getResource("images", { page: 1 });
    this.images = data.pictures;
  },
  components: { ImageItem }
};
</script>

<style scoped>
#image-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
}
</style>
