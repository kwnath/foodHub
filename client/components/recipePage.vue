<template>
  <div>
    <img :src="recipe">
  </div>
</template>

<script>
  const recipe = require("../assets/recipe.png")
  export default {
    data(){
      return{
        recipe
      }
    },
    methods: {
      loading() {
          return this.$store.state.loading
      }
    }
  }
</script>

<style scoped>

  .loading {
    position: absolute;
    background-color: rgba(0,0,0,0.1);
    width: 100%;
    height: 90.5%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100000;
  }
  .scroller {
    height: 100%;
  }

  .scroller .item {
    height: 22px;
  }
  img {
    border-bottom: 1px solid #909399;
    padding: 0px;
    margin: 0px;
    height: 1730px;
  }
</style>
