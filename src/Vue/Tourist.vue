<template>
	<div class="index">
		<Nav></Nav>
		<Browse></Browse>
		<!-- <router-view></router-view> -->
	</div>
</template>
<script>
	import Nav from "../components/Nav.vue"
	import Browse from "./BrowseDiary.vue"
	export default{
		components: {
			Nav,
			Browse
		}
	}
</script>
<style>
	/*.index{
		width: 1000px;
		margin: 0 auto;
		overflow: hidden;

	}*/
</style>


