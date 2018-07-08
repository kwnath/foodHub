<template>
<div>
    <div v-if="!started">
      <img @click="getStarted" :src="homepage" class="home" alt="">
    </div>
    <div v-if="!view">
      <img :src="receipt" class="home" alt="" @click="clickReceipt()">
      <input accept="image/*" capture="camera" ref="testingImage" type="file" id="image" style="display:none" @change="processFile($event)"/>
    </div>
    <div class="page">
    <div v-if="view">
      <div class="view-wrapper">
      <div v-if="selectedTab()==0">
        <calendar/>
      </div>
      <div v-if="selectedTab()==1">
        <listpage></listpage>
      </div>
      <div v-if="selectedTab()==2">
      </div>
      <div v-if="selectedTab()==3">
        <Product/>
      </div>
      <div v-if="selectedTab()==4">
      </div>
    </div>
    </div>
    <tabbar class="tabbar"></tabbar>
  </div>
</div>
</template>

<script>
import TabBar from 'components/TabBar'
import listpage from 'components/ListPage'
import calendar from 'components/Calendar'
import list from 'components/List'
import Product from 'components/Product'

export default {
  data() {
    return {
      started: false,
      view: false,
      homepage: require("../assets/home.png"),
      receipt: require("../assets/receipt.png")
    }
  },
  components: {
    tabbar: TabBar,
    list: list,
    calendar: calendar,
    list: list,
    Product: Product,
    listpage: listpage
  },
  computed: {
  },
  methods: {
    clickReceipt(){
         this.view = true
         this.started=true
         this.$refs.testingImage.click()
         return
    },
    processFile(event) {
      console.log("hello")
      this.$store.state.selectedTab = 1
      this.$store.state.loading = true
      let that = this
    },
    getStarted() {
      this.started = true
    },
    showView() {
      return this.view = true
    },
    selectedTab() {
      let test = this.$store.state.selectedTab
      return test
    },
    active() {
      let state = this.$store.state
      return state
    }
  }
}
</script>
<style>
.home {
  width: 100vw;
  height: 100vh;
  z-index: 10000;
  position: relative;
  background-color: white;
}
.page {
  height: 100vh;
  width: 100vw;

}
body {
  font-family: 'Avenir';
}
.view-wrapper {
  width: 100vw;
  height: 100%;
  background-color: lightgrey;
}

.tabbar {
  position: fixed;
  bottom: 0;
  /* height: 10vh; */
  background-color: white;
}
</style>
