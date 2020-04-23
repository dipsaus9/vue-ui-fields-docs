<template>
	<form data-vv-scope="uiFields" novalidate @submit.prevent="submit">
		<client-only>
			<uiFields name="filter" class="filter" component="fieldset" />
			<uiFields name="sort" class="sort" component="fieldset" />
		</client-only>

		<div class="images">
			<div v-for="(product, index) in filterData" :key="index">
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
<style lang="scss">
@import '~tools';

* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
}
fieldset {
	padding: 1rem;
	width: 50%;
	border: none;
}
.checkbox {
	&__input {
		appearance: none;
		background-color: #white;
		background-color: #DDDDDD;
		padding: 1rem;
		border-radius: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		margin: 0 0.5rem;

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
	&__element {
		font-size: 1.2rem;
	}
	&__label {
	}
}

.range {
	&__input {
		appearance: none;
		width: 100%;
		height: 2rem;
		background: #DDDDDD;
		outline: none;
		transition: opacity .2s;
	}
	&__input::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		width: 2rem;
		height: 2rem;
		background: #4CAF50;
		cursor: pointer;
	}
	&__element {
	}
	&__label {
	}
}
.ui-fields {
	&__field {
		margin: 1rem 0;
		&--checkbox {
			display: flex;
			flex-wrap: wrap;
			align-items: center;

		}
		&--range {
		}
	}
}

</style>