<template>
	<div>
		<p>Vue.set全局操作</p>
		 <button @click="myFunction()">点我</button>
		 <p v-for="arrs in arr.abc">{{ arrs }}</p>
<p id="demo"></p>
	</div>
</template>

<script>
import Vue from 'vue'	
var attrs = {
	abc: ['aaa','bbb','ccc']
}
export default {
	data () {
		return {
			arr: attrs
		}
	},
	methods: {
		myFunction: function () {
			console.log(this.arr);
			//this.arr[1]='ddd';
			Vue.set(this.arr.abc,0,'ddd');
		}
	}
}
</script>

<style>
</style>