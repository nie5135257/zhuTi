<template>
	<div id="home" @scroll="handleScroll" ref='home'>
		<!--轮播图-->
		<div id='carousel'>
			<el-carousel :interval="6000" height="4rem" arrow="always">
				<el-carousel-item>
					<img src="../assets/ttl/1.png" alt="" />
				</el-carousel-item>
				<el-carousel-item>
					<img src="../assets/ttl/6.jpg" alt="" />
				</el-carousel-item>
				<el-carousel-item>
					<img src="../assets/ttl/8.jpg" alt="" />
				</el-carousel-item>
				<el-carousel-item>
					<img src="../assets/ttl/12.jpg" alt="" />
				</el-carousel-item>
			</el-carousel>
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

		<!--主题精选-->
		<div id='mlog'>
			<my-item-top>
				<span slot='ttl'>主题精选</span>
				<i slot='right' class="el-icon-arrow-right"></i>
			</my-item-top>
			<my-zhuti :obj='zhuTiOne' btn='btn'></my-zhuti>
		</div>

		<!--精选字体-->
		<div id='font'>
			<my-item-top>
				<span slot='ttl'>精选字体</span>
				<i slot='right' class="el-icon-arrow-right"></i>
			</my-item-top>
			<my-font :obj='fontOne' btn='btn1'></my-font>
			<my-footerimg>
				<img slot='img' src="../assets/ttl/4.jpg" alt="" />
			</my-footerimg>
		</div>

		<!--星座的守护-->
		<div class="">
			<my-item-top>
				<span slot='ttl'>简约风</span>
				<span slot='ttl1'>荣辱不惊，看庭前花开花落；去留无意，望天空云卷云舒。</span>
				<i slot='right' class="el-icon-arrow-right"></i>
			</my-item-top>
			<my-zhuti :obj='zhuTiTwo' btn='btn' inline='true'></my-zhuti>
			<my-footerimg>
				<img slot='img' src="../assets/ttl/2.jpg" alt="" />
				<!--<img slot='img1' src="../assets/ttl/2.jpg" alt="" />-->
			</my-footerimg>
		</div>

		<!--八月最受欢迎的字体-->
		<div class="">
			<my-item-top>
				<span slot='ttl'>八月最受欢迎的字体</span>
				<span slot='ttl1'>荣辱不惊，看庭前花开花落；去留无意，望天空云卷云舒。</span>
				<i slot='right' class="el-icon-arrow-right"></i>
			</my-item-top>
			<my-zhuti :obj='fontTwo' btn='btn' inline='true' src='true'></my-zhuti>
		</div>

		<!--精选铃声-->
		<div class="music">
			<my-item-top>
				<span slot='ttl'>精选铃声</span>
				<span slot='ttl1'>荣辱不惊，看庭前花开花落；去留无意，望天空云卷云舒。</span>
				<i slot='right' class="el-icon-arrow-right"></i>
			</my-item-top>
			<my-music :obj='music'></my-music>
			<my-footerimg>
				<img slot='img' src="../assets/ttl/11.jpg" alt="" />
				<img slot='img1' src="../assets/ttl/5.jpg" alt="" />
			</my-footerimg>
		</div>

		<!--梦中人-->
		<div>
			<my-item-top none='1'>
				<span slot='ttl'>热门主题</span>
				<span slot='ttl1'>荣辱不惊，看庭前花开花落；去留无意，望天空云卷云舒。</span>
				<i slot='right' class="el-icon-arrow-right"></i>
			</my-item-top>
			<my-zhuti :obj='zhuTiThree' btn='btn'></my-zhuti>
			<my-footerimg>
				<img slot='img' src="../assets/ttl/6.jpg" alt="" />
				<img slot='img1' src="../assets/ttl/6.jpg" alt="" />
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
				zhuTiOne: {},
				zhuTiTwo: {},
				zhuTiThree: {},
				fontOne: {},
				fontTwo: {},
				music: {},
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
			let z_label1 = ["热门"]
			this.zhuTiOne = await this.getZhuTi(6,1,{label: z_label1})
			
			let z_label2 = ["简约"]
			this.zhuTiTwo = await this.getZhuTi(6,1,{label: z_label2})
			
			let z_label3 = ["精选"]
			this.zhuTiThree = await this.getZhuTi(6,1,{label: z_label3})
			
			
			let f_label1 = ["da","插画"]
			this.fontOne = await this.getFont(6,1)
			
			let f_label2 = ["da","插画"]
			this.fontTwo = await this.getFont(6,1)
			
			this.music = await this.getMusic(6,1)
			
			
			
		}
	}
</script>

<style scoped="scoped" lang="less">
	#home {
		/*轮播图*/
		height: 100%;
		overflow: scroll;
		#carousel {
			.el-carousel__item {
				img {
					width: 100%;
					height: 100%;
				}
			}
			button.el-carousel__arrow {
				height: 0.36rem;
				width: 0.36rem;
			}
			.el-carousel__indicator {
				button.el-carousel__button {
					width: 0.8rem;
				}
			}
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