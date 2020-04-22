<template>
	<form data-vv-scope="uiFields" novalidate @submit.prevent="submit">
		<client-only>
			<uiFields name="filter" class="filter" component="fieldset" />
			<uiFields name="sort" class="sort" component="fieldset" />
		</client-only>

		<div v-if="filterData.length > 0" class="images">
			<div v-for="(product, index) in filterData" :key="index">
				<img class="image" :src="product.img" alt="" srcset="">
				<span>{{ product.price }}</span>
			</div>
		</div>
		<div v-else class="images">
			<div v-for="(product, index) in allData" :key="index">
				<img class="image" :src="product.img" alt="" srcset="">
				<span>{{ product.price }}</span>
			</div>
		</div>
	</form>
</template>
<script>
export default {
	data() {
		return {
			allData: [
				{
					type: 'chair',
					color: 'yellow',
					price: 25,
					img: '/images/yellow.jpg'
				},
				{
					type: 'chair',
					color: 'blue',
					price: 10,
					img: '/images/blue.jpeg'
				},
				{
					type: 'chair',
					color: 'red',
					price: 20,
					img: 'images/red.jpg'
				},
				{
					type: 'chair',
					color: 'green',
					price: 50,
					img: 'images/green.jpg'
				},
				{
					type: 'chair',
					color: 'yellow',
					price: 5,
					img: '/images/yellow.jpg'
				},
				{
					type: 'chair',
					color: 'blue',
					price: 30,
					img: '/images/blue.jpeg'
				},
				{
					type: 'chair',
					color: 'red',
					price: 85,
					img: 'images/red.jpg'
				},
				{
					type: 'chair',
					color: 'green',
					price: 64,
					img: 'images/green.jpg'
				},
				{
					type: 'chair',
					color: 'yellow',
					price: 10,
					img: '/images/yellow.jpg'
				},
				{
					type: 'chair',
					color: 'blue',
					price: 98,
					img: '/images/blue.jpeg'
				},
				{
					type: 'chair',
					color: 'red',
					price: 100,
					img: 'images/red.jpg'
				},
				{
					type: 'chair',
					color: 'green',
					price: 68,
					img: 'images/green.jpg'
				}
			],
			filterData: [],
			maxPrice: 50
		};
	},
	mounted() {
		this.$uiFields.new('filter'); //only needs name
		this.$uiFields.new('sort'); //only needs name

		this.$uiFields.setFields('filter', [
			{
				name: 'color',
				type: 'checkbox',
				options: [
					{
						name: 'green',
						label: 'Groen',
						value: 'green'
					},
					{
						name: 'red',
						label: 'Rood',
						value: 'red'
					},
					{
						name: 'yellow',
						label: 'Geel',
						value: 'yellow'
					},
					{
						name: 'blue',
						label: 'Blauw',
						value: 'blue'
					}
				]
			},
			{
				name: 'price',
				type: 'range',
				min: 0,
				max: 100,
				value: 50
			}
		]);

		this.$uiFields.setFields('sort', [
			{
				name: 'sort',
				type: 'select',
				label: 'Sorteren op prijs',
				options: [
					{
						name: 'lowtohigh',
						label: 'Laag naar hoog',
						value: 'lowtohigh'
					},
					{
						name: 'hightolow',
						label: 'Hoog naar laag',
						value: 'hightolow'
					},
				]
			},
		]);

		this.$uiFields.subscribeField('filter', 'color', this.colorFilter);
		this.$uiFields.subscribeField('filter', 'price', this.priceFilter);

		this.$uiFields.subscribeField('sort', 'sort', this.sortData);
	},
	destroy() {
		this.$uiFields.unsubscribeField('filter', 'color');
		this.$uiFields.unsubscribeField('filter', 'price');

		this.$uiFields.unsubscribeField('sort', 'sort');
	},
	methods: {
		colorFilter() {
			const colorArr = this.$uiFields.getValue('filter','color');
			const data = this.filterData.length > 0 ? this.filterData : this.allData;

			const newData = this.allData.filter(res => {
				if(colorArr.includes(res.color)) {
					return res;
				}
			});
			this.filterData = newData;
		},
		priceFilter() {
			const price = this.$uiFields.getValue('filter','price') ? this.$uiFields.getValue('filter','price') : this.maxPrice;

			const newData = this.filterData.filter(res => {
				if(res.price < price) {
					return res;
				}
			});
			this.maxPrice = price;
			this.filterData = newData;
		},
		async sortData() {
			const selectedValue = this.$uiFields.getValue('sort','sort');
			const data = this.filterData.length > 0 ? this.filterData : this.allData;

			if(selectedValue == 'lowtohigh') {
				await data.sort(function (a, b) {
					return a.price - b.price;
				});
			} else {
				await data.sort(function (a, b) {
					return b.price - a.price;
				});
			}

		}
	}
};
</script>
<style lang="scss">
@import '~tools';

* {
	box-sizing: border-box;
}
body {
	font-family: sans-serif;
}
.checkout {
	border: none;
}

.ui-fields {
	&__field {
		position: relative;
		margin-top: 2.5rem;
	}
	&__element {
		// position: absolute;
		// top: 1rem;
		// left: 1rem;
	}

	&__input {
		width: 100%;
		padding: 1rem 0 1rem 40%;
		border: 2px solid black;
	}

	&__error-message {
		right: 0;
		bottom: -2rem;
		color: #f05123;
		font-size: .875rem;
		width: 100%;
	}

}
.text {
	&__label {
		&--required {
			color: orange;
		}
	}
}

.select {
	&__input {
		width: 100%;
		padding: 1rem;
		padding: 1rem 0 1rem 40%;
		border: 2px solid black;
	}
}
.radio {
	&__element {
		position: relative;
		// top: 0;
		// left: 0;
	}
}

.images {
	display: flex;
	flex-wrap: wrap;
	width: 100%
}
.image {
	max-width: 200px;
}
</style>