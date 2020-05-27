<template>
	<div>
		<h3 @click="dropdown">
			{{ title }}
		</h3>
		<ul v-if="isOpen" class="sidebar__links">
			<li v-for="(page, index) in list" :key="index" class="sidebar__item">
				<NuxtLink class="sidebar__link" :to="`${base}/${page.split(' ').join('-').toLowerCase()}`">
					{{ page }}
				</NuxtLink>
			</li>
		</ul>
	</div>
</template>

<script>

export default {
	props: {
		title: {
			type: String,
			default: '',
		},
		base: {
			type: String,
			default: '',
		},
		list: {
			type: Array,
			default: () => []
		},
		open: {
			type: Boolean,
			default: false,
		}
	},
	data() {
		return {
			isOpen: this.open
		};
	},
	methods: {
		dropdown() {
			this.isOpen = !this.isOpen;
		}
	}
};
</script>