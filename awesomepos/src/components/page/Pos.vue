<template>
	<div class="pos">
		<div>
			<el-row>
				<el-col :span='7'>
					<el-tabs>
						<el-tab-pane label="点餐">
							点餐
						</el-tab-pane>
						<el-tab-pane label="挂单">
							挂单
						</el-tab-pane>
						<el-tab-pane label="外卖">
							外卖
						</el-tab-pane>
					</el-tabs>
				</el-col>
				<!--商品展示-->
				<el-col :span="17">
					我是产品栏
				</el-col>
			</el-row>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Pos',
		data() {
			return {}
		}
	}
</script>
<style scoped>

</style>