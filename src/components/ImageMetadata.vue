<template>
  <div id="metadata-overlay">
    <div id="metadata-container">
      <button @click="share" id="sharebutton">
        Share!
      </button>
      <div v-show="image.camera" class="info">
        <i class="fas fa-camera-retro icon"></i>
        <span>{{ image.camera }}</span>
      </div>
      <div v-show="image.author" class="info">
        <i class="fas fa-user icon"></i>
        <span>{{ image.author }}</span>
      </div>
      <div id="tags" class="info">
        <span class="tag" v-for="tag in tags" :key="tag">{{ tag }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["image"],
  computed: {
    tags() {
      return this.$props.image?.tags.split(" ").filter(tag => tag);
    }
  },
  methods: {
    share() {
      const link = `whatsapp://send?text=take a look to this! ${window.location.href}`;
      window.open(link);
      // let url = document.location.href;
      // const canonicalElement = document.querySelector("link[rel=canonical]");
      // if (canonicalElement !== null) {
      //   url = canonicalElement.href;
      // }
      // navigator.share({ url });
    },
  },
  mounted() {
    console.log(this.image);
  }
};
</script>

<style scoped>
#sharebutton {
  background-color: darkcyan;
  border: none;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
  color: whitesmoke;
  font-weight: 600;
  font-size: 16px;
  position: absolute;
  top: 16px;
  right: 16px;
}

#sharebutton:hover {
  background: linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.45)), darkcyan;
}

#metadata-overlay {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  position: absolute;
  display: flex;
  flex-direction: row-reverse;
  pointer-events: none;
}

#metadata-container {
  position: relative;
  margin: auto 32px 32px;
  align-items: center;
  align-items: center;
  pointer-events: all;
  opacity: 0.2;
  width: max-content;
  height: min-content;
  background-color: rgba(0, 0, 0, 1);
  padding: 16px;
  transition: opacity 0.25s ease-out;
}

#metadata-container:hover {
  opacity: 0.8;
}

#tags {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}

.tag {
  padding: 4px 8px;
  margin: 8px;
  background-color: teal;
  border-radius: 8px;
}

.info {
  color: whitesmoke;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  max-width: 400px;
  overflow: hidden;
}

.icon {
  font-size: 30px;
  margin-right: 16px;
  width: 30px;
}
</style>
