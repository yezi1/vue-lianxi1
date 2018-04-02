<template>
	<div>
		<p>v-model</p>
		<p>原始文本信息：{{message}}</p>
		<h3>文本框</h3>
		<p>v-model:<input type="text" v-model="message"></p>
		<p>v-model.lazy:<input type="text" v-model.lazy="message"></p>
		<p>v-model.number:<input type="text" v-model.number="message"></p>
		<p>v-model.trim:<input type="text" v-model.trim="message"></p>
		<p>v-model.trim.number:<input type="text" v-model.trim.number="message"></p>
		<p>v-model.trim.lazy:<input type="text" v-model.trim.lazy="message"></p>
		<p>v-model.trim.number.lazy:<input type="text" v-model.trim.number.lazy="message"></p>

		<h3>多选绑定一个数组</h3>
		<p>
			<input type="checkbox" id="JSPang" value="JSPang" v-model="web_Names">
			<label for="JSPang">JSPang</label><br/>
			<input type="checkbox" id="Panda" value="Panda" v-model="web_Names">
			<label for="JSPang">Panda</label><br/>
			<input type="checkbox" id="PanPan" value="PanPan" v-model="web_Names">
			<label for="JSPang">PanPan</label>
			<p>{{web_Names}}</p>
		</p>

		<h3>单选按钮绑定</h3>
		<input type="radio" id="one" value="男" v-model="sex">
		<label for="one">男</label>
		<input type="radio" id="two" value="女" v-model="sex">
		<label for="one">女</label>
		<p>{{sex}}</p>
	</div>
</template>

<script>
	export default {
		name: 'vmodel',
		data() {
			return {
				message: '66',
				web_Names: true,
				sex: '男'
			}
		}
	}
</script>

<style>

</style>