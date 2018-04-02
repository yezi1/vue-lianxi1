<template>
  <div id="app">
    <img src="./assets/bug.jpg"> 
	  <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#app img {
	width: 150px;
	height: 150px;
}

a {
	display: inline-block;
	padding: 0 8px;
	height: 22px;
	line-height: 22px;
	border-radius: 5px;
	text-decoration: none;
	font-size: 14px;
	color: #fff;
	margin-bottom: 10px;
  margin-left: 8px;
}



a:nth-child(1) {
	background-color: #FFB90F;
}

a:nth-child(2) {
	background-color: #FF7F00;
}

a:nth-child(3) {
	background-color: #FF0000;
}

a:nth-child(4) {
	background-color: #FA8072;
}

a:nth-child(5) {
	background-color: #C71585;
}

a:nth-child(6) {
	background-color: #9ACD32;
}

a:nth-child(7) {
	background-color: #8B3E2F;
}

a:nth-child(8) {
	background-color: #7CFC00;
}

a:nth-child(9) {
	background-color: #4B0082;
}

a:nth-child(10) {
	background-color: #00FA9A;
}

a:nth-child(11) {
	background-color: #000000;
}

a:nth-child(12) {
	background-color: #BF3EFF;
}

a:nth-child(13) {
	background-color: #FF8247;
}

a:nth-child(14) {
	background-color: #FF1493;
}

a:nth-child(15) {
	background-color: #BDBDBD;
}

a:nth-child(16) {
	background-color: #CD6600;
}

a:nth-child(17) {
	background-color: #C0FF3E;
}

a:nth-child(18) {
	background-color: #B0C4DE;
}

a:nth-child(19) {
	background-color: #8F8F8F;
}

a:nth-child(20) {
	background-color: #8B008B;
}

a:visited {
	color: #fff;
}
</style>
