<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col">
        <h1 class="title mt-2">iToons</h1>
      </div>
    </div>
    <results></results>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Results from '@/components/Results.vue'

  export default {
    name: 'home',
    components: {
      Results
    }

  }
</script>

<style>
  .title {
    font-family: 'Indie Flower', cursive;
  }
</style>