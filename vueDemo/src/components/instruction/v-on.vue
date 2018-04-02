<template>
	<div>
		<p>v-on</p>
		<div>{{ num1 }}</div>
		<div v-on:click="jia">+</div>
		<div @click="jian">-</div>
		
		<input type="text" placeholder="回车加一" v-on:keyup.enter="onEnter">
		<input type="text" placeholder="回车加输入数字" @keyup.enter="onEnter2" v-model="secondCount">
	</div>
</template>

<script>
	export default {
		name: 'von',
		data () {
			return {
				num1: 1,
				secondCount: 10
			}
		},
		methods: {
			jian: function () {
				this.num1 > 0 ? this.num1-- : this.num1;
			},
			jia: function () {
				this.num1++;
			},
			onEnter: function () {
				this.jia();
			},
			onEnter2: function () {
				this.num1 = this.num1 + parseInt(this.secondCount);
			}
		}
	}
</script>

<style>
</style>