<template>
	<div>
		<p>v-html</p>
		<div v-html='htmlText'></div>
		<div v-html='htmlText2'></div>
	</div>
</template>

<script>
	export default {
		name: 'vhtml',
		data () {
			return {
				htmlText: `<div>66666</div>`,
				htmlText2: '<span>9999</span>'
			}
		}
	}
</script>

<style>
</style>