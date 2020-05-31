<template>
	<div>
		<h3 :class="{ active : isOpen }" @click="dropdown">
			{{ title }}
		</h3>
		<ul v-if="isOpen" class="sidebar__links">
			<li v-for="(page, index) in list" :key="index" class="sidebar__item">
				<NuxtLink class="sidebar__link" :to="`${base}/${page.url.split(' ').join('-').toLowerCase()}`">
					{{ page.name }}
				</NuxtLink>
				<ul v-if="page.children && page.children.length">
					<li v-for="(subPage, key) in page.children" :key="key" class="sidebar__item-secondary">
						<NuxtLink class="sidebar__link" :to="`${base}/${page.url.split(' ').join('-').toLowerCase()}${subPage.url}`">
							{{ subPage.name }}
						</NuxtLink>
					</li>
				</ul>
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