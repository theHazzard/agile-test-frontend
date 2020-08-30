<template>
  <div id="wrapper">
    <div id="image-gallery">
      <ImageItem v-for="image in images" :key="image.id" :image="image" />
    </div>
    <SlidingPagination
      :current="page"
      :total="totalPages"
      @page-change="changePage"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import { getResource } from "@/utils/apiConsumer";
import ImageItem from "@/components/ImageItem";
import SlidingPagination from "vue-sliding-pagination";
import cache from "memory-cache";

export default {
  name: "Home",
  data: () => ({
    images: [],
    totalPages: 0,
    page: 1
  }),
  async mounted() {
    const data = await getResource("images", { page: this.page });

    this.totalPages = data.pageCount;
    this.images = data.pictures;
  },
  methods: {
    async changePage(selectedPage) {
      this.page = selectedPage;
      const cacheSelector = `results-page-${this.page}`;
      const results = cache.get(cacheSelector);
      if (results) {
        this.images = results;
      } else {
        const { pictures } = await getResource("images", { page: this.page });
        cache.put(cacheSelector, pictures);
        this.images = pictures;
      }
    }
  },
  components: { ImageItem, SlidingPagination }
};
</script>

<style scoped>
#wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
}

#image-gallery {
  overflow-y: scroll;
  overflow-x: hidden;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  margin-bottom: 16px;
}
</style>
