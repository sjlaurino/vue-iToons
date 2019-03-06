<template>
  <div class="results">
    <div class="row">
      <div class="col">
        <form @submit.prevent="search" class="form-group">
          <input type="text" placeholder="Artist Name" v-model="query" required>
          <button class="btn btn-primary ml-2" type="submit">Search</button>
        </form>
      </div>
    </div>
    <div class="row">
      <div class="col d-flex justify-content-center">
        <div :key="song" v-for="(song,index) in results">
          <div v-if="index == activeIndex" class="card">
            <img :src="song.artworkUrl100" class="card-img-top" alt="...">
            <div class="row">
              <div class="col d-flex justify-content-between">
                <i v-if="activeIndex" class="fas fa-arrow-circle-left ml-1 mt-1" @click="previous"></i>
                <i class="fas fa-arrow-circle-right right mr-1 mt-1" @click="next"></i>
              </div>
            </div>
            <div class="card-body">
              <h5 class="card-title">{{song.trackName}}</h5>
              <p class="card-text">{{song.artistName}}</p>
              <audio id="preview" class="audio" controls>
                <source :src="song.previewUrl">
              </audio>
              <div class="row">
                <div class="col">
                  <a
                    :href="song.trackViewUrl"
                    target="_blank"
                    class="btn btn-primary price mb-1"
                  >${{song.trackPrice || "Free"}}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "results",
  props: {
    msg: String
  },
  data() {
    return {
      query: "",
      activeIndex: 0
    };
  },
  computed: {
    results() {
      return this.$store.state.results;
      query = "";
    }
  },
  methods: {
    search() {
      this.$store.dispatch("getMusicByArtist", this.query);
    },
    next() {
      this.activeIndex++;
    },
    previous() {
      this.activeIndex--;
    }
  },
  watch: {
    activeIndex: {
      handler: (val, oldVal) => {
        document.getElementById("preview").load();
        // document.getElementById('preview').play()
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.results {
  background-image: url("../assets/macbook.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: 30px;
  height: 85vh;
}

.card {
  max-width: 300px;
  max-height: 450px;
}

.fas {
  cursor: pointer;
  max-width: 100%;
  display: inline-block;
}

.audio {
  height: 20px;
  width: 200px;
  cursor: pointer;
}

.right {
  margin-left: auto;
}

.card-title {
  max-width: 295px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card-text {
  max-width: 295px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card-img-top {
  min-width: 300px;
  max-height: 300px;
}

.price {
  height: 25px;
  font-size: 12px;
}
</style>

