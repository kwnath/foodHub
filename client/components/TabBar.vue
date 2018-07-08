<template>
<div>
  <div class="tabbar-wrapper">
  <div v-for="(item, index) in tabbar" class="tab-item" id="tab1" @click="selectTab(index)">
    <!-- <div v-if="index==2" style="height: 100%; width: 100%;" @click="selectTab(index)">
      <div class="icon">
      <img class="sm-icon" :src="item.icon" alt="">
      </div>
      <div :class="active(index)">{{item.name}}</div>
            <input accept="image/*" capture="camera" ref="image" type="file" id="image" style="display:none" @change="processFile($event)"/>
    </div> -->
    <!-- <div v-else> -->
      <input accept="image/*" capture="camera" ref="image" type="file" id="image" style="display:none" @change="processFile($event)"/>
      <div class="icon">
        <img class="sm-icon" :src="item.icon" alt="">
      </div>
      <div :class="active(index)">{{item.name}}</div>
    <!-- </div> -->
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
          name: "Calendar",
          icon: require("../assets/calendar.png")
        },
        {
          name: "My List",
          icon: require("../assets/fridge.png")
        },
        {
          name: "Photo",
          icon: require("../assets/add.png")
        },
        {
          name: "Market Place",
          icon: require("../assets/cart.png")
        },
        {
          name: "Recipes",
          icon: require("../assets/recipes.png")
        }
      ]
    }
  },
  props: ['data'],
  computed: {
  },
  methods: {
      processFile(event) {
        console.log(event)
        this.$store.state.selectedTab = 1
        this.$store.state.loading = true
        let that = this
      },
      selectTab(index) {
        let currentTab = this.$store.state.selectedTab
        let that = this
        console.log(index)
        if(index == 2) {
          return this.$refs.image[0].click()
          // return that.$refs.image.click()
        }
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
        return e
      }
  }
}
</script>

<style>
  .active {
    color: #ED6A5A;
  }
  .tabbar-wrapper {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100vw;
    margin: 30px 0;
  }

  .tab-item {
    font-size: 0.7em;
    width: 100%;
  }

  .sm-icon {
    width: 70px;
    height:auto;
  }
</style>
