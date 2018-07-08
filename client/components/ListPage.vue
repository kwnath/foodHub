<template>
  <div class="demo">
    <div class="loading" v-if="loading()">
<svg class="lds-pinkpig" width="50%"  height="50%"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" style="background: none;">
      <g transform="rotate(125.497 50 50)">
        <animateTransform attributeName="transform" type="rotate" values="360 50 50;0 50 50" keyTimes="0;1" dur="1.5s" repeatCount="indefinite" calcMode="spline" keySplines="0.5 0 0.5 1" begin="-0.15000000000000002s"></animateTransform>
        <circle cx="50" cy="50" r="39.891" stroke="#fac8dd" stroke-width="14.4" fill="none" stroke-dasharray="0 300">
          <animate attributeName="stroke-dasharray" values="15 300;55.1413599195142 300;15 300" keyTimes="0;0.5;1" dur="1.5s" repeatCount="indefinite" calcMode="linear" keySplines="0 0.4 0.6 1;0.4 0 1 0.6" begin="-0.069s"></animate>
        </circle>
        <circle cx="50" cy="50" r="39.891" stroke="#ffffff" stroke-width="7.2" fill="none" stroke-dasharray="0 300">
          <animate attributeName="stroke-dasharray" values="15 300;55.1413599195142 300;15 300" keyTimes="0;0.5;1" dur="1.5s" repeatCount="indefinite" calcMode="linear" keySplines="0 0.4 0.6 1;0.4 0 1 0.6" begin="-0.069s"></animate>
        </circle>
        <circle cx="50" cy="50" r="32.771" stroke="#000000" stroke-width="1" fill="none" stroke-dasharray="0 300">
          <animate attributeName="stroke-dasharray" values="15 300;45.299378454348094 300;15 300" keyTimes="0;0.5;1" dur="1.5s" repeatCount="indefinite" calcMode="linear" keySplines="0 0.4 0.6 1;0.4 0 1 0.6" begin="-0.069s"></animate>
        </circle>
        <circle cx="50" cy="50" r="47.171" stroke="#000000" stroke-width="1" fill="none" stroke-dasharray="0 300">
          <animate attributeName="stroke-dasharray" values="15 300;66.03388996804073 300;15 300" keyTimes="0;0.5;1" dur="1.5s" repeatCount="indefinite" calcMode="linear" keySplines="0 0.4 0.6 1;0.4 0 1 0.6" begin="-0.069s"></animate>
        </circle>
      </g>
      <g transform="rotate(196.031 50 50)">
        <animateTransform attributeName="transform" type="rotate" values="360 50 50;0 50 50" keyTimes="0;1" dur="1.5s" repeatCount="indefinite" calcMode="spline" keySplines="0.5 0 0.5 1"></animateTransform>

	<path fill="#fac8dd" stroke="#000000" d="M97.2,50c0,6.2-1.2,12.3-3.6,18l-13.3-5.5c1.6-4,2.5-8.2,2.5-12.5"></path>
	<path fill="#ffffff" d="M93.6,50c0,1.2,0,2.4-0.1,3.7L93,57.3c-0.4,2.1-2.3,3.3-4.2,2.8L88.6,60c-1.9-0.5-3-2.3-2.7-3.9l0.4-3 c0.1-1,0.1-2,0.1-3.1" transform="translate(0,-0.2)"></path>
	<path fill="none" stroke="#000000" d="M87.1,65.4c-0.1,0.3-0.2,0.9-0.4,1.2c-0.2,0.2-0.5,0.4-0.8,0.3c-0.1,0-0.3-0.1-0.4-0.2 c-0.1-0.2-0.1-0.4,0.1-0.6c0.2-0.2,0.4-0.3,0.6-0.2c0.1,0.1,0.2,0.2,0.3,0.3c0.2,0.3,0.3,0.8,0.1,1.2c-0.1,0.4-0.5,0.7-0.9,0.8"></path>
	<path fill="#fac8dd" stroke="#000000" d="M85.4,62.7c-0.2,0.7-0.5,1.4-0.8,2.1c-0.3,0.7-0.6,1.4-0.9,2c-0.3,0.5-1,1.2-1.5,1.3c-1.1,0.2-0.7-0.8-1.3-1.1 h0c-0.6-0.3-1.2,0.4-1.6-0.6c-0.2-0.5-0.1-1.3,0.2-1.8c0.3-0.6,0.5-1.2,0.8-1.8c0.2-0.6,0.6-1.2,0.7-1.8"></path>
	<path fill="#fac8dd" stroke="#000000" d="M94.4,65.9c-0.3,0.9-0.7,1.7-1,2.6c-0.4,0.9-0.7,1.7-1.1,2.6c-0.4,0.7-1.1,1.5-1.8,1.7 c-1.2,0.4-0.7-0.9-1.3-1.2v0c-0.6-0.3-1.4,0.7-1.7-0.5c-0.2-0.6,0.1-1.6,0.4-2.2c0.4-0.8,0.7-1.5,1-2.3c0.3-0.8,0.7-1.5,0.9-2.3"></path>


      </g>
      <g transform="rotate(125.497 50 50)">
        <animateTransform attributeName="transform" type="rotate" values="360 50 50;0 50 50" keyTimes="0;1" dur="1.5s" repeatCount="indefinite" calcMode="spline" keySplines="0.5 0 0.5 1" begin="-0.15000000000000002s"></animateTransform>

	<path fill="#ffffff" stroke="#000000" d="M88.9,30.8c0-0.5-0.2-1-0.2-1.5c0-0.5,0.2-1.1,0.6-1.3c0.4-0.2,0.8-0.1,1.2,0c0.6,0.2,1.2,0.5,1.8,0.9 c0.1,0.1,0.2,0.2,0.3,0.3c0.1,0.2,0,0.3,0,0.5c-0.1,0.5-0.2,1-0.3,1.5c-0.1,0.5-0.1,1-0.1,1.5C91.1,31.9,90,31.4,88.9,30.8z"></path>
	<path fill="#ffffff" stroke="#000000" d="M82.8,33.8c-0.4-0.3-0.7-0.6-1-0.8c-0.4-0.2-0.9-0.3-1.3-0.1c-0.4,0.2-0.6,0.6-0.7,0.9 c-0.2,0.5-0.4,1.1-0.5,1.6c0,0.1,0,0.2,0,0.3c0.1,0.1,0.2,0.1,0.4,0.2c0.4,0.1,0.8,0.2,1.2,0.4c0.4,0.2,0.7,0.4,1,0.6 C82.2,35.9,82.5,34.9,82.8,33.8z"></path>
	<path fill="#fac8dd" stroke="#000000" transform="translate(0,0.3)" d="M97.2,50c0-4.9-0.8-9.8-2.3-14.5c-0.4-1.1-1-2.1-1.8-3c-0.4-0.4-0.8-0.8-1.2-1.1c-0.4-0.3-0.9-0.5-1.4-0.7 c-1.1-0.4-2.3-0.5-3.4-0.3c-0.6,0.1-1.3,0.3-1.8,0.7c-0.6,0.3-1.1,0.7-1.6,1.1c-0.9,0.8-1.5,1.7-2,2.7c-0.2,0.4-0.3,0.8-0.4,1.2 c-0.1,0.4-0.2,0.8-0.3,1.3c-0.1,0.8,0,1.7,0.3,2.4c1,3.3,1.5,6.6,1.6,10"></path>
	<path fill="#ffffff" transform="translate(0,0.3)" d="M86.4,50c0-0.6,0-1.3-0.1-1.9l-0.1-1.9c0-0.4,0-0.8,0.1-1.2c0.1-0.4,0.3-0.8,0.6-1.1c0.5-0.7,1.3-1.2,2.3-1.4 l0.3,0c0.9-0.2,1.9,0,2.6,0.6c0.4,0.3,0.7,0.6,0.9,1c0.3,0.4,0.4,0.9,0.4,1.4l0.2,2.2c0.1,0.7,0.1,1.5,0.1,2.3"></path>
	<path fill="#fac8dd" stroke="#000000" d="M86.8,42.2l0.4,2.2l0.2,1.1l0.1,1.1c0,0.6-0.2,1.5-0.6,1.9c-0.8,0.8-1.1-0.3-1.7-0.2c-0.7,0-0.8,1-1.7,0.4 c-0.5-0.3-0.8-1.1-0.8-1.6l-0.1-1l-0.2-1l-0.3-1.9"></path>
	<path fill="#fac8dd" stroke="#000000" d="M96.2,40.2l0.5,2.8l0.2,1.4l0.1,1.4c0.1,0.8-0.1,1.9-0.5,2.4c-0.8,1-1.1-0.4-1.7-0.3h0c-0.7,0-0.8,1.3-1.7,0.5 c-0.5-0.4-0.8-1.4-0.9-2.1l-0.1-1.3l-0.2-1.2l-0.4-2.5"></path>
	<path fill="#dbc08e" stroke="#000000" d="M89.7,36.7c0.3,0.8-0.4,1.8-1.4,2.1c-1,0.3-2-0.1-2.2-0.9c-0.3-0.7,0.3-1.6,1.2-2 C88.4,35.5,89.4,35.9,89.7,36.7z"></path>
	<line stroke="#000000" x1="87.5" y1="37.3" x2="87.6" y2="37.6"></line>
	<line stroke="#000000" x1="88.4" y1="37" x2="88.5" y2="37.3"></line>
	<path fill="#ff7bac" d="M92.4,33.9c0.1,0.3-0.3,0.8-0.9,1c-0.6,0.2-1.2,0.1-1.4-0.2c-0.1-0.3,0.3-0.8,0.9-1 C91.6,33.4,92.3,33.5,92.4,33.9z"></path>
	<path fill="#ff7bac" d="M82.3,37.7c0.1,0.3,0.7,0.3,1.3,0.1c0.6-0.2,1-0.6,0.9-0.9c-0.1-0.3-0.7-0.3-1.3-0.1 C82.6,37,82.2,37.4,82.3,37.7z"></path>
	<path fill="#000000" d="M84.9,35.6c0.2,0.5-0.1,1-0.6,1.2c-0.5,0.2-1,0-1.2-0.5c-0.2-0.4,0.1-1,0.6-1.2C84.2,35,84.7,35.2,84.9,35.6z"></path>
	<path fill="#000000" d="M90.7,33.2c0.2,0.5,0,1.1-0.5,1.3c-0.5,0.2-1.1-0.1-1.3-0.6c-0.2-0.5,0-1.1,0.5-1.3C89.9,32.4,90.5,32.7,90.7,33.2z"></path>

      </g></svg>
    </div>
    <el-tabs type="border-card" v-if="!loading()">
      <el-tab-pane>
        <span slot="label"><i class="el-icon-date"></i> Freezer</span>
        <div class="item" v-for="item in freezer" style="display: flex; flex-direction: row; justify-content: space-between">
          <div class="p-image">
            <img :src="item.url" width=250px>
          </div>
          <div class="p-desc" style="    display: flex; flex-direction: column; justify-content: space-around">
            <div class="p-name">
              {{item.name}}
            </div>
            <div class="p-date">
               use by: {{item.from}} - {{item.to}}
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane>
        <span slot="label"><i class="el-icon-date"></i> Beverage</span>
        <div class="item" v-for="item in beverage" style="display: flex; flex-direction: row; justify-content: space-between">
          <div class="p-image">
            <img :src="item.url" width=250px>
          </div>
          <div class="p-desc" style="    display: flex; flex-direction: column; justify-content: space-around">
            <div class="p-name">
              {{item.name}}
            </div>
            <div class="p-date">
               use by: {{item.from}} - {{item.to}}
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane>
        <span slot="label"><i class="el-icon-date"></i> Canned and Dried Food</span>
        <div class="item" v-for="item in canned" style="display: flex; flex-direction: row; justify-content: space-between">
          <div class="p-image">
            <img :src="item.url" width=250px>
          </div>
          <div class="p-desc" style="    display: flex; flex-direction: column; justify-content: space-around">
            <div class="p-name">
              {{item.name}}
            </div>
            <div class="p-date">
               use by: {{item.from}} - {{item.to}}
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane>
        <span slot="label"><i class="el-icon-date"></i> Snacks</span>
        <div class="item" v-for="item in snacks" style="display: flex; flex-direction: row; justify-content: space-between">
          <div class="p-image">
            <img :src="item.url" width=250px>
          </div>
          <div class="p-desc" style="    display: flex; flex-direction: column; justify-content: space-around">
            <div class="p-name">
              {{item.name}}
            </div>
            <div class="p-date">
               use by: {{item.from}} - {{item.to}}
            </div>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  // Data with a type field
  const urls = ["https://image.flaticon.com/icons/svg/215/215107.svg",
  "https://image.flaticon.com/icons/svg/203/203347.svg",
  "https://image.flaticon.com/icons/svg/479/479720.svg",
  "https://image.flaticon.com/icons/svg/684/684631.svg",
  "https://image.flaticon.com/icons/svg/449/449374.svg",
  "https://image.flaticon.com/icons/svg/971/971677.svg",
  "https://image.flaticon.com/icons/svg/878/878098.svg",
  "http://www.freshoriental.co.uk/images/products/related/vita-soya-milk-original-1l-%E7%B6%AD%E4%BB%96-%E8%B1%86%E5%A5%B6-p10654-3157_related.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/0/09/Spam_can.png",
  "https://image.flaticon.com/icons/svg/385/385108.svg",
  "https://image.flaticon.com/icons/svg/362/362281.svg",
  "https://image.flaticon.com/icons/svg/305/305385.svg",
  "https://cdn.yamibuy.net/item/5183762b1f0b6b7678c3a1ff0c6728dd_500x500.webp",
  "https://image.flaticon.com/icons/svg/135/135658.svg"
  ]
  const freezer = [
    { url: require("../assets/banana.png"), name: 'Banana (5pcs)', from: '8/7/2018', to: '9/7/2018'},
    { url: urls[0], name: 'Frozen Chicken Fillet', from: '8/7/2018', to: '10/7/2018'},
    { url: require("../assets/yogurt.png"), name: 'Kowloon Diary Yogurt 100g', from: '13/7/2018', to: '15/7/2018'},
    { url: require("../assets/watermelon.jpg"), name: 'Watermelon', from: '19/7/2018', to: '21/7/2018'},
    { url: urls[1], name: 'Nestle Chocolate ice cream', from: '19/7/2018', to: '23/7/2018' },
    { url: urls[2], name: 'Red Bean Ice Lolly', from: '26/7/2018', to: '30/7/2018'},
    { url: urls[13], name: 'Oriental style noodle 100g', from: '24/8/2018', to: '30/8/2018'}
  ]
  const beverage = [
    { url: urls[3], name: 'Low Fat Milk', from: '8/7/2018', to: '10/7/2018'},
    { url: urls[4], name: 'Minute Maid Orange Juice 500mL', from: '15/7/2018', to: '16/7/2018' },
    { url: urls[5], name: 'Nestle Coffee 250mL', from: '20/7/2018', to: '23/7/2018'},
    { url: urls[6], name: 'Miko Coconot Water 380mL', from: '20/7/2018', to: '24/7/2018'},
    { url: urls[7], name: 'Vita Soya Milk (6pcs)', from: '28/7/2018', to: '31/7/2018'}
  ]
  const canned = [
    { url: urls[8], name: 'Pork Luncheon Meat 200g', from: '8/12/2018', to: '10/12/2018'},
    { url: urls[9], name: 'Tuna Fish', from: '24/12/2018', to: '12/1/2019'}
  ]
  const snacks = [
    { url: urls[10], name: 'Salted Peanuts 100g', from: '8/9/2018', to: '15/9/2018'},
    { url: urls[11], name: 'Calbee Potato Chips (Pizza)', from: '15/9/2018', to: '20/9/2018'},
    { url: urls[12], name: 'EDO Choco Pie (10pcs)', from: '8/10/2018', to: '20/10/2018'},
    { url: require("../assets/cookies.jpg"), name: 'Famous Amos Cookies (10pcs)', from: '10/12/2018', to: '14/12/2018'}
  ]
  const items = [freezer,beverage,canned,snacks]
  const containers = ["freezer","beverage","canned and dried food","snacks"]

  export default {
    data(){
      return{
        items, freezer, beverage, canned, snacks
      }
    },
    methods: {
      loading() {
          return this.$store.state.loading
      }
    },
    mounted() {
      setTimeout(() => {
          this.$store.state.loading = false
      }, 5000);
    }
  }
</script>

<style>

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

  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  </style>
