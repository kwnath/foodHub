<template>
  <div class="page">
    <div class="view-wrapper">
      <div v-if="selectedTab()==0">
        Calendar page
        <calendar/>
      </div>
      <div v-if="selectedTab()==1">
        <list></list>
      </div>
      <div v-if="selectedTab()==2">
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
<<<<<<< HEAD
import List from 'components/List'
=======
import calendar from 'components/Calendar'
import list from 'components/List'
>>>>>>> 7444852bed5bb793dbd2537e5dae90586db32702

export default {
  data() {
    return {
    }
  },
  components: {
    tabbar: TabBar,
<<<<<<< HEAD
    list: List
=======
    calendar: calendar,
    list: list
>>>>>>> 7444852bed5bb793dbd2537e5dae90586db32702
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
