<template>
	<div>
		<p>v-cloak</p>
		<p>在vue渲染完指定的整个DOM后才进行显示。它必须和CSS样式一起使用，</p>
		<div v-cloak>{{ message }}</div>
	</div>
</template>

<script>
	export default {
		name: 'vcloak',
		data () {
			return {
				message: '消失了哦'
			}
		}
	}
</script>

<style>
	[v-cloak] {
		display: none;
	}
</style>