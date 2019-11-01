<template>
	<div id="musicBox" @scroll="handleScroll" ref='home'>
		<!--图片列表-->
		<div class="listImg">
			<my-footerimg>
				<img slot='img' src="../assets/ttl/8.jpg" alt="" />
				<img slot='img' src="../assets/ttl/10.jpg" alt="" />
			</my-footerimg>
			<my-footerimg>
				<img slot='img' src="../assets/ttl/7.jpg" alt="" />
				<img slot='img' src="../assets/ttl/2.jpg" alt="" />
			</my-footerimg>
		</div>

		<!--搜索框-->
		<div class="souSuoBox" ref='souSuoBox'>
			<div id='souSuo'>
				<el-button height="0.5rem" icon="el-icon-search">
					<input type="text" id="" value="" placeholder="星空物语" />
				</el-button>
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

		<!--字体精选-->
		<div class="music">
			<my-item-top>
				<span slot='ttl'>精选铃声</span>
				<span slot='ttl1'>荣辱不惊，看庭前花开花落；去留无意，望天空云卷云舒。</span>
				<i slot='right' class="el-icon-arrow-right"></i>
			</my-item-top>
			<my-music :obj='musicOne'></my-music>
			<my-footerimg>
				<img slot='img' src="../assets/ttl/1.jpg" alt="" />
				<img slot='img1' src="../assets/ttl/6.jpg" alt="" />
			</my-footerimg>
		</div>

		<!--精选字体-->
		<div class="music">
			<my-item-top>
				<span slot='ttl'>精选铃声</span>
				<span slot='ttl1'>荣辱不惊，看庭前花开花落；去留无意，望天空云卷云舒。</span>
				<i slot='right' class="el-icon-arrow-right"></i>
			</my-item-top>
			<my-music :obj='musicTwo'></my-music>
			<my-footerimg>
				<img slot='img' src="../assets/ttl/2.jpg" alt="" />
			</my-footerimg>
		</div>

		

		<!--八月最受欢迎的字体-->
		<div class="music">
			<my-item-top>
				<span slot='ttl'>精选铃声</span>
				<span slot='ttl1'>荣辱不惊，看庭前花开花落；去留无意，望天空云卷云舒。</span>
				<i slot='right' class="el-icon-arrow-right"></i>
			</my-item-top>
			<my-music :obj='musicThree'></my-music>
			<my-footerimg>
				<img slot='img' src="../assets/ttl/10.jpg" alt="" />
				<img slot='img1' src="../assets/ttl/12.jpg" alt="" />
			</my-footerimg>
		</div>

		

		

		<!--到底了-->
		<my-footer-box></my-footer-box>

		<my-footer></my-footer>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
				musicOne: {},
				musicTwo: {},
				musicThree: {},
				musicFour: {},
				size: 6,
				current: 1,
				allLoaded: false
			}
		},
		methods: {
			handleScroll() {
				let x = this.$refs.home.scrollTop
				this.$refs.souSuoBox.style.background = 'rgba(255,255,255,'+(x*0.02)+')';
			},
			loadTop(id) {
			  	setTimeout(()=>{
					this.$refs.loadmore.onTopLoaded()
			  	},3000)
			},
			loadBottom(id) {
			  
			  	this.$refs.loadmore.onBottomLoaded()
			}
			
		},
		async created() {
			this.musicOne = await this.getMusic(6,1)
			this.musicTwo = await this.getMusic(6,2)
			this.musicThree = await this.getMusic(6,3)
			this.musicFour = await this.getMusic(6,4)
		}
	}
</script>

<style scoped="scoped" lang="less">
	#musicBox {
		/*轮播图*/
		height: 100%;
		overflow: scroll;
		.listImg{
			margin-top: 1rem;
		}
		/*搜索框*/
		.souSuoBox {
			position: fixed;
			top: 0;
			z-index: 5;
			width: 100%;
			background: rgba(255,255,255,0);
			padding: 0.2rem;
			#souSuo {
				/*top: 0.1rem;*/
				position: relative;
				left: 50%;
				transform: translateX(-50%);
				width: 80%;
				i {
					font-weight: bold;
				}
				.el-button {
					padding: 0.1rem 0.2rem;
					width: 100%;
					input {
						width: 80%;
						border: none;
						outline: none;
					}
				}
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
		/*主题精选*/
		#mlog {}
		/*精选字体*/
		#font {}
		/*星座的守护*/
		/*八月份最受欢迎的字体*/
		/*精选铃声*/
		/*梦中人*/
		/*到底了*/
	}
</style>