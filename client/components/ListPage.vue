<template>
  <div class="demo">
    <el-tabs type="border-card">
      <el-tab-pane>
        <span slot="label" style="font-size: 25px;"><i class="el-icon-date"></i> Freezere</span>
        <div class="item" v-for="item in freezer" style="display: flex; flex-direction: row; justify-content: flex-start;     ">
          <div class="p-image">
            <img :src="item.url" width=250px>
          </div>
          <div class="p-desc" style="    text-align: left;    display: flex; flex-direction: column; justify-content: space-around; width: 450px">
            <div class="p-name">
              {{item.name}}
            </div>
            <div class="p-date">
               Expiry Date: <span style="color: red; font-weight: bold">{{item.to}}</span>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane>
        <span slot="label" style="font-size: 25px;"><i class="el-icon-date"></i> Beverage</span>
        <div class="item" v-for="item in beverage" style="display: flex; flex-direction: row; justify-content: flex-start;     ">
          <div class="p-image">
            <img :src="item.url" width=250px>
          </div>
          <div class="p-desc" style="    text-align: left;    display: flex; flex-direction: column; justify-content: space-around; width: 450px">
            <div class="p-name">
              {{item.name}}
            </div>
            <div class="p-date">
               Expiry Date: <span style="color: red; font-weight: bold">{{item.to}}</span>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane>
        <span slot="label" style="font-size: 25px;"><i class="el-icon-date"></i> Canned and Dried Food</span>
        <div class="item" v-for="item in canned" style="display: flex; flex-direction: row; justify-content: flex-start;     ">
          <div class="p-image">
            <img :src="item.url" width=250px>
          </div>
          <div class="p-desc" style="    text-align: left;    display: flex; flex-direction: column; justify-content: space-around; width: 450px">
            <div class="p-name">
              {{item.name}}
            </div>
            <div class="p-date">
               Expiry Date: <span style="color: red; font-weight: bold">{{item.to}}</span>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane>
        <span slot="label" style="font-size: 25px;"><i class="el-icon-date"></i> Snacks</span>
        <div class="item" v-for="item in snacks" style="display: flex; flex-direction: row; justify-content: flex-start;     ">
          <div class="p-image">
            <img :src="item.url" width=250px>
          </div>
          <div class="p-desc" style="    text-align: left;    display: flex; flex-direction: column; justify-content: space-around; width: 450px">
            <div class="p-name">
              {{item.name}}
            </div>
            <div class="p-date">
               Expiry Date: <span style="color: red; font-weight: bold">{{item.to}}</span>
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
    }
  }
</script>

<style scoped>

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

  .el-tabs__item {
    font-size: 25px;
  }

  .p-image {
    flex: 1;
    /*border: 1px solid #000;*/
  }

  .p-desc {
    margin-left: 10px;
  }

  .p-name {
    font-weight: bold;
    font-size: 50px;
  }

  .item {
    border-bottom: 1px solid #909399;
    padding: 20px;
    margin: 5px;
    height: 300px;
  }
  .demo {
    padding-bottom: 10vh
  }
</style>
