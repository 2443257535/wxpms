<template>
	<div class="footer">
		<!-- 
			首页、任务、报表、我的

		 -->
		<van-tabbar
			v-model="active"
			active-color="#ff976a"
			route
		>
			<van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
			<van-tabbar-item icon="comment-circle-o" to="/task">任务</van-tabbar-item>
			<van-tabbar-item icon="orders-o" to="/report">报表</van-tabbar-item>
			<van-tabbar-item icon="friends-o" to="/personal">我的</van-tabbar-item>
		</van-tabbar>
		<div style="height: 50px;"></div>
	</div>
</template>

<script>
export default {
	data(){
		return{
			active: 0
		}
	}
}
</script>

<style scoped lang="scss">
.footer{
	margin-top: 10px;
	.van-tabbar{
		border-top: 1px solid #ddd;
	}
}
</style>
