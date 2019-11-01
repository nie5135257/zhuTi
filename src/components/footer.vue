<template>
	<div>
		<div class="box"> </div>
		<div class="footer">
			<div @click='$router.push("/home")' :class="$route.path=='/home' && active"> 
				<i class="el-icon-s-home"></i>
				<p>首页</p>
			</div>
			<div @click='$router.push("/zhuTi")' :class="$route.path=='/zhuTi' && active"> 
				<i class="el-icon-s-help"></i>
				<p>主题</p>
			</div>
			<div @click='$router.push("/font")' :class="$route.path=='/font' && active"> 
				<i class="el-icon-s-check"></i>
				<p>字体</p>
			</div>
			<div @click='$router.push("/music")' :class="$route.path=='/music' && active"> 
				<i class="el-icon-message-solid"></i>
				<p>铃声</p>
			</div>
			<div @click='$router.push("/my")' :class="$route.path=='/my' && active"> 
				<i class="el-icon-user-solid"></i>
				<p>我的</p>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				active: 'active'
			}
		}
	}
</script>
<style scoped="scoped" lang="less">
	.box {
		height: 1.2rem;
	}
	
	.footer {
		z-index: 1;
		position: fixed;
		bottom: 0;
		background: #fff;
		height: 1.2rem;
		width: 100%;
		display: flex;
		justify-content: space-around;
		align-items: center;
		text-align: center;
		color: #909399;
		border-top: 1px solid #DCDFE6;
		div {
			cursor: pointer;
			i {
				font-size: 0.5rem;
			}
			p {
				font-size: 0.35rem;
			}
		}
		.active {
			color: #ED6060;
		}
	}
</style>