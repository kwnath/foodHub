<template>
  <div class="page">
    <div class="view-wrapper">
      {{selectedTab()}}
      <div v-if="selectedTab()==0">
        Calendar page
      </div>
      <div v-if="selectedTab()==1">
        My list page
      </div>
      <div v-if="selectedTab()==2">
        Photo page
      </div>
      <div v-if="selectedTab()==3">
        Market Place page
      </div>
      <div v-if="selectedTab()==4">
        Recipes page
      </div>
    </div>
    <tabbar class="tabbar"></tabbar>
  </div>
</template>

<script>
import TabBar from 'components/TabBar'

export default {
  data() {
    return {
    }
  },
  components: {
    tabbar: TabBar
  },
  computed: {
  },
  methods: {
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
body {
  font-family: 'Avenir';
}
.view-wrapper {
  width: 100vw;
  height: 90vh;
  background-color: lightgrey;
}

.tabbar {
  height: 10vh;
  background-color: white;
}
</style>
