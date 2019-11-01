<template>
	<div id="my"  ref='home'>
		
		<div class="set">
			<i class="el-icon-setting"></i>
		</div>
		
		<div class="user">
			<div class="userImg">
				<img src="../assets/img/1.0.jpg" alt="" />
			</div>
			<div class="txt">
				<p class="ttl">岁月暗影</p>
				<p class="ttl1">OPPO账号：182***10</p>
			</div>
			<div class="qianDao">
				<my-btn-price btn='btn1' txt='签到'></my-btn-price>
			</div>
		</div>

		<!--商品列表-->
		<div id='list'>
			<div>
				<div style="color: #409EFF">
					<i class="el-icon-s-data"></i>
				</div>
				<p>排行榜</p>
			</div>
			<div>
				<div style="color: #67C23A">
					<i class="el-icon-s-check"></i>
				</div>
				<p>会员专区</p>
			</div>
			<div>
				<div style="color: #E6A23C">
					<i class="el-icon-share"></i>
				</div>
				<p>福利社</p>
			</div>
			<div>
				<div style="color: #F56C6C">
					<i class="el-icon-s-promotion"></i>
				</div>
				<p>小编推荐</p>
			</div>
		</div>

		<div class="item">
			<div>
				<i style="color: #F5CD37;" class="el-icon-view"></i>
				<span>可币</span>
			</div>
			<div>
				<span>0</span>
				<i slot='right' class="el-icon-arrow-right"></i>
			</div>
		</div>
		
		<div class="item">
			<div>
				<i style="color: #F9874A;" class="el-icon-time"></i>
				<span>积分</span>
			</div>
			<div>
				<span>1</span>
				<i slot='right' class="el-icon-arrow-right"></i>
			</div>
		</div>
		
		<div class="item">
			<div>
				<i style="color: #FF7C22;" class="el-icon-location-outline"></i>
				<span>会员专区</span>
			</div>
			<div>
				<i slot='right' class="el-icon-arrow-right"></i>
			</div>
		</div>
		
		<div class="item">
			<div>
				<i style="color: #4E68FB;" class="el-icon-refresh"></i>
				<span>积分商城</span>
			</div>
			<div>
				<i slot='right' class="el-icon-arrow-right"></i>
			</div>
		</div>
		<div class="item">
			<div>
				<i style="color: #28D39E;" class="el-icon-goods"></i>
				<span>OPPO商城</span>
			</div>
			<div>
				<i slot='right' class="el-icon-arrow-right"></i>
			</div>
		</div>
		<div class="item">
			<div>
				<i style="color: #F9874A;" class="el-icon-download"></i>
				<span>下载管理</span>
			</div>
			<div>
				<span>5</span>
				<i slot='right' class="el-icon-arrow-right"></i>
			</div>
		</div>
		<div class="item">
			<div>
				<i style="color: #4E68FB;" class="el-icon-bell"></i>
				<span>公告</span>
			</div>
			<div>
				<span>8</span>
				<i slot='right' class="el-icon-arrow-right"></i>
			</div>
		</div>
		<div class="item">
			<div>
				<i style="color: #28D39E;" class="el-icon-share"></i>
				<span>帮助与反馈</span>
			</div>
			<div>
				<i slot='right' class="el-icon-arrow-right"></i>
			</div>
		</div>

		<my-footer></my-footer>
	</div>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		methods: {
			
		},
		async created() {
			
		}
	}
</script>

<style scoped="scoped" lang="less">
	#my {
		.set{
			display: flex;
			justify-content: flex-end;
			font-size: 0.5rem;
			padding: 0.2rem;
		}
		.user{
			display: flex;
			justify-content: space-between;
			margin:0.4rem 0.2rem;
			align-items: center;
			.userImg{
				flex: 1;
				img{
					width: 1rem;
					height: 1rem;
					border-radius: 0.5rem;
				}
			}
			.txt{
				flex: 3;
				.ttl{
					font-weight: 700;
					font-size: 0.4rem;
				}
			}
			.qianDao{
				flex: 0.7;
			}
		}
		
		/*商品列表*/
		#list {
			display: flex;
			justify-content: space-around;
			text-align: center;
			/*color: red;*/
			>div {
				cursor: pointer;
				margin-top: 0.3rem;
				margin-bottom: 0.4rem;
				i {
					font-size: 0.6rem;
				}
			}
		}
		.item{
			font-size: 0.35rem;
			display: flex;
			padding: 0.3rem 0.2rem;
			justify-content: space-between;
			span{
				margin: 0 0.1rem;
			}
		}
	}
</style>