<template>
	<div class="logo">
		<div class="logo--nuxt"></div>
		<div class="logo--henris">
			hoi

		</div>
	</div>
</template>

<style lang="scss">
@import '~tools';

.logo {
	width: 50vw;
	display: block;
	height: 40vw;
	position: relative;
	overflow: hidden;
	border-radius: 3px;
	box-shadow: grid(0.25 0.25 3 0) color(Henris, 0.25), 0 -3px 0 0 color(Henris, 0.15) inset;
	&--nuxt {
		width: 100%;
		height: 100%;
		&:before,
		&:after {
			content: '';
			border-radius: 5vw 0 0 0;
			width: 40vw;
			height: 40vw;
			display: block;
			position: absolute;
			left: 50%;
			top: 100%;
		}
		&:before {
			background-color: color(Blue, 0.5);
			transform: scale(0.75, 1) translateX(-85%) translateY(-50%) rotate(45deg);
		}
		&:after {
			background-color: color(Green, 0.5);
			transform: scale(0.75, 1) translateX(-35%) translateY(-40%) rotate(45deg);
		}
	}
	&--henris {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: flex-end;
		justify-content: flex-end;
		svg {
			width: 8rem;
			margin-right: 2rem;
		}
		path {
			fill: color(Henris);
		}
	}
}
</style>
