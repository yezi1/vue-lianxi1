<template>
	<div>
		<p>v-once</p>
		<p>在第一次DOM时进行渲染，渲染完成后视为静态内容，跳出以后的渲染过程。</p>		
		<div v-once>第一次绑定的值：{{ message }}</div>
		<div><input type="text" v-model="message"></div>
	</div>
</template>

<script>
	export default {
		name: 'vonce',
		data () {
			return {
				message: '绑定的值'
			}
		}
	}
</script>

<style>
</style>