<template>
<div>
  <div class="tabbar-wrapper">
  <div v-for="(item, index) in tabbar" class="tab-item" id="tab1" @click="selectTab(index)">
    <div class="icon">
      <img class="sm-icon" :src="item.icon" alt="">
    </div>
    <div :class="active(index)">{{item.name}}</div>
  </div>
</div>
</div>
</template>

<script>
export default {
  data() {
    return {
      tabbar: [
        {
          name: "Calendar"
          // icon: require("../assets/calendar.png")
        },
        {
          name: "My List"
          // icon: require("../assets/fridge.png")
        },
        {
          name: "Photo"
          // icon: require("../assets/cart.png")
        },
        {
          name: "Market Place"
          // icon: require("../assets/cart.png")
        },
        {
          name: "Recipes"
          // icon: require("../assets/recipes.png")
        }
      ]
    }
  },
  props: ['data'],
  computed: {
  },
  methods: {
      selectTab(index) {
        let currentTab = this.$store.state.selectedTab
        if(currentTab==index) { return }
        else if (currentTab!=index) {
          return this.$store.state.selectedTab = index
        } else {
          return
        }
      },
      active(index) {
      let selectedTab = this.$store.state.selectedTab
      if(index == selectedTab) {
        return 'active'
      } else {
        return ''
      }
    },
    selectedTab(e) {
      console.log(e) 
      return s
    }
  }
}
</script>

<style>
  .active {
    color: #ED6A5A;
  }
  .tabbar-wrapper {
    /* position:fixed; */
    /* bottom: 20px; */
    display: flex;
    justify-content: space-around;
    width: 100vw;
  }

  .tab-item {
    font-size: 1em;
    width: 100%;
    height: 100%;
  }
</style>
