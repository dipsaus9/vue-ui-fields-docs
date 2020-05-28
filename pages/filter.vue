<template>
	<div>
		<h1>Filter page</h1>
		<form novalidate @submit.prevent="submit">
			<client-only>
				<uiFields name="filter" class="filter" component="fieldset" />
				<uiFields name="sort" class="sort" component="fieldset" />
			</client-only>
		</form>

		<div class="products">
			<div v-for="(product, index) in filterData" :key="index" class="products__product">
				<img class="products__image" :src="product.img" alt="" srcset="">
				<span class="products__price">{{ product.price }}</span>
			</div>
		</div>
	</div>
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
		this.$uiFields.new('sort');

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
						value: 'red',
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
				label: 'Prijs',
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
						name: 'default',
						label: 'Default',
						value: 'default'
					},
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

		this.$uiFields.subscribe('filter', this.filter);
		this.$uiFields.subscribeField('sort', 'sort', this.sortData);

		this.filterData = this.allData;
	},
	destroy() {
		this.$uiFields.unsubscribe('filter');
		this.$uiFields.unsubscribeField('sort', 'sort');
	},
	methods: {
		filter() {
			const colorValues = this.$uiFields.getValue('filter','color');
			const maxPrice = this.$uiFields.getValue('filter','price');

			const allData = this.allData;

			this.filterData = allData.filter(product => {
				// filter on colors if colors are set
				if(colorValues.length) {
					if(!colorValues.includes(product.color)) {
						return false;
					}
				}
				if(maxPrice < product.price) {
					return false;
				}
				return true;
			});
			this.sortData();
		},
		sortData() {
			const sortType = this.$uiFields.getValue('sort','sort');

			if(sortType == 'lowtohigh') {
				this.filterData.sort((a, b) =>{
					return a.price - b.price;
				});
			} else {
				this.filterData.sort((a, b) => {
					return b.price - a.price;
				});
			}

		}
	}
};
</script>
<style lang="scss" scoped>
* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
}

h1 {
	padding: 0 1rem;
}

fieldset {
	padding: 0 1rem;
	width: 50%;
	border: none;
}
.checkbox {
	&__input {
		appearance: none;
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 1rem;
		margin: 0 0.5rem;
		border-radius: 0;
		background-color: #white;
		background-color: #DDDDDD;
		border: 1px solid black;
	}
	&__input:first-child {
		margin-left: 0;
	}
	&__input:hover {
		cursor: pointer;
	}
	&__input:after {
		content: '';
		position: absolute;
		width: 0;
		height: 0;
		background-color: #4CAF50;
		transition: 0.2s;
	}
	&__input:checked:after {
		content: '';
		position: absolute;
		width: 2rem;
		height: 2rem;
		color: #99a1a7;
		background-color: #4CAF50;
	}
}

.range {
	&__input {
		appearance: none;
		width: 100%;
		height: 2rem;
		background: #DDDDDD;
		border: 1px solid black;
	}
	&__input::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		width: 2rem;
		height: 2rem;
		background: #4CAF50;
		border: 1px solid black;
		cursor: pointer;
	}
}
.select {
	&__input {
		appearance: none;
		height: 2rem;
		width: 100%;
		padding: 0 1rem;
		border-radius: 0;
		background: #DDDDDD;
		border: none;
		border: 1px solid black;
	}
	& option {

	}
	&__element {
	}
	&__label {
	}
}
.ui-fields {
	&__field {
		margin: 1rem 0;
		display: flex;
		&--checkbox {
			flex-wrap: wrap;
			align-items: center;
		}
		&--range {
			flex-direction: column-reverse;
		}
		&--select {
			flex-direction: column-reverse;
		}
	}
	&__label {
		text-transform: uppercase;
		font-weight: 600;
	}
}

.products {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	padding: 1rem;
	&__product {
		position: relative;
		width: 20rem;
		height: 20rem;
		margin: 2rem 0;
		overflow: hidden;
		border: 1px solid black;
	}
	&__image {
		display: block;
		height: 100%;
		margin: 0 auto;
	}
	&__price {
		position: absolute;
		bottom: 0;
		left: 0;
		padding: 1rem;
		text-align: center;
		font-size: 1.5rem;
		background-color: #4CAF50;
		color: white;
	}
	&__price::before {
		content: '€'
	}
}

</style>