<template>
	<div class="product-container">	
		<div class="product-box" v-for="c in items">
				<div class="product-box-item" v-for="product in c">
					<div>
						<img :src="product.url" width=100%>
					</div>
					<div>
						<h4>{{product.name}}</h4>
					</div>
					<div>
						<p>{{product.location}}</p>
						<p>Expiry Date: {{product.to}}</p>
					</div>
					<div>
						<span style="color: red; font-weight: bold; margin:5px">{{product.price}}</span>
					</div>
					<div>
						<el-button class="button" type="success" round>Buy</el-button>
					</div>
				</div>
		</div>
	</div>
</template>

<script>

	const urls = [
		"https://image.flaticon.com/icons/svg/215/215107.svg",
		"https://image.flaticon.com/icons/svg/203/203347.svg",
		"https://image.flaticon.com/icons/svg/479/479720.svg",
		"https://image.flaticon.com/icons/svg/684/684631.svg",
		"https://image.flaticon.com/icons/svg/449/449374.svg",
		"https://image.flaticon.com/icons/svg/971/971677.svg",
		"https://image.flaticon.com/icons/svg/878/878098.svg",
		"https://upload.wikimedia.org/wikipedia/commons/0/09/Spam_can.png",
		"https://image.flaticon.com/icons/svg/385/385108.svg",
		"https://image.flaticon.com/icons/svg/923/923189.svg",
		"https://image.flaticon.com/icons/svg/362/362281.svg",
		"https://image.flaticon.com/icons/svg/305/305385.svg",
		"https://cdn.yamibuy.net/item/5183762b1f0b6b7678c3a1ff0c6728dd_500x500.webp"
	]

	const freezer = [
		{ url: urls[0], name: 'Frozen Chicken Fillet', location: 'Lai Chi Kok', price: "$20", from: '8/7/2018', to: '10/7/2018',  },
		{ url: urls[1], name: 'Nestle Chocolate ice cream', location: 'Lai Chi Kok', price: "$10", from: '19/7/2018', to: '23/7/2018' },
	]
	const f = [
		{ url: urls[2], name: 'Red Bean Ice Lolly', location: 'Lai Chi Kok', price: "$30", from: '26/7/2018', to: '30/7/2018'},
		{ url: urls[3], name: 'Low Fat Milk', location: 'Lai Chi Kok', price: "$12", from: '8/7/2018', to: '10/7/2018'},
	]
	const beverage = [
		{ url: urls[5], name: 'Nestle Coffee 250mL', location: 'Lai Chi Kok', price: "$17", from: '20/7/2018', to: '23/7/2018'},
		{ url: urls[6], name: 'Miko Coconot Water 380mL', location: 'Lai Chi Kok', price: "$19.9", from: '20/7/2018', to: '24/7/2018'},
	]
	const canned = [
		{ url: urls[8], name: 'Pork Luncheon Meat 200g', location: 'Lai Chi Kok', price: "$10", from: '8/12/2018', to: '10/12/2018'},
		{ url: urls[9], name: 'Tuna Fish', location: 'Lai Chi Kok', price: "$7.5", from: '24/12/2018', to: '12/1/2019' },
	]
	const snacks = [
		{ url: urls[11], name: 'Calbee Potato Chips (Pizza)', location: 'Lai Chi Kok', price: "$8.7", from: '15/9/2018', to: '20/9/2018' },
		{ url: urls[12], name: 'EDO Choco Pie (10pcs)', location: 'Lai Chi Kok', price: "$10.3", from: '8/10/2018', to: '20/10/2018'},
	]
	const g = [
		{ url: urls[7], name: 'Vita Soya Milk (6pcs)', location: 'Lai Chi Kok', price: "$19", from: '28/7/2018', to: '31/7/2018'},
		{ url: urls[10], name: 'Salted Peanuts 100g', location: 'Lai Chi Kok', price: "$21.2", from: '8/9/2018', to: '15/9/2018'},
	]
	const items = [freezer, f, beverage,canned,snacks, g]

	export default {
		name: "Product",
		data() {
			return {
				items: items
			}
		}
	}
	
</script>

<style scoped>
	.product-box {
		padding: 5px;
		background-color: #fff;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
	}
	.product-box {
		border: 1px solid #eee;
		padding: 30px;
	}
	.button {
		width: 80%;
	    height: 85px;
	    font-size: 50px;
	}
	.product-container {
		background-color: #fff;
		height: 100%;
		width:100%;
		padding-bottom: 10vh
	}
	.product-box-item {
		padding: 5vh;
		width: 40%;
		border: 1px solid #eee;
		border-radius: 5px;
		margin: 10px;
		display: flex;
		flex-direction: column;
	    justify-content: space-between;
	}

</style>